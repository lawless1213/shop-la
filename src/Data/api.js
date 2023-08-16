import axios from "axios";

const url = 'https://dummyjson.com';

async function getApiData(getParams) {
	let response = await axios.get(`${url}/${getParams}`);
	return response;
}

export default getApiData;