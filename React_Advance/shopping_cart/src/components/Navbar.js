import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
		<div>
			<div className="flex flex-row justify-between">
				<NavLink to="/">
					<img
						src="../logo.png"
						alt="img h"></img>
				</NavLink>
				<div>
					<NavLink to="/">
						<p>Home</p>
					</NavLink>
					<NavLink to="/cart">
						<div>
							<FaShoppingCart></FaShoppingCart>
						</div>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Navbar