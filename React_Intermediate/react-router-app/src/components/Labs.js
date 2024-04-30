import React from 'react'
import { useNavigate } from 'react-router-dom'

function Labs() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/support");
  }

  return (
		<div>
			<div>Labs</div>
      <button onClick={clickHandler}>Move to Support</button>
    </div>
	);
}

export default Labs