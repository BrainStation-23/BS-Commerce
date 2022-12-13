import Link from 'next/link';

import HomeOutlineIcon from '@/modules/common/icons/homeIcon';
import HeartIcon from '@/modules/common/icons/heartIcon';
import ShoppingCartOutlineIcon from '@/modules/common/icons/shoppingCartIcon';
import UserOutlineIcon from '@/modules/common/icons/userIcon';
import ElementButton from '@/modules/common/buttons/elementButton';

interface Props {
  openDrawer: () => void;
}

const BottomNavigationBar: React.FC<Props> = ({ openDrawer }: Props) => {
  return <>
    <div className="text-white fixed bottom-0 z-40 flex w-full flex-row items-center justify-center bg-primary py-3 dark:bg-dark_primary lg:hidden">
      <div className="flex w-full flex-row justify-evenly md:w-9/12">
        <Link href="/" passHref>

          <ElementButton className="flex flex-col items-center">
            <>
              <HomeOutlineIcon />
              <span>Home</span>
            </>
          </ElementButton>

        </Link>
        <Link href="/wishlist" passHref>

          <ElementButton className="flex flex-col items-center fill-primary stroke-white dark:fill-dark_primary dark:stroke-dark_text">
            <>
              <HeartIcon />
              <span>Wishlist</span>
            </>
          </ElementButton>

        </Link>
        <Link href="/cart" passHref>

          <ElementButton className="flex flex-col items-center">
            <>
              <ShoppingCartOutlineIcon />
              <span>Cart</span>
            </>
          </ElementButton>

        </Link>
        <ElementButton
          className="flex flex-col items-center"
          onClickFunction={() => openDrawer()}
        >
          <>
            <UserOutlineIcon />
            <span>More</span>
          </>
        </ElementButton>
      </div>
    </div>
  </>;
};

export default BottomNavigationBar;
