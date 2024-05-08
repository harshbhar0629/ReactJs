/** @format */

import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import {useNavigate, useLocation} from "react-router";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import BlogDetails from "../components/BlogDetails";
import Spinners from "../components/Spinners";

const BlogPage = () => {
	const [blog, setBlog] = useState(null);
	const [relatedBlogs, setRelatedBlogs] = useState([]);
	const location = useLocation();
	const navigation = useNavigate();
	const { loading, setLoading } = useContext(AppContext);
	const blogId = location.pathname.split("/").at(-1);

	async function fetchRelatedBlogs() {
		setLoading(true);
		let url = `${baseUrl}?blogId=${blogId}`;
		console.log("URL: ", url);
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			setBlog(data.blog);
			setRelatedBlogs(data.relatedBlogs);
		} catch (error) {
			console.log(error);
			setBlog(null);
			setRelatedBlogs([]);
		}
		setLoading(false);
	}

	useEffect(() => {
		if (blogId) {
			fetchRelatedBlogs();
		}
	}, [location.pathname]);

	return (
		<div>
			<Header />
			<div>
				<button onClick={() => navigation(-1)}>Back</button>
			</div>
			{loading ? (
				<Spinners></Spinners>
			) : blog ? (
				<div>
					<BlogDetails post={blog}></BlogDetails>
					<h2>Related Blogs</h2>
					{relatedBlogs.map((post) => {
						return (<div key={post.id}>
							<BlogDetails post={post}></BlogDetails>
						</div>);
					})}
				</div>
			) : (
				<div>Sorry.. No Posts Found</div>
			)}
		</div>
	);
};

export default BlogPage;
