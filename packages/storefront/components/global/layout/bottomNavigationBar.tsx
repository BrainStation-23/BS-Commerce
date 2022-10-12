import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  HeartOutlineIcon,
  HomeOutlineIcon,
  ShoppingCartOutlineIcon,
  UserOutlineIcon,
} from './headerIcons';
import { toast } from 'react-toastify';
import { resetAddress } from 'store/slices/customerAddressSlice';

interface Props {
  openDrawer: () => void;
}

const BottomNavigationBar: React.FC<Props> = ({ openDrawer }: Props) => {
  return (
    <>
      <div className="fixed bottom-0 z-40 flex w-full flex-row items-center justify-center bg-primary py-3 dark:bg-dark_primary lg:hidden">
        <div className="flex w-full flex-row justify-evenly md:w-9/12">
          <Link href="/" passHref>
            <button className="flex flex-col items-center">
              <HomeOutlineIcon />
              <span>Home</span>
            </button>
          </Link>
          <Link href="/wishlist" passHref>
            <button className="flex flex-col items-center">
              <HeartOutlineIcon />
              <span>Wishlist</span>
            </button>
          </Link>
          <Link href="/cart" passHref>
            <button className="flex flex-col items-center">
              <ShoppingCartOutlineIcon />
              <span>Cart</span>
            </button>
          </Link>
          <button
            className="flex flex-col items-center"
            onClick={() => openDrawer()}
          >
            <UserOutlineIcon />
            <span>More</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomNavigationBar;
