import { useEffect, useState } from 'react';
import * as api from '../services/api/urls.js';
import { useParams } from 'react-router-dom';
export default function RedirectPage(){
	const [url, setUrl] = useState();
	const {shortUrl} = useParams();
	const [timer, setTimer] = useState(5);
	useEffect(()=>{
		getUrl(shortUrl);
	},[]);

	useEffect(() => {
		if (timer > 0) {
			const intervalId = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1);
			}, 1000);

			return () => {
				clearInterval(intervalId);
			};
		}

		if(!timer) window.location.href = url;
	}, [timer]);
	async function getUrl(shortUrl){
		try {
			const response = await api.sync(shortUrl);
			const url = (response.split(' '))[3];
			setUrl(url);
		} catch (error) {
			alert(error.data);
		}
	}
	return(
		<div>Você será redirecionado para <a href={url}>{url}</a> em...{timer}</div>
	);
}