import axios from "axios";

export default axios.create({
	baseURL: "http://localhost:4519/",
	headers:{
		"Content-type": "application/json",
	}
});