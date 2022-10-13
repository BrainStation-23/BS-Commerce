import type { NextComponentType } from 'next';

import BlogPost from '@/modules/home/blog/blogPost';

const Blog: NextComponentType = () => {
  return (
    <>
      <div className="container mx-auto bg-zinc-100">
        <div className="mx-10 mt-10">
          <span className="flex"></span>
          <span className="mt-10 flex place-content-center italic">
            Our recent articles about Organic
          </span>
          <span className="flex place-content-center text-3xl font-semibold tracking-wider">
            Our Blog Posts
          </span>
        </div>
        <div className="mx-10 flex place-content-center">
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
        </div>
      </div>
    </>
  );
};

export default Blog;
