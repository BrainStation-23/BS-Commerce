import React from "react";
import Link from "next/link";

interface Path {
  cart: boolean;
  info: boolean;
  shipping: boolean;
  payment: boolean;
  setModal: Function;
}

const Path: React.FC<Path> = (props: Path) => {
  const { cart, info, shipping, payment, setModal } = props;
  return (
    <div className="flex flex-wrap text-xs gap-2">
      <div>
        <Link href="/">Home</Link>
      </div>
      {" > "}
      <div className={cart ? "font-bold" : "font-normal"}>
        <Link href="/cart">Cart</Link>
      </div>
      {" > "}
      <div>
        <button
          onClick={() => {
            const obj = {
              info: true,
              ship: false,
              pay: false,
            };
            setModal(obj);
          }}
          style={{ border: "none" }}
          className={info ? "font-bold" : "font-normal"}
          disabled
        >
          Information
        </button>
      </div>
      {" > "}
      <div>
      <button
          onClick={() => {
            const obj = {
              info: false,
              ship: true,
              pay: false,
            };
            setModal(obj);
          }}
          className={shipping ? "font-bold" : "font-normal"}
          style={{ border: "none" }}
          disabled
        >
          Shipping
        </button>
      </div>
      {" > "}
      <div>
      <button
          onClick={() => {
            const obj = {
              info: false,
              ship: false,
              pay: true,
            };
            setModal(obj);
          }}
          style={{ border: "none" }}
          className={payment ? "font-bold" : "font-normal"}
          disabled
        >
          Payment
        </button>
      </div>
    </div>
  );
};

export default Path;
