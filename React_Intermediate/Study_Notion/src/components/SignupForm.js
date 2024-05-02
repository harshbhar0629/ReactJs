/** @format */

import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router";
// import { useState } from "react";

export const SignupForm = ({ setIsLoggedIn }) => {
	const [showPassword, setShowPassword] = useState(false);
	const [confirmPass, setConfirmPass] = useState(false);
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	function changeHandler(event) {
		setFormData((prevData) => ({
			...prevData,
			[event.target.name]: event.target.value,
		}));
	}

	function submitHandler(event) {
		event.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			toast.error("Password do not match");
			toast.error("Please try again");

			return;
		}
		setIsLoggedIn(true);
		toast.success("Account Created");
		navigate("/dashboard");
	}

	return (
		<div>
			<div>
				<button>Student</button>
				<button>Instructor</button>
			</div>

			<form onSubmit={submitHandler}>
				<label>
					<p>
						First Name <sub>*</sub>
					</p>
					<input
						required
						type="text"
						name="firstName"
						placeholder="Enter your first name"
						onChange={changeHandler}
						value={formData.firstName}></input>
				</label>
				<label>
					<p>
						Last Name <sub>*</sub>
					</p>
					<input
						required
						type="text"
						name="lastName"
						placeholder="Enter your last name"
						onChange={changeHandler}
						value={formData.lastName}></input>
				</label>
				<label>
					<p>
						Email Address <sub>*</sub>
					</p>
					<input
						required
						type="email"
						name="email"
						placeholder="Enter Email Address"
						onChange={changeHandler}
						value={formData.email}></input>
				</label>

				<div>
					<label>
						<p>
							Create Password<sup>*</sup>
						</p>
						<input
							id="password"
							name="password"
							type={showPassword ? "text" : "password"}
							required
							value={formData.password}
							onChange={changeHandler}
							placeholder="Enter password"></input>

						<span
							onClick={() => {
								setShowPassword(!showPassword);
							}}>
							{showPassword ? (
								<AiOutlineEyeInvisible></AiOutlineEyeInvisible>
							) : (
								<AiOutlineEye></AiOutlineEye>
							)}
						</span>
					</label>
					<label>
						<p>
							Confirm Password<sup>*</sup>
						</p>
						<input
							name="confirmPassword"
							type={confirmPass ? "text" : "password"}
							required
							value={formData.confirmPassword}
							onChange={changeHandler}
							placeholder="Confirm Password"></input>

						<span
							onClick={() => {
								setConfirmPass(!confirmPass);
							}}>
							{confirmPass ? (
								<AiOutlineEyeInvisible></AiOutlineEyeInvisible>
							) : (
								<AiOutlineEye></AiOutlineEye>
							)}
						</span>
					</label>

					<button>Create Account</button>
				</div>
			</form>
		</div>
	);
};

export default SignupForm;
