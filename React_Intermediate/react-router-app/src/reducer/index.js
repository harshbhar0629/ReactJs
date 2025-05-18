/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";

const rootReducer = combineReducers({
	// add all reducer
	auth: authReducer,
});

export default rootReducer;
