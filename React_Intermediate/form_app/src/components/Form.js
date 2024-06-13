/** @format */

import React, { useState } from "react";
import "./Form.css";

function Form() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		address: "",
		city: "",
		state: "",
		pinCode: "",
		comments: false,
		candidates: false,
		offers: false,
		notifications: "",
		country: "India",
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
					event.target.type === "checkbox"
						? event.target.checked
						: event.target.type === "radio"
						? event.target.id
						: event.target.value,
			};
		});
	}

	return (
		<div className="w-[60%] flex mx-auto flex-col justify-start items-start shadow-2xl bg-white hover:shadow-2xl transition-all duration-500 mt-[40px] rounded-md">
			<form className="w-[100%]  mt-[20px] mb-[20px] px-[40px] ">
				<label
					htmlFor="firstName"
					className="text-sm font-medium leading-6 text-gray-900 mt-[10px] mb-[-5px]">
					First Name:
				</label>
				<br></br>
				<input
					className="mt-1 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
					onChange={changeHandler}
					placeholder="Enter your first name.."
					id="firstName"
					type="text"
					name="firstName"
					value={formData.firstName}></input>

				<br></br>
				<label
					htmlFor="lastName"
					className="text-sm font-medium leading-6 text-gray-900 mt-[20px] ">
					Last Name:
				</label>

				<br></br>
				<input
					className="mt-1 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
					onChange={changeHandler}
					placeholder="Enter your last name.."
					id="lastName"
					type="text"
					name="lastName"
					value={formData.lastName}></input>
				<br></br>

				<label
					className="text-sm font-medium leading-6 text-gray-900"
					htmlFor="email">
					Enter Email:
				</label>
				<br></br>
				<input
					className="mt-1 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
					onChange={changeHandler}
					placeholder="Enter your email.."
					type="email"
					id="email"
					name="email"
					value={formData.email}></input>

				<br></br>
				<label
					className="text-sm font-medium leading-6 text-gray-900 mt-[10px]"
					htmlFor="country">
					Country
				</label>
				<br></br>
				<select
					className="mt-1 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 bg-white"
					id="country"
					name="country"
					onChange={changeHandler}
					value={formData.country}>
					<option>India</option>
					<option>Mexico</option>
					<option>United States</option>
					<option>Cananda</option>
				</select>

				<br></br>
				<label
					className="text-sm font-medium leading-6 text-gray-900"
					htmlFor="address">
					Street Address
				</label>
				<br></br>
				<input
					className="mt-1 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
					type="text"
					placeholder="Enter your address.."
					id="address"
					name="address"
					onChange={changeHandler}
					value={formData.address}></input>

				<br></br>
				<label
					className="text-sm font-medium leading-6 text-gray-900"
					htmlFor="address">
					City
				</label>
				<br></br>
				<input
					className="mt-1 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
					type="text"
					placeholder="Enter your city.."
					id="city"
					name="city"
					onChange={changeHandler}
					value={formData.city}></input>

				<br></br>
				<label
					className="text-sm font-medium leading-6 text-gray-900"
					htmlFor="address">
					State / Province
				</label>
				<br></br>
				<input
					className="mt-1 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
					type="text"
					placeholder="Enter your state.."
					id="state"
					name="state"
					onChange={changeHandler}
					value={formData.state}></input>

				<br></br>
				<label
					className="text-sm font-medium leading-2 text-gray-900 "
					htmlFor="pinCode">
					ZIP / Pin code
				</label>
				<br></br>
				<input
					className="mt-1 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
					type="number"
					onChange={changeHandler}
					placeholder="Enter pin code.."
					value={formData.pinCode}
					name="pinCode"
					id="pinCode"></input>

				<div className="text-md font-medium leading-6 text-gray-900 mt-[15px] mb-[10px]">
					By Email
				</div>
				<div className="flex justify-center flex-col mt-[10px]">
					<div className="flex items-center">
						<input
							className="mt-[2px]"
							type="checkbox"
							onChange={changeHandler}
							id="comments"
							name="comments"
							value={formData.comments}></input>
						<label
							className="ml-[10px] font-medium text-gray-700"
							htmlFor="comments">
							Comments
						</label>
					</div>
					<label className="ml-[23px] text-gray-500 text-sm">
						Get notified when someones posts a comment on a posting.
					</label>
				</div>

				<div className="flex justify-center flex-col mt-[8px]">
					<div className="flex items-center">
						<input
							className="mt-[2px]"
							type="checkbox"
							onChange={changeHandler}
							id="candidates"
							name="candidates"
							value={formData.candidates}></input>
						<label
							className="ml-[10px] font-medium text-gray-700"
							htmlFor="candidates">
							Candidates
						</label>
					</div>
					<label className="ml-[23px] text-gray-500 text-sm">
						Get notified when a candidate applies for a job.
					</label>
				</div>

				<div className="flex justify-center flex-col mt-[8px]">
					<div className="flex items-center">
						<input
							className="mt-[2px]"
							type="checkbox"
							onChange={changeHandler}
							id="offers"
							name="offers"
							value={formData.offers}></input>
						<label
							className="ml-[10px] font-medium text-gray-700"
							htmlFor="offers">
							Offers
						</label>
					</div>
					<label className="ml-[23px] text-gray-500 text-sm">
						Get notified when a candidate applies for a job.
					</label>
				</div>

				<div className="mt-[15px] text-sm font-semibold">
					Push Notifications
				</div>
				<p className=" text-gray-500 text-sm">
					These are delevired via SMS to your mobile phone
				</p>

				<div className="mt-[15px] flex items-center ">
					<input
						className="mt-[3px]"
						type="radio"
						value={formData.notifications}
						id="everything"
						name="notifications"
						onChange={changeHandler}></input>
					<label
						className="ml-[10px] text-sm font-semibold"
						htmlFor="everything">
						Everything
					</label>
				</div>

				<div className="flex mt-[10px] items-center">
					<input
						className="mt[3px]"
						type="radio"
						value={formData.notifications}
						id="same-as-email"
						name="notifications"
						onChange={changeHandler}></input>
					<label
						className="ml-[10px] text-sm font-semibold"
						htmlFor="same-as-email">
						Same as Email
					</label>
				</div>

				<div className="flex items-center mt-[10px]">
					<input
						type="radio"
						value={formData.notifications}
						id="no-push-notification"
						name="notifications"
						onChange={changeHandler}></input>
					<label
						className="ml-[10px] text-sm font-semibold"
						htmlFor="no-push-notification">
						No Push Notifications
					</label>
				</div>
				<button
					type="submit"
					className="bg-blue-500 mt-[20px] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
					onClick={showFormData}>
					Save
				</button>
			</form>

			{/* <fieldset>
				<legend>Form</legend>
				<button>formSave</button>
			</fieldset> */}
		</div>
	);
}

export default Form;
