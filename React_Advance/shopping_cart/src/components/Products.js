import React, { useEffect, useState } from 'react'

const Products = ({post}) => {

  useEffect(() => {
    console.log("hey:",post.image);
  }, []);

  const [selected, setSelected] = useState(false);
  return (
		<div>
			<div>
				<p>{post.title}</p>
			</div>
			<div>
				<p>{post.description}</p>
			</div>
			<div>
				<img src={post.image} alt='image ayege jrur' width={100} height={100}></img>
			</div>
			<div>
				<p>{post.price}</p>
			</div>
			<button>{selected ? <p>Remove Item</p> : <p>Add to Cart</p>}</button>
		</div>
	);
}

export default Products;