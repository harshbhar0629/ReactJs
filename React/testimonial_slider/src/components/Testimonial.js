/** @format */

import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonial(props) {
	let reviews = props.reviews;

	const [cardIdx, setCardIdx] = useState(0);

	function leftShiftHanlder() {
		if (cardIdx == 0) {
			setCardIdx(reviews.length-1);
		} else {
			setCardIdx(cardIdx - 1);
		}
	}

	function rightShiftHanlder() {
		if (cardIdx == reviews.length-1) {
			setCardIdx(0);
		} else {
			setCardIdx(cardIdx + 1);
		}
	}

    function supriseHandler() {
        let idx = Math.floor(Math.random() * reviews.length);
        setCardIdx(idx);
    }

	return (
		<div className="w-[85vw] sm:w-[600px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 shadow-lg hover:drop-shadow-2xl">
			<Card review={reviews[cardIdx]}></Card>

			<div className="mt-[10px]">
				<div 
					className="mt-[20px] flex
                 text-3xl gap-3 text-violet-400 font-bold justify-center">
					<button
						onClick={leftShiftHanlder}
						className="cursor-pointer hover:text-violet-500">
						<FiChevronLeft></FiChevronLeft>
					</button>
					<button onClick={rightShiftHanlder}>
						<FiChevronRight className="cursor-pointer hover:text-violet-500"></FiChevronRight>
					</button>
				</div>

				<div className="mx-auto">
					<button
						onClick={supriseHandler}
						className="bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mx-auto mt-[25px]">
						Surprise Me
					</button>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
