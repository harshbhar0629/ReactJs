/** @format */

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../page/Dashboard";
import toast from "react-hot-toast";

export const LoginForm = ({ setIsLoggedIn }) => {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	function changeHandler(event) {
		setFormData((prevData) => ({
			...prevData,
			[event.target.name]: event.target.value,
		}));
	}

	function submitHandler(event) {
		event.preventDefault();
		setIsLoggedIn(true);
		toast.success("Logged In");
		navigate("/dashboard");
	}

	return (
		<div>
			<form
				className="flex flex-col w-full gap-y-4 mt-6"
				onSubmit={submitHandler}>
				<label className="w-full">
					<p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
						Email Address<sup className=" text-[#EF476F] text-[0.5rem]"> *</sup>
					</p>
					<input
						className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF] w-full p-[12px]"
						id="email"
						name="email"
						type="email"
						required
						value={formData.email}
						onChange={changeHandler}
						placeholder="Enter your email address"></input>
				</label>
				<label className="w-full relative">
					<p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
						Password<sup className=" text-[#EF476F] text-[0.5rem]"> *</sup>
					</p>
					<input
						className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF] w-full p-[12px]"
						id="password"
						name="password"
						type={showPassword ? "text" : "password"}
						required
						value={formData.password}
						onChange={changeHandler}
						placeholder="Enter password"></input>

					<span
						className=" absolute right-3 top-[30px] cursor-pointer "
						onClick={() => {
							setShowPassword(!showPassword);
						}}>
						{showPassword ? (
							<AiOutlineEyeInvisible
								fontSize={24}
								fill="#AFB2BF"></AiOutlineEyeInvisible>
						) : (
							<AiOutlineEye
								fontSize={24}
								fill="#AFB2BF"></AiOutlineEye>
						)}
					</span>

					<Link to="#">
						<p className="text-xs mt-1 text-[rgb(71,165,197)] max-w-max ml-auto">
							Forgot Password
						</p>
					</Link>
				</label>

				<button className="w-full rounded-[8px] bg-[#FFD60A] font-medium text-[#000814] px-[12px] py-[8px] mt-6 hover:bg-[#caa900]">
					Sign In
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
