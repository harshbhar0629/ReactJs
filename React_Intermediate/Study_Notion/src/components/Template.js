/** @format */

import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm  from "./SignupForm";
import LoginForm from "../components/LoginForm"

export const Template = ({
	title,
	desc1,
	desc2,
	image,
	formType,
	setIsLoggedIn,
}) => {
	return (
		<div className="">
			<div>
				<h1>{title}</h1>
				<p>
					<span>{desc1}</span>
					<span>{desc2}</span>
				</p>

				{formType === "signup" ? (
					<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>
				) : (
					<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
				)}

				<div>
					<div></div>
					<p>OR</p>
					<div></div>
				</div>
				<button>Sign in with Google</button>
			</div>
			<div>
				<img
					src={frameImage}
					alt="pattern"
					width={558}
					height={504}
					loading="lazy"></img>
				<img
					src={image}
					alt="student"
					width={558}
					height={500}
					loading="lazy"></img>
			</div>
		</div>
	);
};
