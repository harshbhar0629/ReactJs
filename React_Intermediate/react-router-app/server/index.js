/** @format */

const express = require("express");
const database = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Loading environment variables from .env file
require("dotenv").config();

// Setting up port number
const PORT = process.env.PORT || 4000;

// Connecting to database
database.dbConnect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

const Blog = require("./model/Blog");

app.post("/create-blog", async (req, res) => {
	try {
		const { title, description, userId } = req.body;
		if (!title || !description) {
			return res.status(400).json({
				success: false,
				message: "Please provide all the fields",
			});
		}
		const blog = await Blog.create({
			title,
			description,
			createdBy: userId,
		});

		return res.status(200).json({
			success: true,
			blog: blog,
			message: "Blog created successfully",
		});
	} catch (err) {
		console.log("error in creating blog", err.message);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
			Error: String(err),
		});
	}
});

app.get("/get-blogs", async (req, res) => {
	try {
		let blogs = await Blog.find({}).populate("createdBy");
		if (!blogs) {
			return res.status(404).json({
				success: false,
				message: "No blogs found",
			});
		}

		blogs = blogs.filter(
			(blog) => blog.createdBy && blog.createdBy !== null
		);

		blogs = blogs.map((blog) => {
			return {...blog._doc, createdBy: {name: blog.createdBy.name}};
		})

		console.log("blogs", blogs);

		return res.status(200).json({
			success: true,
			blog: blogs,
			message: "Blog fetch successfully",
		});
	} catch (err) {
		console.log("error in fetching blog", err.message);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
			Error: String(err),
		});
	}
});

const User = require("./model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Route for user login
app.post("/login", async (req, res) => {
	try {
		// Get email and password from request body
		const { email, password } = req.body;

		// Check if email or password is missing
		if (!email || !password) {
			// Return 400 Bad Request status code with error message
			return res.status(400).json({
				success: false,
				message: `All fields are required!`,
			});
		}

		// Find user exist or not for this email
		const user = await User.findOne({ email });

		// If user not found
		if (!user) {
			// Return 401 Unauthorized status code with error message
			return res.status(401).json({
				success: false,
				message: `User is not Registered with Us Please SignUp to Continue`,
			});
		}

		// Generate JWT token and Compare Password
		if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign(
				{
					email: user.email,
					id: user._id,
				},
				"this is jwt secret key",
				{
					expiresIn: "24h",
				}
			);

			// Save token to user document in database
			user._doc.token = token;
			user._doc.password = undefined;

			// Set cookie for token and return success response
			const options = {
				expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			};

			res.cookie("token", token, options).status(200).json({
				success: true,
				user,
				message: `User Login Successfully!`,
			});
			//
		} else {
			return res.status(401).json({
				success: false,
				message: `Password is incorrect`,
			});
		}
		//
	} catch (error) {
		console.error(error);
		// Return 500 Internal Server Error status code with error message
		return res.status(500).json({
			success: false,
			message: `Login Failure, Please Try Again!`,
			error: String(error),
		});
	}
});

// Route for user signup
app.post("/signup", async (req, res) => {
	try {
		// fetch all data from the request body
		const { name, email, password } = req.body;

		// Check if All Details are there or not
		if (!name || !email || !password) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please login to continue.",
			});
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// create user in db
		const user = await User.create({
			name,
			email,
			password: hashedPassword,
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully!",
		});
		//
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			success: false,
			message: "User cannot be registered, Please try again!",
		});
	}
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});
