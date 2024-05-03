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
	const [accountType, setAccountType] = useState("student");
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

	function clickHandler(event) {
		// setAccountType(event.target.id);
		setAccountType(event.target.id);
		// console.log(accountType);
	}

	return (
		<div className="w-full">
			<div className="flex bg-[#161D29] p-1 gap-x-1 my-6 rounded-full max-w-max">
				<button
					className={`${
						accountType === "student"
							? "bg-[#000814] text-[#E9EEFF]"
							: "bg-transparent text-[#959BAA]"
					} py-2 px-5 rounded-full transition-all duration-200`}
					onClick={clickHandler}
					id="student">
					Student
				</button>
				<button
					className={`${
						accountType === "instructor"
							? "bg-[#000814] text-[#E9EEFF]"
							: "bg-transparent text-[#959BAA]"
					} py-2 px-5 rounded-full transition-all duration-200`}
					onClick={clickHandler}
					id="instructor">
					Instructor
				</button>
			</div>

			<form
				className="flex flex-col w-full gap-y-4 "
				onSubmit={submitHandler}>
				<div className="flex justify-between w-full ">
					<label className="w-[48%]">
						<p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
							First Name <sub className=" text-[#EF476F] text-[0.5rem]">*</sub>
						</p>
						<input
							className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF] p-[12px] w-full"
							required
							type="text"
							name="firstName"
							placeholder="Enter your first name"
							onChange={changeHandler}
							value={formData.firstName}></input>
					</label>
					<label className="w-[48%]">
						<p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
							Last Name <sub className=" text-[#EF476F] text-[0.5rem]">*</sub>
						</p>
						<input
							className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF] w-full p-[12px]"
							required
							type="text"
							name="lastName"
							placeholder="Enter your last name"
							onChange={changeHandler}
							value={formData.lastName}></input>
					</label>
				</div>

				<label className="w-full mt-2">
					<p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
						Email Address <sub className=" text-[#EF476F] text-[0.5rem]">*</sub>
					</p>
					<input
						className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF] w-full p-[12px]"
						required
						type="email"
						name="email"
						placeholder="Enter Email Address"
						onChange={changeHandler}
						value={formData.email}></input>
				</label>

				<div className="flex gap-x-5 w-full justify-between mt-2">
					<label className="relative w-full">
						<p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
							Create Password
							<sup className=" text-[#EF476F] text-[0.5rem]">*</sup>
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
					</label>
					<label className="relative w-full">
						<p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
							Confirm Password
							<sup className=" text-[#EF476F] text-[0.5rem]">*</sup>
						</p>
						<input
							className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF] w-full p-[12px]"
							name="confirmPassword"
							type={confirmPass ? "text" : "password"}
							required
							value={formData.confirmPassword}
							onChange={changeHandler}
							placeholder="Confirm Password"></input>

						<span
							className=" absolute right-3 top-[30px] cursor-pointer "
							onClick={() => {
								setConfirmPass(!confirmPass);
							}}>
							{confirmPass ? (
								<AiOutlineEyeInvisible
									fontSize={24}
									fill="#AFB2BF"></AiOutlineEyeInvisible>
							) : (
								<AiOutlineEye
									fontSize={24}
									fill="#AFB2BF"></AiOutlineEye>
							)}
						</span>
					</label>
				</div>
				<button className="w-full rounded-[8px] bg-[#FFD60A] font-medium text-[#000814] px-[12px] py-[8px] mt-6 hover:bg-[#caa900]">
					Create Account
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
