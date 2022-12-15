import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import { storeUserToken } from 'store/slices/authSlice';

import ElementButton from '@/modules/common/buttons/elementButton';
import ChevronLeft from '@/modules/common/icons/chevronLeft';
import MapPinOutlineIcon from '@/modules/common/icons/mapPinIcon';
import ShoppingBagOutlineIcon from '@/modules/common/icons/shoppingBagIcon';
import UserOutlineIcon from '@/modules/common/icons/userIcon';
import { toast } from 'react-toastify';
import { resetCart } from 'store/slices/cartSlice';
import { resetCompare } from 'store/slices/compareSlice';
import { resetAddress } from 'store/slices/customerAddressSlice';
import { resetWishilist } from 'store/slices/productsSlice';
import { resetUserDetails } from 'store/slices/userSlice';
import Currency from '../selectCurrency';
import Language from '../selectLanguage';
import ThemeChanger from '../themeChanger';

interface Props {
  drawer: boolean;
  closeDrawer: () => void;
}

const Drawer: React.FC<Props> = ({ drawer, closeDrawer }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );
  const customer = useAppSelector(
    (state) => state.persistedReducer.user.customerDetails
  );

  const user: string = customer?.name
    ? customer?.name
    : customer?.email
    ? customer?.email
    : '';

  const getUsername = (name: string): string => {
    let computedName = '';
    const length = name.length;
    if (length > 20) {
      computedName = name.slice(0, 19);
      computedName += '...';
    } else computedName = name;

    return computedName;
  };

  const handleButtonClick = (path: string) => {
    closeDrawer();
    router.push(path);
  };

  const handleAuthState = () => {
    closeDrawer();
    if (token) {
      toast.error('Logged out successfully!', {
        containerId: 'bottom-right',
      });
    }
    localStorage.removeItem('persist:root');
    dispatch(resetAddress());
    dispatch(resetUserDetails());
    dispatch(resetWishilist());
    dispatch(resetCart());
    dispatch(resetCompare());
    dispatch(storeUserToken(''));
    router.push('/account/sign-in');
  };

  return (
    <div
      className={`fixed top-0 z-50 flex h-full w-full flex-col justify-between bg-white px-8 py-4 transition duration-200 ease-in lg:hidden ${
        drawer ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="">
        <div className="h-5 space-x-3 text-xs">
          <Language />
          <span>|</span>
          <Currency />
          <ThemeChanger />
        </div>
        <hr className="my-3" />
        <div className="flex flex-wrap items-center">
          <ElementButton onClickFunction={() => closeDrawer()}>
            <ChevronLeft />
          </ElementButton>
          <span className="text-3xl font-medium text-primary dark:text-dark_primary">
            BS Commerce
          </span>
        </div>
        <div className="font-medium">
          <div className="my-5 border-b border-t py-4">
            <div
              className="mb-3 flex flex-row items-center"
              onClick={() => handleButtonClick('/myAccount')}
            >
              <div className="my-2 mr-2 inline rounded-full border border-gray-700 p-2">
                <UserOutlineIcon />
              </div>
              <ElementButton className="flex flex-col">
                <>
                  <span>My Account</span>
                  <span>{getUsername(user)}</span>
                </>
              </ElementButton>
            </div>
            <ElementButton
              className="ml-1 mb-1 flex"
              onClickFunction={() => handleButtonClick('/order')}
            >
              <>
                <ShoppingBagOutlineIcon />
                <span className="ml-5">My Order</span>
              </>
            </ElementButton>
          </div>
          <ElementButton
            className="mb-4 ml-1 flex"
            onClickFunction={() => handleButtonClick('/myAccount/addresses')}
          >
            <>
              <MapPinOutlineIcon />
              <span className="ml-5">Address</span>
            </>
          </ElementButton>
        </div>
      </div>
      <button
        className="w-full rounded-full border-2 border-primary py-2 text-primary dark:text-dark_primary"
        onClick={() => handleAuthState()}
      >
        {token ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Drawer;
