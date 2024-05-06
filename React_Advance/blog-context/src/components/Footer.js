/** @format */

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer() {
  const { page, handlePage, totalPages } = useContext(AppContext);
	return (
		<div className="w-full fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 ">
			<div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
				<div className="flex gap-x-3">
					{page > 1 && (
						<button
							className="border-2 border-gray-300 py-1 px-4 rounded-md text-[14px]"
							onClick={() => handlePage(page - 1)}>
							Previous
						</button>
					)}
					{page < totalPages && (
						<button
							className="border-2 border-gray-300 py-1 px-4 rounded-md text-[14px]"
							onClick={() => handlePage(page + 1)}>
							Next
						</button>
					)}
				</div>
				<p className="text-sm font-semibold ml-auto">
					Page {page} of {totalPages}
				</p>
			</div>
		</div>
	);
}

export default Footer;
