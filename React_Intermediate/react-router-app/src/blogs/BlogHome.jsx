/** @format */
import React from "react";

const BlogHome = () => {
	return (
		<div style={styles.container}>
			<header style={styles.header}>
				<h1>Welcome to My Blog</h1>
				<p>Stay updated with the latest articles</p>
			</header>
			<main style={styles.main}>
				<img
					src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png"
					alt="Blog banner"
					style={styles.image}
				/>
				<img
					src="https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_640.jpg"
					style={styles.image}
				/>
				<img
					src="https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_640.jpg"
					style={styles.image}
				/>
				<img
					src="https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_640.jpg"
					style={styles.image}
                />
                
				<p>Explore interesting articles and insights.</p>
				<button
					style={styles.button}
					onClick={() => (window.location.href = "/view-blog")}>
					View Blog
				</button>
			</main>
			<footer style={styles.footer}>
				<p>&copy; 2025 My Blog. All rights reserved.</p>
			</footer>
		</div>
	);
};

// Styles for better design
const styles = {
	container: {
		fontFamily: "Arial, sans-serif",
		textAlign: "center",
		padding: "20px",
	},
	header: {
		backgroundColor: "#4CAF50",
		color: "white",
		padding: "10px",
	},
	main: {
		marginTop: "20px",
	},
	image: {
		width: "600px",
		height: "300px",
		borderRadius: "10px",
		marginBottom: "20px",
	},
	button: {
		backgroundColor: "#008CBA",
		color: "white",
		padding: "10px 20px",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
		fontSize: "16px",
	},
	footer: {
		marginTop: "40px",
		fontSize: "12px",
		color: "gray",
	},
};

export default BlogHome;
