import type { NextComponentType } from "next";


const BlogPost: NextComponentType = () => {
	return (
		<>
			<div className="flex-wrap bg-white my-10 mx-2 w-max ">
				<a href="https://safira-demo.myshopify.com/blogs/news/there-are-many-variations-of-passages-of-lorem-ipsum-available-2">
					<img
						src="https://cdn.shopify.com/s/files/1/0359/6350/2651/articles/large-blog4_large.jpg?v=1586168728"
						alt=""
					/>
				</a>
				<span className="flex ml-3 mt-3 text-slate-800 tracking-wider">
					28/05/2022 | Demo Admin
				</span>
				<a
					className="flex ml-3 mt-2 font-semibold hover:text-green-500 "
					href="https://safira-demo.myshopify.com/blogs/news/there-are-many-variations-of-passages-of-lorem-ipsum-available-2"
				>
					There Are Many Variations Of Passages Of Lorem Ipsum
					Available
				</a>
				<a
					className="flex ml-3 my-5 hover:text-green-500 text-sm	"
					href="https://safira-demo.myshopify.com/blogs/news/there-are-many-variations-of-passages-of-lorem-ipsum-available-2"
				>
					SHOW MORE
				</a>
			</div>
		</>
	);
};

export default BlogPost;
