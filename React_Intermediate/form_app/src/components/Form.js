import React, { useState } from 'react'
import "./Form.css"

function Form() {

    const [formData, setFormData] = useState({
			firstName: "",
			lastName: "",
			email: "",
			country: "",
			address: "",
			city: "",
			state: "",
            postalCode: "",
            comments: false,
            candidates: false,
            offers: false,
            notifications: "",    
        });
    // console.log(formData);

    function showFormData(event) {
        event.preventDefault();
        console.log(formData);
    }

    function changeHandler(event) {
        console.log(event.target);
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]:
                    (event.target.type === "checkbox")? 
                        event.target.checked :
                        (event.target.type === "radio") ?
                            event.target.id :
                            event.target.value,
            };
        });
    }

  return (
		<div >
			<form >
				<label htmlFor="firstName">First Name:</label>
				<br></br>
				<input
					onChange={changeHandler}
					placeholder="Enter your first name.."
					id="firstName"
					type="text"
					name="firstName"
                    value={formData.firstName}>
                </input>
                
                <br></br>
				<label htmlFor="lastName">Last Name:</label>
				<br></br>
				<input
					onChange={changeHandler}
					placeholder="Enter your last name.."
					id="lastName"
					type="text"
					name="lastName"
                    value={formData.lastName}>
                </input>
                <br></br>
              
                <label htmlFor='email'>Enter Email:</label>
                <br></br>
                <input
                  onChange={changeHandler}    
                  placeholder='Enter your email..'
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                >
                </input>

                <br></br>
                <label htmlFor='country'>Country</label>
                <br></br>
                <select
                    id='country'
                    name='country'
                    onChange={changeHandler}
                    value={formData.country}

                >
                    <option>
                        India  
                    </option> 
                    <option>
                      Mexico
                    </option>
                    <option>
                      United States
                    </option>
                    <option>
                      Cananda
                    </option>
                </select>

                <br></br>
                <label htmlFor='address'>Street Address</label>
                <br></br>
                <input
                type='text'  
                  placeholder='Enter your address..'
                  id='address'
                  name='address'
                  onChange={changeHandler}
                  value={formData.address}
                ></input>

                <br></br>
                <label htmlFor='address'>City</label>
                <br></br>
                <input
                  type='text'
                  placeholder='Enter your city..'
                  id='city'
                  name='city'
                  onChange={changeHandler}
                  value={formData.city}
                ></input>

                <br></br>
                <label htmlFor='address'>State / Province</label>
                <br></br>
                <input
                  type='text'  
                  placeholder='Enter your state..'
                  id='state'
                  name='state'
                  onChange={changeHandler}
                  value={formData.state}
                ></input>

                <br></br>
                <label htmlFor='postalCode'>
                  ZIP / Postal code
                </label>
                <br></br>
                <input
                  type='number'
                  onChange={changeHandler}
                  placeholder='Enter ZIP code..'
                  value={formData.postalCode}
                  name='postalCode'
                  id='postalCode'
                ></input>

                <div>By Email</div>
                <input
                  type='checkbox'
                  onChange={changeHandler}
                  id='comments'
                  name='comments'
                  value={formData.comments}
                ></input>
                <label htmlFor='comments'>Comments</label>
                <br></br>
                <label>
                    Get notified when someones posts a comment on a posting.
                </label>

                <br></br>
                <input
                  type='checkbox'
                  onChange={changeHandler}
                  id='candidates'
                  name='candidates'
                  value={formData.candidates}
                ></input>
                <label htmlFor='candidates'>Candidates</label>
                <br></br>
                <label>
                    Get notified when a candidate applies for a job.
                </label>

                <br></br>
                <input
                  type='checkbox'
                  onChange={changeHandler}
                  id='offers'
                  name='offers'
                  value={formData.offers}
                ></input>
                <label htmlFor='offers'>Offers</label>
                <br></br>
                <label>
                    Get notified when a candidate applies for a job.
                </label>

                <div>Push Notifications</div>
                <p>These are delevired via SMS to your mobile phone</p>

                <input
                  type='radio'
                  value={formData.notifications}
                  id='everything'
                  name='notifications'
                  onChange={changeHandler}
                ></input>
                <label htmlFor='everything'>Everything</label>

                <br></br>
                <input
                  type='radio'
                  value={formData.notifications}
                  id='same-as-email'
                  name='notifications'
                  onChange={changeHandler}
                ></input>
                <label htmlFor='same-as-email'>Same as Email</label>

                <br></br>
                <input
                  type='radio'
                  value={formData.notifications}
                  id='no-push-notification'
                  name='notifications'
                  onChange={changeHandler}
                ></input>
                <label htmlFor='no-push-notification'>No Push Notifications</label>
                <br></br>
                <button onClick={showFormData}>Save</button>
			</form>
		</div>
	);
}

export default Form