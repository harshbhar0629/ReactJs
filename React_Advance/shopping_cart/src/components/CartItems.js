/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlices";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";

const CartItems = ({ item }) => {
	const dispatch = useDispatch();
	const removeFromCart = () => {
		dispatch(remove(item.id));
		toast.error("Item removed from Cart");
	};

	return (
		<div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5  ">
			<div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
				<div className="w-[30%]">
					<img
						className="object-cover"
						src={item.image}
						alt="Image ayege jrur"></img>
				</div>

				<div className="md:ml-10 self-start space-y-5 w-[90%] md:w-[70%]">
					<h1 className="text-xl text-slate-700 font-bold">{item.title}</h1>
					<h1 className="text-base text-slate-700 font-medium">
						{item.description.substr(0, 80) + "..."}
					</h1>
					<div className="flex items-center justify-between">
						<p className="font-bold text-lg text-green-600">${item.price}</p>
						<div className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
							<AiFillDelete onClick={removeFromCart}></AiFillDelete>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItems;
