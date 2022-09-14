import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
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
import { resetAddress } from 'toolkit/customerAddressSlice';

interface Props {
  openDrawer: () => void;
}

const BottomNavigationBar: React.FC<Props> = ({ openDrawer }: Props) => {
  return (
    <>
      <div className="fixed bottom-0 z-40 flex w-full flex-row items-center justify-center bg-slate-100 py-3 lg:hidden">
        <div className="flex w-9/12 flex-row justify-evenly">
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
