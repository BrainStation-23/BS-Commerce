import type { NextComponentType } from "next";

const Footer: NextComponentType = () => {
  return (
    <>
      <footer className="footer mt-auto py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; BS commerce 2022
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
