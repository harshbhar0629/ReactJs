/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

function Navbar(props) {
	let isLoggedIn = props.isLoggedIn;
	let setIsLoggedIn = props.setIsLoggedIn;

	// function handler() {
	// 	console.log("first");
	// 	toast.success("Hello jiii");
	// }

	return (
		<div className="flex flex-row justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
			<Link to="/">
				<img
					src={Logo}
					alt="logo"
					width={160}
					height={32}
					loading="lazy"></img>
			</Link>

			<nav>
				<ul className="flex gap-x-6 text-[#D4D3E3] ">
					<li>
						<Link
							to="/"
							className="hover:text-sky-500">
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/"
							className="hover:text-sky-500">
							About
						</Link>
					</li>
					<li>
						<Link
							to="/"
							className="hover:text-sky-500">
							Contact
						</Link>
					</li>
				</ul>
			</nav>

			<div className="flex items-center gap-x-4">
				{!isLoggedIn && (
					<Link to="/login">
						<button className="bg-[#20293a] text-[#AFB2BF] py-[8px] px-[12px] rounded-[8px] border border-[#2c384d]">
							Log In
						</button>
					</Link>
				)}
				{!isLoggedIn && (
					<Link to="/signup">
						<button className="bg-[#20293a] text-[#AFB2BF] py-[8px] px-[12px] rounded-[8px] border border-[#2c384d]">
							Sign Up
						</button>
					</Link>
				)}
				{isLoggedIn && (
					<Link to="/">
						<button
							className="bg-[#20293a] text-[#AFB2BF] py-[8px] px-[12px] rounded-[8px] border border-[#2c384d]"
							onClick={() => {
								toast.success("Logged Out");
								setIsLoggedIn(false);
							}}>
							Log Out
						</button>
					</Link>
				)}
				{isLoggedIn && (
					<Link to="/dashboard">
						<button className="bg-[#20293a] text-[#AFB2BF] py-[8px] px-[12px] rounded-[8px] border border-[#2c384d]">
							Dashboard
						</button>
					</Link>
				)}
			</div>
		</div>
	);
}

export default Navbar;
