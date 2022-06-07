import type { NextPage } from "next";
import { products } from "../../allData/product-data.json";
import Breadcrumb from "@/components/global/breadcrumbs/breadcrumb";

const ProductDetails: NextPage = () => {
	const product = products.find((product) => product.id === 1);
	const isAvailable = false;
	if (product.stock > 0) isAvailable = true;

	if (product) {
		return (
			<>
				<Breadcrumb title={product.title} pathArray={["Home", product.title]} linkArray={["/home", "/product"+product.id]} />
				<section className="text-gray-700 body-font overflow-hidden bg-white">
					<div className="container px-5 py-24 mx-auto">
						<div className="lg:w-4/5 mx-auto flex flex-wrap">
							<div className="lg:w-1/2 w-full">
								<img
									alt="ecommerce"
									className="object-cover object-center object-scale-down h-max rounded border bg-slate-50 border-gray-200 hover:scale-105"
									src={product.images[0]}
								/>
								<div className="flex mt-2">
									<a
										href="#"
										className="flex items-center w-36 h-36 mr-2 border border-1 border-gray-300 hover:border hover:border-gray-900 transition-colors"
									>
										<img src={product.images[0]} alt="" />
									</a>
									<a
										href="#"
										className="flex items-center w-36 h-36 mr-2 border border-1 border-gray-300 hover:border hover:border-gray-900 transition-colors"
									>
										<img src={product.images[0]} alt="" />
									</a>
									<a
										href="#"
										className="flex items-center w-36 h-36 mr-2 border border-1 border-gray-300 hover:border hover:border-gray-900 transition-colors"
									>
										<img src={product.images[0]} alt="" />
									</a>
								</div>
							</div>
							<div className="lg:w-1/2 w-full lg:pl-5 ">
								<h2 className="text-gray-900 text-xl title-font font-normal mb-1">
									{product.title}
								</h2>
								<div className="flex mb-1 mt-2"></div>
								<div className="text-gray-900 ml-1 mb-1 mt-2">
									<span className="text-sm">
										Vendor: {product.vendor}
									</span>
									<span className="text-sm ml-2 mr-2">|</span>
									<span className="text-sm">
										SKU: {product.sku}
									</span>
								</div>
								<div className="flex">
									<span className="title-font font-medium text-2xl text-green-600 mt-2 mb-2 ml-1">
										${product.price}
									</span>
								</div>
								<div className="flex">
									<span className="text-gray-900 ml-1 mb-1 mt-2 text-sm">
										Availability:
									</span>
									{isAvailable ? (
										<span className="text-green-600 ml-2 mb-1 mt-2 text-sm">
											Available
										</span>
									) : (
										<span className="text-green-600 ml-2 mb-1 mt-2 text-sm">
											Out of stock
										</span>
									)}
								</div>

								<p className="text-gray-900 text-sm ml-1 mb-1 mt-2">
									{product.description}
								</p>
								<div className="flex mt-2 items-center mb-2">
									<div className="flex ml-1 items-center">
										<span className="mr-3">Size:</span>
										<div className="flex">
											<button className="hover:text-green-600 m-2">
												s
											</button>
											<button className="hover:text-green-600 m-2">
												m
											</button>
											<button className="hover:text-green-600 m-2">
												l
											</button>
											<button className="hover:text-green-600 m-2">
												xl
											</button>
										</div>
									</div>
								</div>
								<div className="flex mt-2 items-center mb-2">
									<div className="flex">
										<span className="mr-3">Color:</span>
										<button className="border-2 border-gray-300 w-6 h-6 hover:outline"></button>
										<button className="border-2 border-gray-300 ml-3 bg-gray-700 w-6 h-6 hover:outline"></button>
										<button className="border-2 border-gray-300 ml-3 bg-red-500 w-6 h-6 hover:outline"></button>
									</div>
								</div>
								<div className="lg:w-fit flex flex-wrap">
									<div className="flex ml-1 mr-3 mt-4 title-text items-center">
										Quantity
										<div className="m-1 border-2 border-gray-300 rounded px-auto ">
											<button className="m-2">-</button>
											<span className="m-2">1</span>
											<button className="m-2">+</button>
										</div>
									</div>
									<button className="mt-4 ml-10 text-white bg-green-600 py-1 px-10 rounded focus:outline-none hover:bg-green-600">
										Add to cart
									</button>
								</div>
								<div className="lg:w-fit flex flex-wrap">
									<button className="rounded mt-5 ml-1 bg-gray-600 lg:px-48 md:px-32 px-20 py-1 text-white hover:bg-green-400 transition duration-200 ease-out hover:ease-in	">
										Buy Now
									</button>
								</div>
								<div className="ml-1 text-grey-700">
									<div>
										<button className="hover:text-green-600 mt-10">
											+ Add to wishlist
										</button>
									</div>
									<div>
										<button className="hover:text-green-600 mt-2">
											+ Compare
										</button>
									</div>
									<div>
										<button className="hover:text-green-600 mt-2">
											Ask about this product
										</button>
									</div>
								</div>
								<div></div>
							</div>
						</div>
						<div className="lg:w-4/5 mx-auto flex flex-wrap mt-5 border-2 border-g-300 text-slate-600">
							<div className="lg:w-fit flex flex-wrap border-b-2">
								<ul>
									<button className="text-xl font-semibold mx-10 sm:mx-16 md:mx-20">
										<a href="#description">Description</a>
									</button>
									<button className="text-xl font-semibold mx-10 sm:mx-16 md:mx-20">
										<a href="#review">Review</a>
									</button>
									<button className="text-xl font-semibold mx-10 sm:mx-16 md:mx-20">
										<a href="#shipping_policy">
											Shipping Policy
										</a>
									</button>
									<button className="text-xl font-semibold mx-10 sm:mx-16 md:mx-10">
										<a href="#size_chart">Size Chart</a>
									</button>
								</ul>
							</div>
							<p id="description" className="ml-2">
								{product.description}
							</p>
							<p id="review" className="ml-2 hidden">
								Nor again is there anyone who loves or pursues
								or desires to obtain pain of itself, because it
								is pain, but because occasionally circumstances
								occur in which toil and pain can procure him
								some great pleasure. To take a trivial example,
								which of us ever undertakes laborious physical
								exercise, except to obtain some advantage from
								it? But who has any right to find fault with a
								man who chooses to enjoy a pleasure that has no
								annoying consequences, or one who avoids a pain
								that produces no resultant pleasure?
							</p>
							<p id="shipping_policy" className="ml-2 hidden">
								Nor again is there anyone who loves or pursues
								or desires to obtain pain of itself, because it
								is pain, but because occasionally circumstances
								occur in which toil and pain can procure him
								some great pleasure. To take a trivial example,
								which of us ever undertakes laborious physical
								exercise, except to obtain some advantage from
								it? But who has any right to find fault with a
								man who chooses to enjoy a pleasure that has no
								annoying consequences, or one who avoids a pain
								that produces no resultant pleasure?
							</p>
							<div id="size_chart" className="ml-2 mt-2 hidden">
								<h4 className="font-semibold">Size Chart</h4>
								<table className="table-fixed border-collapse border border-slate-500">
									<thead>
										<tr>
											<th>region</th>
											<th>chest</th>
											<th>hight</th>
											<th>lenght</th>
											<th>width</th>
											<th>sleeve</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="">
												<span>UK</span>
											</td>
											<td>18</td>
											<td>20</td>
											<td>22</td>
											<td>24</td>
											<td>26</td>
										</tr>
										<tr>
											<td className="cun-name">
												<span>European</span>
											</td>
											<td>46</td>
											<td>48</td>
											<td>50</td>
											<td>52</td>
											<td>54</td>
										</tr>
										<tr>
											<td className="cun-name">
												<span>usa</span>
											</td>
											<td>14</td>
											<td>16</td>
											<td>18</td>
											<td>20</td>
											<td>22</td>
										</tr>
										<tr>
											<td className="cun-name">
												<span>Australia</span>
											</td>
											<td>28</td>
											<td>10</td>
											<td>12</td>
											<td>14</td>
											<td>16</td>
										</tr>
										<tr>
											<td className="cun-name">
												<span>Canada</span>
											</td>
											<td>24</td>
											<td>18</td>
											<td>14</td>
											<td>42</td>
											<td>36</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
};

export default ProductDetails;
