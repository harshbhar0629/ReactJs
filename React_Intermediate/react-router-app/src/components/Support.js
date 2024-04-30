import React from 'react'
import { useNavigate } from 'react-router-dom';

function Support() {
  const navigate = useNavigate();
  function changeHandler() {
    navigate("/gdywedf");
  }
  
  function backHandler() {
		navigate(-1);
	}

  return (
		<div>
      <div>Support</div>
      <button onClick={changeHandler}>Move to not found</button>
      <button onClick={backHandler}>Go back</button>
		</div>
	);
}

export default Support