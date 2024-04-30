import React from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/");
  }

  return (
		<div>
      <div>NotFound</div>
      <button onClick={clickHandler}>Move to home</button>
		</div>
	);
}

export default NotFound