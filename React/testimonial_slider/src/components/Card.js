import React from 'react'
import {
	FaQuoteLeft,
	FaQuoteRight,
} from "react-icons/fa";

import {
	FiChevronLeft,
	FiChevronRight,
} from "react-icons/fi";

function Card(props) {
    let review = props.review;
    return (
			<div className="flex flex-col sm:relative">
				<div className="absolute top-[-7rem] z-[10] mx-auto">
					<img
						className=" aspect-sqaure rounded-full w-[110px] h-[110px] z-[12]"
						src={review.image}></img>
					<div className="w-[110px] h-[110px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
				</div>

				<div className="text-center mt-7">
					<p className="font-bold text-2xl capitalize">{review.name}</p>
				</div>

				<div className="text-center mt-7">
					<p className="text-violet-400 uppercase text-sm">{review.job}</p>
				</div>

				<div className="text-violet-500 mx-auto mt-5">
					<FaQuoteLeft></FaQuoteLeft>
				</div>

				<div className=" text-center mt-4 text-slate-500">{review.text}</div>

				<div className="text-violet-500 mx-auto mt-5">
					<FaQuoteRight></FaQuoteRight>
				</div>

				<div
					className="flex
                 text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center">
					<button className="cursor-pointer hover:text-violet-500">
						<FiChevronLeft></FiChevronLeft>
					</button>
					<button>
						<FiChevronRight className="cursor-pointer hover:text-violet-500"></FiChevronRight>
					</button>
				</div>

				<div>
					<button>Surprise Me</button>
				</div>
			</div>
		);
}

export default Card