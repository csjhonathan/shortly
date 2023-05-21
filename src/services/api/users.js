import api from './api';

export function list () {
	return api.get('/users/me');
}

export function getById (userId) {
	return api.get(`/users/${userId}`);
}

export function sync (email, password) {
	return api.post('/signin', {
		email,
		password
	});
}

export function create (name, email, password, confirmPassword) {
	return api.post('/signup', {
		name,
		email,
		password,
		confirmPassword
	});
}
