/** @format */

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const { cart } = useSelector((state) => state);
	return (
		<div className="w-full">
			<nav className="flex items-center h-20 max-w-6xl justify-between mx-auto">
				<NavLink to="/">
					<div className="ml-5">
						<img
							src="../logo.png"
							alt="img h"
							className="h-14"></img>
					</div>
				</NavLink>

				<div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
					<NavLink to="/">
						<p className=" font-medium text-[13px]">Home</p>
					</NavLink>
					<NavLink to="/cart">
						<div className="relative">
							{
								cart.length > 0 ? (
								<span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white z-10">
									{cart.length}
								</span>
							) : (
								""
							)}

							<FaShoppingCart
								className="text-2xl cursor-pointer hover:text-green-400 transition transform duration-200"
								width="1rem"
								height="1rem"></FaShoppingCart>
						</div>
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
