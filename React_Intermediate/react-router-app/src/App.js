/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import Support from "./components/Support";
import { Link, NavLink } from "react-router-dom";

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
 * <Link to="/support">Support</Link>
 * what it does => it link the routes means whatever path is described in routes to render its element you have to just mention in link whwn we click on link element then it hit routes path and routes element render on screen
 * 
 * 
 * link vs navlink the main difference is that link render routes element but navlink actually add the active class to its rendering element if another element render then its  remove active class and add active to another rendering routes
 *
 * @returns
 */

function App() {
	return (
		<div className="App">
			{/* <Routes>
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
			</Routes> */}

			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/support">Support</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/labs">Labs</NavLink>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route
					path="/"
					element={<Home></Home>}></Route>
				<Route
					path="/support"
					element={<Support></Support>}></Route>
				<Route
					path="/about"
					element={<About></About>}></Route>
				<Route
					path="/labs"
					element={<Labs></Labs>}></Route>
				<Route
					path="*"
					element={<NotFound></NotFound>}></Route>
			</Routes>
		</div>
	);
}

export default App;
