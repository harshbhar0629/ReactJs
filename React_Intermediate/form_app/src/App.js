import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setFirstName("");
    setLastName("");
  }, []);

  function changeHandler1(event) {
    // console.log("First Name: ", event.target.value);
    // event.target represent the element
    console.log("First Name: ", event.target);
	}
  function changeHandler2(event) {
		console.log("Last Name: ", event.target.value);
	}

  return (
		<div className="App">
			<form>
				<input
					type="text"
          placeholder="Enter First name.."
          onChange={changeHandler1}
          ></input>
				<input
					type="text"
          placeholder="Enter Last name.."
          onChange={changeHandler2}
          ></input>
			</form>
		</div>
	);
}

export default App;
