/** @format */

import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="py-4 border-b-2 bg-white border-b-gray-300 drop-shadow-md fixed z-10 top-0 inset-x-0 ">
			<Link to={"/"}>
				<h1 className="font-bold text-4xl uppercase text-center">Blogs Posts</h1>
			</Link>
		</header>
	);
}
