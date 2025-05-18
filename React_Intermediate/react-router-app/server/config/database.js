/** @format */

const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/blog";

exports.dbConnect = () => {
	mongoose
		.connect(MONGO_URL)
		.then(() => {
			console.log("Db connect successfully");
			console.log(MONGO_URL);
		})
		.catch((err) => {
			console.log("Error in db connection");
		});
};
