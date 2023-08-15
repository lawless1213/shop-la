const url = 'https://dummyjson.com';

const getApiData = (getParams) => {
	axios.get(`${url}/${getParams}`);
}