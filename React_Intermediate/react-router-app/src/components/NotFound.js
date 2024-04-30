import React from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/");
  }

  function backHandler() {
		navigate(-1);
  }
  
  return (
		<div>
      <div>NotFound</div>
      <button onClick={clickHandler}>Move to home</button>
      <button onClick={backHandler}>Go back</button>
    </div>
	);
}

export default NotFound