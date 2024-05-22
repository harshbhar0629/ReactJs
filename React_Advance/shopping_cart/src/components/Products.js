/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlices";
import { toast } from "react-hot-toast";

const Products = ({ post }) => {
	console.log(post)
	const { cart } = useSelector((state) => state);
	console.log(cart)

	const dispatch = useDispatch();
	const addToCart = () => {
		dispatch(add(post));
		toast.success("Item added to Cart");
	};

	const removeFromCart = () => {
		dispatch(remove(post.id));
		toast.error("Item removed from Cart");
	};

	const description = post.description;

	return (
		<div className="flex flex-col items-center justify-between hover:scale-110 transition-all duration-300 ease-in">
			<div>
				<p>{post.title}</p>
			</div>
			<div>
				<p>{description.substr(0, 60)+ "..."}</p>
			</div>
			<div>
				<img
					src={post.image}
					alt="Image ayege jrur"
					width={100}
					height={100}></img>
			</div>
			<div>
				<p>${post.price}</p>
			</div>

			{cart.some((p) => p.id === post.id) ? (
				<button onClick={removeFromCart}>Remove Item</button>
			) : (
				<button onClick={addToCart}>Add To Cart</button>
			)}
		</div>
	);
};

export default Products;
