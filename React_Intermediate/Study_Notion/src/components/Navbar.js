/** @format */

import React, { useState } from "react";
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
		<div className="flex flex-row justify-evenly">
			<Link to="/">
				<img
					src={Logo}
					alt="logo"
					width={160}
					height={32}
					loading="lazy"></img>
			</Link>

			<nav>
				<ul className="flex gap-3">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/">About</Link>
					</li>
					<li>
						<Link to="/">Contact</Link>
					</li>
				</ul>
			</nav>

			<div className="flex ml-5 gap-5">
				{!isLoggedIn &&
					(
						<Link to="/login">
							<button>Log In</button>
						</Link>
					)
				}
				{!isLoggedIn &&
					(
						<Link to="/signup">
							<button>Sign Up</button>
						</Link>
					)
				}
				{isLoggedIn &&
					(
						<Link to="/">
						<button onClick={() => {
							toast.success("Logged Out");
					     		setIsLoggedIn(false);
							}
						}
						>Log Out</button>
						</Link>
					)
				}
				{isLoggedIn &&
					(
						<Link to="/dashboard">
							<button>Dashboard</button>
						</Link>
					)
				}
			</div>

			

		</div>
	);
}

export default Navbar;
