import type { NextComponentType } from "next";
import BlogPost from "./blogPost";


const Blog: NextComponentType = () => {
	return (
		<>
			<div className="container mx-auto bg-zinc-100">
				<div className="mx-10 mt-10">
					<span className="flex"></span>
					<span className="flex place-content-center italic mt-10">
						Our recent articles about Organic
					</span>
					<span className="flex place-content-center text-3xl tracking-wider font-semibold">
						Our Blog Posts
					</span>
				</div>
				<div className="flex mx-10 place-content-center">
					<BlogPost></BlogPost>
					<BlogPost></BlogPost>
					<BlogPost></BlogPost>
				</div>
			</div>
		</>
	);
};

export default Blog;
