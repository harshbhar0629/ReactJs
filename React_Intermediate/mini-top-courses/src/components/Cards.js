/** @format */

import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
	let courses = props.courses;
	let category = props.category;
	const [likedCourses, setLikedCourses] = useState([]);

	function getCourses() {
		if (category === "All") {
			let allCourses = [];
			Object.values(courses).forEach((array) => {
				array.forEach((courseData) => {
					allCourses.push(courseData);
				});
			});
			return allCourses;
		} else {
			//main sirf specific categiry ka data array krunga
			return courses[category];
		}
	}

	return (
		<div className="flex flex-wrap justify-center gap-8 mb-[60px] mt-[40px]">
			{getCourses().map((course) => (
				<Card
					key={course.id}
					course={course}
					likedCourses={likedCourses}
					setLikedCourses={setLikedCourses}
				/>
			))}
		</div>
	);
};

export default Cards;
