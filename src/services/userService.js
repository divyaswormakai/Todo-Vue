import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:3001/users';

export const RegisterUser = async (req, res) => {
	try {
		let body = req.body;
		if (body.username && body.username.length > 0) {
			let savedUser = await axios.post('/register', body);
			res.status(201).send(savedUser);
		} else {
			return res.status(400).send({error: 'Username is empty'});
		}
	} catch (err) {
		return res.status(400).send({error: err.message});
	}
};

export const LoginUser = async (req, res) => {
	try {
		let body = req.body;
		let users = await axios.get();
		let user = users.map(
			user =>
				user.username === body.username &&
				user.password === body.password,
		);
		res.status(201).send(user);
	} catch (err) {
		return res.status(400).send({error: err.message});
	}
};
