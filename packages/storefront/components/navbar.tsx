import type { NextComponentType } from "next";

const Navbar: NextComponentType = () => {
  return (
    <nav className="flex justify-center">
      <div className="w-3/5">
        <span className="rounded-t-lg bg-green-600 text-white px-4 py-3">
          All Categories
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
