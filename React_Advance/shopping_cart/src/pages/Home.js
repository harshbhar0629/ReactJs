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
		<div className="max-w-6xl mx-auto h-full">
			{loading ? (
				<Spinner></Spinner>
			) : posts.length > 0 ? (
				<div className=" grid grid-cols-4 max-w-6xl p-4 mx-auto space-y-10 gap-x-5 min-h-[80vh]">
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
