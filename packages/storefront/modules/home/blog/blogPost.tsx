import type { NextComponentType } from 'next';
import Image from 'next/image';

const BlogPost: NextComponentType = () => {
  return (
    <>
      <div className="my-10 mx-2 w-max flex-wrap bg-white ">
        <a href="https://safira-demo.myshopify.com/blogs/news/there-are-many-variations-of-passages-of-lorem-ipsum-available-2">
          <Image
            src="https://cdn.shopify.com/s/files/1/0359/6350/2651/articles/large-blog4_large.jpg?v=1586168728"
            alt=""
          />
        </a>
        <span className="ml-3 mt-3 flex tracking-wider text-slate-800">
          28/05/2022 | Demo Admin
        </span>
        <a
          className="ml-3 mt-2 flex font-semibold hover:text-primary dark:hover:text-dark_primary"
          href="https://safira-demo.myshopify.com/blogs/news/there-are-many-variations-of-passages-of-lorem-ipsum-available-2"
        >
          There Are Many Variations Of Passages Of Lorem Ipsum Available
        </a>
        <a
          className="my-5 ml-3 flex text-sm hover:text-primary	dark:hover:text-dark_primary"
          href="https://safira-demo.myshopify.com/blogs/news/there-are-many-variations-of-passages-of-lorem-ipsum-available-2"
        >
          SHOW MORE
        </a>
      </div>
    </>
  );
};

export default BlogPost;
