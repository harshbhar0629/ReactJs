import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/labs");
  }

  return (
		<div>
			<div>Home</div>
			<button onClick={clickHandler}>Move to Labs</button>
		</div>
	);
}

export default Home