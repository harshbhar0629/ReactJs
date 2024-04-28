import React from 'react'
import {
	FaQuoteLeft,
	FaQuoteRight,
} from "react-icons/fa";


function Card(props) {
    let review = props.review;
    return (
			<div className="flex flex-col relative">
				<div className="absolute top-[-7rem] z-[10] mx-auto">
					<img
						className=" aspect-sqaure rounded-full w-[110px] h-[110px] z-[12]"
						src={review.image}></img>
					<div className="w-[110px] h-[110px] bg-violet-500 rounded-full absolute top-[-4px] z-[-10] left-[8px]"></div>
				</div>

				<div className="text-center mt-7">
                <p className="tracking-wider font-bold text-2xl capitalize">{review.name}</p>
				</div>

				<div className="text-center">
					<p className="text-violet-400 uppercase hover:text-violet-500 text-sm">{review.job}</p>
				</div>

				<div className="text-violet-500 mx-auto mt-5">
					<FaQuoteLeft></FaQuoteLeft>
				</div>

				<div className=" text-center mt-4 text-slate-500 hover:text-violet-700">{review.text}</div>

				<div className="text-violet-500 mx-auto mt-5">
					<FaQuoteRight></FaQuoteRight>
				</div>

			</div>
		);
}

export default Card