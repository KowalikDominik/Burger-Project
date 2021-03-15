import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-burger-fd52b-default-rtdb.firebaseio.com/'
});

export default instance;