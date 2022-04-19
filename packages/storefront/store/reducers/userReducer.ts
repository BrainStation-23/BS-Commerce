import Types from "../types";

const initialState = {
  loggedInUser: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.USER_LOGIN_FULFILLED:
    {
      const loggedInUser = action.payload.data;
      return {
        ...state,
        loggedInUser,
      };
    }
  }
  return state;
}
