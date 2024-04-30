import React from 'react'
import { useNavigate } from 'react-router-dom';

function Support() {
  const navigate = useNavigate();
  function changeHandler() {
    navigate("/gdywedf");
  }

  return (
		<div>
      <div>Support</div>
      <button onClick={changeHandler}>Move to not found</button>
		</div>
	);
}

export default Support