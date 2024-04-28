import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // if we have less no of arguements then we can use UseState hook but if we have multiple element then we can't afford much variable we can make but it is complex to maintain so we use objects

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // useEffect(() => {
  //   setFirstName("");
  //   setLastName("");
  // }, []);

  // function changeHandler1(event) {
  //   // console.log("First Name: ", event.target.value);
  //   // event.target represent the element
  //   setFirstName(event.target.value);
  //   // console.log("First Name: ", event.target);
	// }
  // function changeHandler2(event) {
  //   // console.log("Last Name: ", event.target.value);
  //   setLastName(event.target.value);
	// }

  // use Objects for handling multiple states or element
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  function changeHandler(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    })
  }

  return (
		<div className="App">
			<form>
				{/*
          both input for useState
        
          <input
					type="text"
          placeholder="Enter First name.."
          onChange={changeHandler1}
          ></input>
				<input
					type="text"
          placeholder="Enter Last name.."
          onChange={changeHandler2}
          ></input> */}

				<input
					type="text"
          placeholder="Enter First name.."
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        >
        </input>
        
        <input
          onChange={changeHandler}      
          type='text'
          placeholder='Enter Last Name..'
          name='lastName'
          value={formData.lastName}
        >
        </input>
            
			</form>
		</div>
	);
}

export default App;
