/** @format */

import React, { useEffect, useState } from "react";
import { blogApi } from "./api";
import toast from "react-hot-toast";

const ViewBlogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const res = await blogApi("get", "get-blogs", {});
				setBlogs(res?.data?.blog);
				if (!res || !res.data) {
					toast.error("Error in fetching blogs");
					return;
				}
				else {
					toast.success("Blogs fetched successfully");
				}
			} catch (err) {
				console.error("Error fetching blogs:", err);
			}
		};

		fetchBlogs();
	}, []);

	return (
		<div style={{ padding: "30px" }}>
			<h2 style={{ textAlign: "center", color: "#2E7D32" }}>All Blogs</h2>

			{blogs.length === 0 ? (
				<p style={{ textAlign: "center" }}>Loading blogs...</p>
			) : (
				blogs.length > 0 &&
				blogs?.map((blog) => (
					<div
						key={blog.id}
						style={{
							border: "1px solid #ccc",
							padding: "20px",
							borderRadius: "8px",
							margin: "15px auto",
							maxWidth: "600px",
							boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
						}}>
						<h3 style={{ color: "#1565C0" }}>{blog.title}</h3>
						<p style={{ marginTop: "10px" }}>{blog.description}</p>
						<p style={{ fontStyle: "italic", color: "#555" }}>
							By: {blog.createdBy?.name || "N/A"}
						</p>
					</div>
				))
			)}
		</div>
	);
};

export default ViewBlogs;
