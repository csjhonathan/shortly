import { useState, useContext, useEffect } from 'react';
import HeaderContext from '../context/headerContext.js';
import UserContext from '../context/userDataContext.js';
import { useNavigate } from 'react-router-dom';

export default function UseLogout(boolean){
	const {setHeader} = useContext(HeaderContext);
	const {setUserData} = useContext(UserContext);
	const [logout, setLogout] = useState(boolean);
	const navigate = useNavigate();
	useEffect(()=>{
		if(logout){
			localStorage.setItem('token', null);
			sessionStorage.setItem('token', null);
			setHeader(null);
			setUserData(null);
			navigate('/');
		}
	},[logout]);
	
	const handleLogout = newBoolean => setLogout(newBoolean);
	return [logout, handleLogout];
}
