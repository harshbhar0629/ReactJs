/** @format */

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinners from "./Spinners";

function Blogs() {
	const { posts, loading } = useContext(AppContext);
  console.log(posts);
	return (
		<div>
			{loading ? (
				<Spinners></Spinners>
			) : posts.length === 0 ? (
				<div>No Posts Found</div>
			) : (
				posts.map((post) => {
				  return (
						<div className="mt-[40px]" key={post.id}>
							<p className="font-semibold">{post.title}</p>
							<p>
								By <span>{post.author}</span> on <span>{post.category}</span>
							</p>
							<p>Posted on {post.date}</p>
							<p>{post.content}</p>
							<div>
                {
                  post.tags.map((tag, index) => {
                    return <span key={index}>{`  #${tag}`}</span>
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
