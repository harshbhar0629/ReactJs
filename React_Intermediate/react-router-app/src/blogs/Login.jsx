/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogApi } from "./api";
import { setToken, setSignupData } from "../slice/authSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Login = () => {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await blogApi("post", "login", loginData);
		const resData = res?.data;
		if (!resData) {
			toast.error("Login failed");
			return;
		}
		toast.success("Login successful");
		dispatch(setToken(resData?.user?.token));
		dispatch(setSignupData(resData?.user));
		setLoginData({
			email: "",
			password: "",
		});
		navigate("/")
		// Call backend API here
	};

	return (
		<div style={styles.container}>
			<h2 style={styles.heading}>Login</h2>
			<form
				onSubmit={handleSubmit}
				style={styles.form}>
				<input
					type="email"
					name="email"
					placeholder="Email"
					required
					value={loginData.email}
					onChange={handleChange}
					style={styles.input}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
					value={loginData.password}
					onChange={handleChange}
					style={styles.input}
				/>
				<button
					type="submit"
					style={styles.button}>
					Login
				</button>
			</form>
			<p style={styles.linkText}>
				Don’t have an account? <Link to="/signup">Signup</Link>
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

export default Login;
