/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

/**
 * Routes => it creates multiple routes
 * Route => its a single route
 * Route => means path for single page application
 *
 * <Route path="/" element={<div>Home Page</div>}></Route>
 * what it does => if path having only slash then it return element or render element
 *
 * <Route path="/support" element={<div>Support Page</div>}></Route>
 *
 * what it does => when our path is support then dupport page render
 *
 * @returns
 */

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<div>Home Page</div>}></Route>
				<Route
					path="/support"
					element={<div>Support Page</div>}></Route>
				<Route
					path="/about"
					element={<div>About Page</div>}></Route>
				<Route
					path="/labs"
					element={<div>Labs Page</div>}></Route>
				<Route
					path="*"
					element={<div>Invalid Path</div>}></Route>
			</Routes>
		</div>
	);
}

export default App;
