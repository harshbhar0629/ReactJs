/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import Spinners from "../components/Spinners";
import BlogDetails from "./BlogDetails";

const BlogPage = () => {
	const { loading, setLoading } = useContext(AppContext);
	const [blog, setBlog] = useState(null);
	const [relatedBlog, setRelatedBlog] = useState(null);
	const location = useLocation();
	const navigate = useNavigation();
	const blogsId = location.pathname.split("/").at(-1);

	async function fetchRelatedBlogs() {
		setLoading(true);
		let url = `${baseUrl}?blogsId=${blogsId}`;
		try {
			const res = await fetch(url);
			const output = await res.json();
			setBlog(output.blog);
			setRelatedBlog(output.relatedBlog);
		} catch (error) {
			alert("Something went wrong");
			setBlog(null);
			setRelatedBlog([]);
		}
		setLoading(false);
	}

	useEffect(() => {
		if (blogsId) {
			fetchRelatedBlogs();
		}
	}, [location.pathname]);

	return (
		<div>
			<Header></Header>
			<div>
				<button onClick={() => navigate(-1)}>Back</button>
			</div>

			{loading ? (
				<Spinners></Spinners>
			) : blog ? (
          <div>
            <BlogDetails post={blog}></BlogDetails>
            <h2>Related Blogs</h2>
            {
              relatedBlog.map((post) => {
                return (
									<div key={post.id}>
										<BlogDetails post={post}></BlogDetails>
									</div>
								);
              })
            }
        </div>
			) : (
            <div>
              No Blog Found
        </div>
			)}
		</div>
	);
};

export default BlogPage;
