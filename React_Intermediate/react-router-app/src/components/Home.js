import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  function clickHandler() {
		navigate("/labs");
  }
  function backHandler() {
		navigate(-1);
	}

  return (
		<div>
			<div>Home</div>
      <button onClick={clickHandler}>Move to Labs</button>
      <button onClick={backHandler}>Go back</button>
		</div>
	);
}

export default Home