import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/");
  }

  return (
		<div>
			<div>About</div>
			<button onClick={clickHandler}>Move to Home</button>
		</div>
	);
}

export default About