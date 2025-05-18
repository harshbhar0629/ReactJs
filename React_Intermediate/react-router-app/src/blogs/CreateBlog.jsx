/** @format */

import React, { useState } from "react";
import { blogApi } from "./api";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
	const [blogData, setBlogData] = useState({
		title: "",
		description: "",
	});
	const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.signupData);
	const [Loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setBlogData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!token) {
			toast.error("Please login to create a blog");
			navigate("/login");
			return;
		}
		try {
			setLoading(true);
            const response = await blogApi("post", "create-blog", { ...blogData, userId: userData._id });
            if(!response || !response.data) {
                toast.error("Blog creation failed");
                setLoading(false);
                return;
            }
			setLoading(false);
			setBlogData({
				title: "",
				description: "",
            });
            toast.success("Blog created successfully");
            navigate("/view-blog");
		} catch (err) {
			console.error("Submission error:", err);
		}
	};

	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h2 style={{ color: "#1E88E5" }}>Create a Blog</h2>
			<p style={{ color: "#3949AB" }}>Fill out the details below and submit</p>

			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "15px",
					marginTop: "20px",
				}}>
				<input
					type="text"
					name="title"
					placeholder="Enter blog title"
					value={blogData.title}
					onChange={handleChange}
					required
					style={{
						padding: "10px",
						width: "300px",
						borderRadius: "5px",
						border: "1px solid #ccc",
					}}
				/>

				<textarea
					name="description"
					placeholder="Enter blog description"
					value={blogData.description}
					onChange={handleChange}
					required
					style={{
						padding: "10px",
						width: "300px",
						height: "120px",
						borderRadius: "5px",
						border: "1px solid #ccc",
					}}></textarea>

				<button
					type="submit"
					disabled={Loading}
					style={{
						padding: "10px 20px",
						backgroundColor: "#1E88E5",
						color: "white",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
					}}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default CreateBlog;
