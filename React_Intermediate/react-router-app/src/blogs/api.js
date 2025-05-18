/** @format */

import axios from "axios";
const axiosInstance = axios.create({});

export const blogApi = async (method, url, bodyData, headers) => {
	try {
		const response = await axiosInstance({
			method: `${method}`,
			url: `http://localhost:4000/${url}`,
			data: bodyData ? bodyData : null,
			headers: headers ? headers : null,
		});
		console.log("response", response);
        // return response.data;
        return response;
	} catch (err) {
		console.log(err.message);
	}
};
