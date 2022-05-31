import type { GetServerSideProps, NextPage } from "next";
// import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import Icon from "./product/icon";
import ProductInfo from "./product/productInfo";

const Product = (props: any) => {
	const { product }: any = props;

	return (
		<>
			<Link href={"/product/" + product.id} key={product.id}>
				<div className="transition duration-0 hover:duration-700 group py-3 hover:bg-white cursor-pointer">
					<div className="rounded overflow-hidden shadow-lg max-w-sm">
						<div className="relative">
							<div className="relative w-96 h-60  text-white overflow-hidden transition-all duration-700">
								<div className="absolute inset-0 bg-cover bg-center z-0">
									<Image
										src={product.images[0]}
										alt="laptop"
										width={500}
										height={500}
									/>
								</div>
								<Icon></Icon>
							</div>
							<ProductInfo product={product}></ProductInfo>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Product;
