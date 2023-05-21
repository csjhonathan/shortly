import api from './api';

export function create (url) {
	return api.post('/urls/shorten', {
		url
	});
}

export function getById (urlId) {
	return api.get(`/urls/${urlId}`);
}

export function sync (shortUrl) {
	return api.get(`/urls/open/${shortUrl}`);
}

export function deleteUrl (urlId) {
	return api.delete(`/urls/${urlId}`);
}
