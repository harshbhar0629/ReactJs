/** @format */

import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlices";
import { toast } from "react-toastify";

const CartItems = ({ item }) => {

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  }

	return (
		<div>
			<div>
				<div>
					<img src={item.image} alt="Image ayege jrur"></img>
				</div>

				<div>
					<h1>{item.title}</h1>
					<h1>{item.description}</h1>
					<div>
						<p>${item.price}</p>
					</div>
					<div>
						<FcDeleteDatabase onClick={removeFromCart}></FcDeleteDatabase>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItems;
