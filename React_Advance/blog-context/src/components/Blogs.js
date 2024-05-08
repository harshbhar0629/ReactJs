/** @format */

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinners from "./Spinners";
import BlogDetails from "../page/BlogDetails";

function Blogs() {
	const { posts, loading } = useContext(AppContext);
  console.log(posts);
	return (
		<div className="h-full w-11/12 max-w-[550px] mt-[50px] mb-[95px]">
			{loading ? (
				<Spinners></Spinners>
			) : posts.length === 0 ? (
				<div>No Posts Found</div>
			) : (
				posts.map((post) => {
				  return (
						<BlogDetails key={post.id} post={post}></BlogDetails>
					)
				})
			)}
		</div>
	);
}

export default Blogs;
