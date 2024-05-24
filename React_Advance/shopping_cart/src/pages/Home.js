/** @format */

import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Products from "../components/Products";

const Home = () => {
	const API_URL = "https://fakestoreapi.com/products";
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	async function fetchData() {
		setLoading(true);
		try {
			const response = await fetch(API_URL);
			const output = await response.json();
			setPosts(output);
			console.log(output);
		} catch (e) {
			console.log("error aya h");
		}
		setLoading(false);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl max-w-[90%] mx-auto h-full mb-[50px]">
			{loading ? (
				<Spinner></Spinner>
			) : posts.length > 0 ? (
				<div className=" grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 p-4 mx-auto space-y-10 gap-x-5 min-h-[80vh]">
					{posts.map((post) => (
						<Products
							key={post.id}
							post={post}></Products>
					))}
				</div>
			) : (
				<div className="text-3xl font-semibold flex items-center justify-center">
					<p className="mt-25%">No Data Available!</p>
				</div>
			)}
		</div>
	);
};

export default Home;
