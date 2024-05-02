/** @format */

import { FcGoogle } from "react-icons/fc";
import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "../components/LoginForm";

export const Template = ({
	title,
	desc1,
	desc2,
	image,
	formType,
	setIsLoggedIn,
}) => {
	return (
		<div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between">
			<div>
				<h1 className="text-[#F1F2FF] font-semibold text-[2rem] leading-[2.75rem]">
					{title}
				</h1>
				<p className="text-[1.125rem] leading-[1.625rem] mt-4">
					<span className="text-[#AFB2BF]">{desc1}</span>
					<br></br>
					<span className="text-[#2096C5] italic">{desc2}</span>
				</p>

				{formType === "signup" ? (
					<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>
				) : (
					<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
				)}

				<div className="flex flex-row w-full my-4 gap-x-2 items-center">
					<div className="h-[2px] w-full bg-[#2C333F]"></div>
					<p className="text-[#2C333f] font-medium leading-[1.375re]">OR</p>
					<div className="h-[2px] w-full bg-[#2C333F]"></div>
				</div>
				<button className="flex items-center w-full justify-center rounded-[8px] font-medium text-[#AFB2BF] border border-[#2C333F] px-[12px] py-[8px] gap-x-2 mt-6">
					<FcGoogle></FcGoogle>Sign in with Google
				</button>
			</div>
			<div className="relative w-11/12 max-w-[450px]">
				<img
					src={frameImage}
					alt="pattern"
					width={558}
					height={504}
					loading="lazy"></img>
				<img
					className=" absolute -top-4 right-4"
					src={image}
					alt="student"
					width={558}
					height={500}
					loading="lazy"></img>
			</div>
		</div>
	);
};
