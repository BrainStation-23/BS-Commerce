import type { NextPage } from "next";
import CategoryComponent from "@/components/category";

const Category: NextPage = ({}) => {
  return (
    <main className="ms-sm-auto  px-md-4">
      <CategoryComponent />;
    </main>
  );
};

export default Category;
