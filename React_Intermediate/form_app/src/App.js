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
  const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		comments: "",
		isVisible: false,
	});
  console.log(formData);
  function changeHandler(event) {
    console.log(event.target)
    setFormData(prevFormData => {
      return {
				...prevFormData,
				[event.target.name]:
					event.target.type == "checkbox"
						? event.target.checked
						: event.target.value,
			};
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
				<br></br>
				<br></br>
				<input
					onChange={changeHandler}
					type="text"
					placeholder="Enter Last Name.."
					name="lastName"
          value={formData.lastName}
        >
        </input>
				
        <br></br>
				<br></br>

        <textarea
          className='text-area'
          onChange={changeHandler}
          placeholder="Enter text"
          name='comments'
          value={formData.comments}
          type="text"
        >

        </textarea>
        <br></br>
        <br></br>

        <fieldset>
          <legend>Button</legend> 
          <input
            type='checkbox'
            onChange={changeHandler}
            name='isVisible'
            id='isVisible'
            checked={formData.isVisible}
          >
          </input>
          <label
            htmlFor='isVisible'
          >
            Am I Visible
          </label>
        
        </fieldset>
        
			</form>
		</div>
	);
}

export default App;
