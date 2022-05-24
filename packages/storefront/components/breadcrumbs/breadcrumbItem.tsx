import Link from "next/link";

const BreadcrumbItem = ({ children, href, ...props }: any) => {
  return (
    <li {...props}>
      <Link href={href} passHref>
        <a className="text-decoration-none text-black hover:text-green-600/100">{children}</a>
      </Link>
    </li>
  );
};

export default BreadcrumbItem;
