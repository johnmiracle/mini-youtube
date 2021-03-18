/** @format */

import axios from 'axios';

const URL = 'https://youtube-search-results.p.rapidapi.com/youtube-search/';

export const fetchApi = async (query) => {
	const { data } = await axios.get(URL, {
		headers: {
			'x-rapidapi-key': process.env.REACT_APP_API_KEY,
			'x-rapidapi-host': process.env.REACT_APP_API_HOST,
			useQueryString: true
		},
		params: {
			q: query
		}
	});
	return data.items.filter((item) => item.type === 'video');
};
