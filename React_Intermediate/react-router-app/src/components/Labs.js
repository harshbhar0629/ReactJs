import React from 'react'
import { useNavigate } from 'react-router-dom'

function Labs() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/support");
  }
  
  function backHandler() {
		navigate(-1);
	}

  return (
		<div>
			<div>Labs</div>
      <button onClick={clickHandler}>Move to Support</button>
      <button onClick={backHandler}>Go back</button>
    </div>
	);
}

export default Labs