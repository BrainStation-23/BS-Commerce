import type { NextPage } from "next";
import CategoryComponent from "@/components/category";

const Category: NextPage = ({}) => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <CategoryComponent />;
    </main>
  );
};

export default Category;
