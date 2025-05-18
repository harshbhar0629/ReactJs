/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogApi } from "./api";
import toast from "react-hot-toast";

const Signup = () => {
	const [signupData, setSignupData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setSignupData({ ...signupData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (signupData.password !== signupData.confirmPassword) {
			alert("Passwords do not match!");
			return;
		}

		const res = await blogApi("post", "signup", signupData);
		setSignupData({
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
		if (!res || !res.data) {
			toast.error("Signup failed");
			return;
		}
		toast.success("User created successfully");
		navigate("/login");
	};

	return (
		<div style={styles.container}>
			<h2 style={styles.heading}>Signup</h2>
			<form
				onSubmit={handleSubmit}
				style={styles.form}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					required
					value={signupData.name}
					onChange={handleChange}
					style={styles.input}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					required
					value={signupData.email}
					onChange={handleChange}
					style={styles.input}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
					value={signupData.password}
					onChange={handleChange}
					style={styles.input}
				/>
				<input
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					required
					value={signupData.confirmPassword}
					onChange={handleChange}
					style={styles.input}
				/>
				<button
					type="submit"
					style={styles.button}>
					Signup
				</button>
			</form>
			<p style={styles.linkText}>
				Already have an account? <Link to="/login">Login</Link>
			</p>
		</div>
	);
};

const styles = {
	container: { textAlign: "center", marginTop: "50px" },
	heading: { color: "#1976D2" },
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "15px",
		marginTop: "20px",
	},
	input: {
		padding: "10px",
		width: "280px",
		borderRadius: "5px",
		border: "1px solid #ccc",
	},
	button: {
		padding: "10px 20px",
		backgroundColor: "#1976D2",
		color: "white",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
	},
	linkText: { marginTop: "15px" },
};

export default Signup;
