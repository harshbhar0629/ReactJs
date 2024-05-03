/** @format */

import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";
import { useState } from "react";
import Dashboard from "./page/Dashboard";
import NotFound from "./page/NotFound";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className="App min-w-screen h-auto min-h-[100vh] bg-[#000814] flex flex-col">
			<Navbar
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}></Navbar>
			<Routes>
				<Route
					path="/"
					element={<Home></Home>}></Route>
				<Route
					path="/signup"
					element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
				<Route
					path="/login"
					element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
				<Route
					path="/dashboard"
					element={
						<PrivateRoute isLoggedIn={isLoggedIn}>
							<Dashboard></Dashboard>
						</PrivateRoute>
					}></Route>
				<Route
					path="*"
					element={<NotFound></NotFound>}></Route>
			</Routes>
		</div>
	);
}

export default App;
