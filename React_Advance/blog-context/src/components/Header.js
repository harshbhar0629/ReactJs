import React from 'react'

function Header() {
  return (
		<div className="border shadow-md py-2 w-full">
			<header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white">
				<h1 className="uppercase text-3xl font-bold text-center">
					Blogs Posts
				</h1>
			</header>
		</div>
	);
}

export default Header