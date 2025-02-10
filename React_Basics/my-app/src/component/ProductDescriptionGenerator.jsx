/** @format */

import { useState } from "react";
import { generateProductDescription2 } from "./data";

const ProductDescriptionGenerator = () => {
	const [name, setName] = useState("");
	const [vendor, setVendor] = useState("");
	const [price, setPrice] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [description, setDescription] = useState("");
	const [tags, setTags] = useState("");
	const [fulfillment, setFulfillment] = useState("");
	const [gender, setGender] = useState("");
	const [weight, setWeight] = useState("");

	const handleGenerate = async () => {
		setLoading(true);
		const desc = await generateProductDescription2(
			name,
			imageUrl,
			vendor,
			price,
			tags,
			gender,
			weight,
			fulfillment
		);
		setLoading(false);
		// setDescription(desc);
	};
	const [loading, setLoading] = useState(false);
	return (
		<div
			style={{
				maxWidth: "500px",
				margin: "20px auto",
				padding: "20px",
				borderRadius: "8px",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
				backgroundColor: "#fff",
			}}>
			<h2
				style={{ textAlign: "center", fontSize: "20px", marginBottom: "15px" }}>
				Product Description Generator
			</h2>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					fontSize: "16px",
				}}>
				<input
					type="text"
					placeholder="Product Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					style={{
						padding: "8px",
						border: "1px solid #ccc",
						borderRadius: "4px",
						fontSize: "16px",
					}}
				/>
				<input
					type="text"
					placeholder="Vendor"
					value={vendor}
					onChange={(e) => setVendor(e.target.value)}
					style={{
						padding: "8px",
						border: "1px solid #ccc",
						borderRadius: "4px",
						fontSize: "16px",
					}}
				/>
				<input
					type="text"
					placeholder="Price"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					style={{
						padding: "8px",
						border: "1px solid #ccc",
						borderRadius: "4px",
						fontSize: "16px",
					}}
				/>
				<input
					type="text"
					placeholder="Image URL"
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
					style={{
						padding: "8px",
						border: "1px solid #ccc",
						borderRadius: "4px",
						fontSize: "16px",
					}}
				/>
				<input
					type="text"
					placeholder="tags"
					value={tags}
					onChange={(e) => setTags(e.target.value)}
					style={{
						padding: "8px",
						border: "1px solid #ccc",
						borderRadius: "4px",
						fontSize: "16px",
					}}
				/>
				<input
					type="text"
					placeholder="weight"
					value={weight}
					onChange={(e) => setWeight(e.target.value)}
					style={{
						padding: "8px",
						border: "1px solid #ccc",
						borderRadius: "4px",
						fontSize: "16px",
					}}
				/>
				<input
					type="text"
					placeholder="gender"
					value={gender}
					onChange={(e) => setGender(e.target.value)}
					style={{
						padding: "8px",
						border: "1px solid #ccc",
						borderRadius: "4px",
						fontSize: "16px",
					}}
				/>
				<input
					type="text"
					placeholder="fulfillment"
					value={fulfillment}
					onChange={(e) => setFulfillment(e.target.value)}
					style={{
						padding: "8px",
						border: "1px solid #ccc",
						borderRadius: "4px",
						fontSize: "16px",
					}}
				/>

				<button
					disabled={loading}
					onClick={handleGenerate}
					style={{
						backgroundColor: "#007BFF",
						color: "#fff",
						padding: "10px",
						border: "none",
						borderRadius: "4px",
						cursor: "pointer",
						marginTop: "10px",
						fontSize: "16px",
					}}>
					Generate Description
				</button>
			</div>
		</div>
	);
};

export default ProductDescriptionGenerator;
