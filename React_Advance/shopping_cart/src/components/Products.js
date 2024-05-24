/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlices";
import { toast } from "react-hot-toast";

const Products = ({ post }) => {
	console.log(post);
	const { cart } = useSelector((state) => state);
	console.log(cart);

	const dispatch = useDispatch();
	const addToCart = () => {
		dispatch(add(post));
		toast.success("Item added to Cart");
	};

	const removeFromCart = () => {
		dispatch(remove(post.id));
		toast.error("Item removed from Cart");
	};

	const description = post.description.substr(0, 60) + "...";
	const title =
		(post.id === 1 ? post.title.substr(0, 17) : post.title.substr(0, 14)) +
		"...";

	return (
		<div className="group w-full hover:scale-105 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-4 p-4 mt-10 sm:ml-5 mx-auto rounded-xl">
			<div>
				<p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
					{title}
				</p>
			</div>
			<div>
				<p className="w-40 text-gray-400 font-normal text-[12px]  text-left">
					{description}
				</p>
			</div>
			<div className="h-[180px]">
				<img
					className="w-full h-full object-contain "
					src={post.image}
					alt="Image ayege jrur"></img>
			</div>
			<div className="flex justify-between gap-12 items-center w-full mt-5">
				<div>
					<p className="text-green-600  font-semibold">${post.price}</p>
				</div>

				{cart.some((p) => p.id === post.id) ? (
					<button
						className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-4 text-[12px] uppercase tracking-wide group-hover:pb-[4px]"
						onClick={removeFromCart}>
						Remove Item
					</button>
				) : (
					<button
						className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide group-hover:pb-[4px]"
						onClick={addToCart}>
						Add To Cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Products;
