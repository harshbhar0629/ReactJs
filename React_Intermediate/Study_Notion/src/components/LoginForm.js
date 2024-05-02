/** @format */

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../page/Dashboard";
import toast from "react-hot-toast";

export const LoginForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value,
            } 
        ));
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

	return (
		<div>
			<form onSubmit={submitHandler}>
				<label>
					<p>
						Email Address<sup>*</sup>
					</p>
					<input
						id="email"
						name="email"
						type="email"
						required
						value={formData.email}
						onChange={changeHandler}
						placeholder="Enter your email address"></input>
				</label>
				<label>
					<p>
						Password<sup>*</sup>
					</p>
					<input
						id="password"
						name="password"
						type={showPassword? ("text"): ("password")}
						required
						value={formData.password}
						onChange={changeHandler}
                        placeholder="Enter password"></input>
                    
                    <span onClick={() => {
                        setShowPassword(!showPassword);
                    }}>
                        {showPassword? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>):(<AiOutlineEye></AiOutlineEye>)}
                    </span>

                    <Link to="#">
                        <p>Forgot Password</p>
                    </Link>
                </label>
                
                <button >Sign In</button>
			</form>
		</div>
	);
};

export default LoginForm;