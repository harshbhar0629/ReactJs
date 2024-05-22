/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItems from "../components/CartItems";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("printing:");
  console.log(cart);
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
	}, [cart]);

	return (
		<div>
			{cart.length > 0 ? (
				<div>
					<div>
						{cart.map((item, index) => {
							return (
								<CartItems
									item={item}
									key={index}></CartItems>
							);
						})}
					</div>

					<div>
						<div>Your Cart</div>
						<div>Summary</div>
						<p>
							Total items: <span>{cart.length}</span>
						</p>
					</div>

					<div>
						<p>
							Total Amount: <span>${totalAmount}</span>
						</p>
						<button>CheckOut Now</button>
					</div>
				</div>
			) : (
				<div>
					<h1>Cart Empty</h1>
					<NavLink to="/">
						<button>Shop Now</button>
					</NavLink>
				</div>
			)}
		</div>
	);
};

export default Cart;
