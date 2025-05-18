/** @format */

import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import { Link, NavLink } from "react-router-dom";
import CreateBlog from "./blogs/CreateBlog";
import ViewBlogs from "./blogs/ViewBlogs";
import Login from "./blogs/Login";
import Signup from "./blogs/Signup";
import BlogHome from "./blogs/BlogHome";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setToken, setSignupData } from "./slice/authSlice";

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
	const token = useSelector((state) => state.auth.token);
	const dispatch = useDispatch();

	console.log(token)
	return (
		<div>
			<nav>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "20px",
					}}>
					<div>
						<NavLink to="/">Home</NavLink>
					</div>
					<div>
						<NavLink to="/create-blog">Create Blog</NavLink>
					</div>
					<div>
						<NavLink to="/view-blog">View Blog</NavLink>
					</div>
					{token && (
						<div onClick={() => {
							dispatch(setToken(null));
							dispatch(setSignupData(null));
							localStorage.removeItem("token");
							toast.success("Logout Successfully");
						}}>
							<NavLink to="/">LogOut</NavLink>
						</div>
					)}
					{!token && (
						<div>
							<NavLink to="/login">Login</NavLink>
						</div>
					)}
				</div>
			</nav>

			<Routes>
				<Route
					path="/"
					element={<BlogHome></BlogHome>}></Route>
				<Route
					path="/create-blog"
					element={<CreateBlog />}></Route>
				<Route
					path="/view-blog"
					element={<ViewBlogs />}></Route>
				<Route
					path="/login"
					element={<Login />}></Route>
				<Route
					path="/signup"
					element={<Signup />}></Route>
				<Route
					path="*"
					element={<NotFound></NotFound>}></Route>
			</Routes>
		</div>
	);
}

export default App;
