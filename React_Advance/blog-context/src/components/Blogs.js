/** @format */

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinners from "./Spinners";

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
						<div className="mt-[30px]" key={post.id}>
							<p className="font-bold text-lg">{post.title}</p>
							<p className="text-sm my-1 font-[11.375px] text-[#000000]">
								By <span className="italic">{post.author}</span> on <span className="font-semibold underline cursor-pointer">{post.category}</span>
							</p>
							<p className="text-sm font-[11.375px] text-[#000000]">Posted on {post.date}</p>
							<p className="mt-4 mb-2 font-[13px] text-[#000000]">{post.content}</p>
							<div>
                {
                  post.tags.map((tag, index) => {
                    return <span className="font-semibold cursor-pointer text-xs mx-1 text-blue-700 underline" key={index}>{`  #${tag}`}</span>
                  })
                }
							</div>
						</div>
					)
				})
			)}
		</div>
	);
}

export default Blogs;
