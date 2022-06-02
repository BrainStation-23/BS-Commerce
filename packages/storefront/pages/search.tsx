import type { NextPage } from "next";
import SearchItem from "../components/search/searchItem";

const Search: NextPage = () => {
	return (
		<>
			<div className="container w-max px-15 m-auto tracking-wider items-center justify-center">
				<div className="flex flex-wrap mx-15">
					<div className=" pr-4 pl-4 lg:mx-1/5 md:w-full pr-4 pl-4">
						<h4 className="text-gray-900 text-xl title-font font-normal mb-1 text-center">
							Your search for <strong className="highlight">Demo</strong> revealed the following:
						</h4>

						<div className="flex justify-center mt-5">
							<div className="mb-3 w-4/5 lg:w-2/5">
								<div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
									<input
										type="search"
										className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										placeholder="Search"
									></input>
									<button
										type="submit"
										className="text-white absolute right-0 py-1.5 pb-2 text-base bg-green-600 hover:bg-black rounded-lg px-4"
									>
										Search
									</button>
								</div>
							</div>
						</div>

						<SearchItem></SearchItem>
						<SearchItem></SearchItem>
						<SearchItem></SearchItem>
						<SearchItem></SearchItem>

					</div>
				</div>
			</div>
		</>
	);
};
export default Search;
