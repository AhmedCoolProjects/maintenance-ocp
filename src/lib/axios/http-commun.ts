import axios from 'axios';

export default axios.create({
	baseURL: 'https://ocp-maintenance-api.vercel.app/api',
	headers: {
		accept: 'application/json',
		'Content-Type': 'application/json'
	}
});