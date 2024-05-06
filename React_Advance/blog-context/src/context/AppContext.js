/** @format */

import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// step-1 context creation
export const AppContext = createContext();

// step-2 create provider and apply
export default function AppContextProvider({ children }) {
	// child -> App.js
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);

	async function fetchBlogPost(page = 1) {
		setLoading(true);
		let url = `${baseUrl}?page=${page}`;
		try {
			const res = await fetch(url);
			const output = await res.json();
			console.log("inside",output);
			setPage(output.page);
			setPosts(output.posts);
			setTotalPages(output.totalPages);
		} catch (error) {
			alert("Something went wrong");
			setPage(1);
			setPosts([]);
			setTotalPages(null);
		}
		setLoading(false);
	}

	function handlePage(page) {
		setPage(page);
		fetchBlogPost(page);
	}

	// we have to return this value for its children
	const value = {
		posts,
		setPosts,
		loading,
		setLoading,
		page,
		setPage,
		totalPages,
		setTotalPages,
		handlePage,
		fetchBlogPost,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// export default AppContext;
// export default AppContextProvider;
