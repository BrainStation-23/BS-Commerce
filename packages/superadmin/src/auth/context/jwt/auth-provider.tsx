/* eslint-disable no-lonely-if */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useReducer } from 'react';

import axios from 'src/query/api/axios';
import { endpoints } from 'src/query/api/endpoints';

import { ActionMapType, AuthStateType, AuthUserType, TokenMessageDataType } from '../../types';
import { AuthContext } from './auth-context';
import { isValidToken, setSession } from './utils';

// ----------------------------------------------------------------------
/**
 * NOTE:
 * We only build demo at basic level.
 * Customer will need to do some extra handling yourself if you want to extend the logic and other features...
 */
// ----------------------------------------------------------------------

enum Types {
  INITIAL = 'INITIAL',
  TOKEN_UPDATE = 'TOKEN_UPDATE',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',

  UPDATE_LOADING_STATE = 'UPDATE_LOADING_STATE',
  SET_RETRY_LOADING = 'SET_RETRY_LOADING',
}

type Payload = {
  [Types.INITIAL]: {
    user: AuthUserType;
  };
  [Types.TOKEN_UPDATE]: {
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;

  [Types.UPDATE_LOADING_STATE]: {
    loading: boolean;
  };
  [Types.SET_RETRY_LOADING]: {
    retryLoading: boolean;
  };
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  user: null,
  loading: true,
  retryLoading: false,
};

const reducer = (state: AuthStateType, action: ActionsType): AuthStateType => {
  if (action.type === Types.INITIAL) {
    if (action.payload.user?.accessToken) {
      return {
        loading: false,
        retryLoading: false,
        user: action.payload.user,
      };
    }
    if (state.user?.accessToken) {
      return {
        loading: false,
        retryLoading: false,
        user: {
          ...action.payload.user,
          accessToken: state.user.accessToken,
        },
      };
    }
    return {
      loading: false,
      retryLoading: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.TOKEN_UPDATE) {
    return {
      ...state,
      user: { ...state.user, ...action.payload.user },
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      user: null,
    };
  }

  if (action.type === Types.UPDATE_LOADING_STATE) {
    return {
      ...state,
      loading: action.payload.loading,
    };
  }

  if (action.type === Types.SET_RETRY_LOADING) {
    return {
      ...state,
      retryLoading: action.payload.retryLoading,
    };
  }

  return state;
};

// ----------------------------------------------------------------------

const STORAGE_ACCESS_KEY = 'accessToken';

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem(STORAGE_ACCESS_KEY);

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        try {
          // Fetch profile data for the logged-in user
          const res = await axios.get(endpoints.profile.me);
          const { data } = res.data;

          const user = {
            ...data,
            accessToken,
          };

          dispatch({
            type: Types.INITIAL,
            payload: { user },
          });
        } catch (profileError: any) {
          // If profile fetch fails (e.g. 403), still keep tokens but clear user profile
          console.error('Failed to fetch profile in initialize()', profileError);
          dispatch({
            type: Types.INITIAL,
            payload: {
              user: {
                accessToken,
              },
            },
          });
        }
      } else {
        setSession(null);
        dispatch({
          type: Types.INITIAL,
          payload: {
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      /* When the access token expires during a user session, Axios intercepts the 401 response
      and fetches a new token using the refresh token in the axios.ts file. However,
      the axios.ts file cannot directly update the provider context data.
      Therefore, we resort to using window.postMessage to update the context data. */

      // Check if the event data is an object and has the required attributes
      if (typeof event.data === 'object' && event.data !== null) {
        const { accessToken, refreshToken, messageType } = event.data as TokenMessageDataType;

        if (messageType === 'logout') {
          dispatch({
            type: Types.LOGOUT,
          });
        } else if (messageType === 'setRetryLoading') {
          const { retryLoading } = event.data;
          dispatch({
            type: Types.SET_RETRY_LOADING,
            payload: {
              retryLoading,
            },
          });
        }
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      // Cleanup function to remove the message listener when the component unmounts
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // LOGIN
  const login = useCallback(async (username: string, password: string) => {
    const data = {
      username,
      password,
    };

    const res = await axios.post(endpoints.auth.login, data);
    const { token } = res.data.data;
    // Store single access token only
    setSession(token);

    dispatch({
      type: Types.LOGIN,
      payload: {
        user: {
          accessToken: token,
          isValid: true,
        },
      },
    });
    await initialize();
    return res.data;
  }, []);

  // REGISTER
  const register = useCallback(
    async (email: string, password: string, firstName: string, lastName: string) => {
      const data = {
        email,
        password,
        firstName,
        lastName,
      };

      const res = await axios.post(endpoints.auth.register, data);

      const { token, accessToken, user } = res.data.data || res.data;
      const finalAccessToken = token || accessToken;

      setSession(finalAccessToken);

      dispatch({
        type: Types.REGISTER,
        payload: {
          user: {
            ...(user || {}),
            accessToken: finalAccessToken,
          },
        },
      });
    },
    []
  );

  // LOGOUT
  const logout = useCallback(async (withLogoutAPI?: Boolean) => {
    if (withLogoutAPI) {
      try {
        await axios.post(endpoints.auth.logout);
      } catch (e) {
        /* empty */
      }
    }
    setSession(null);
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  const refetchMe = useCallback(async () => {
    await initialize();
  }, [initialize]);

  // ----------------------------------------------------------------------

  const checkAuthenticated =
    state?.user && state?.user?.accessToken ? 'authenticated' : 'unauthenticated';
  const status = state.loading || state.retryLoading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      method: 'jwt',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      retryLoading: state.retryLoading,
      //
      login,
      register,
      logout,
      refetchMe,
    }),
    [login, logout, register, state.user, status, state.retryLoading, refetchMe]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
