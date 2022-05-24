import type { NextComponentType } from "next";

const Footer: NextComponentType = () => {
  return (
    <>
      <footer className="bg-gray-900 py-4 flex justify-center">
        <div className="w-3/5">
          <p className="text-white text-sm antialiased font-light">
            Copyright &copy; BS commerce 2022 All right reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
