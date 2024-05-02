/** @format */

import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons";

export const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
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

	return (
		<div>
			<div>
				<button>Student</button>
				<button>Instructor</button>
			</div>

			<form>
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
						name="lastNAme"
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
							type={showPassword ? "text" : "password"}
							required
							value={formData.confirmPassword}
							onChange={changeHandler}
							placeholder="Confirm Password"></input>

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
                    
                    <button>Create Account</button>
				</div>
			</form>
		</div>
	);
};
