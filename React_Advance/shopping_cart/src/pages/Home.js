/** @format */

import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Products from "../components/Products"

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
		<div>
			{loading ? (
				<Spinner></Spinner>
			) : posts.length > 0 ? (
				<div>
            {posts.map((post) => (
						<Products key={post.id} post={post}></Products>
					))}
				</div>
			) : (
				<div>No post Available</div>
			)}
		</div>
	);
};

export default Home;
