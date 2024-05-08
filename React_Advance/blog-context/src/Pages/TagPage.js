/** @format */

import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router";

const TagPage = () => {
	const navigation = useNavigate();
	const location = useLocation();
	const tag = location.pathname.split("/").at(-1);
	return (
		<div>
			<div>
				<Header></Header>
				<div>
					<button onClick={() => navigation(-1)}>Back</button>
					<h2>
						Blogs Tagged <span>#{tag}</span>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default TagPage;
