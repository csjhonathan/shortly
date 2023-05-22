import { useEffect, useState } from 'react';
import * as api from '../services/api/ranking.js';
import * as userApi from '../services/api/users.js';
import { useContext } from 'react';
import HeaderContext from '../context/headerContext.js';
import { RedirectButton } from '../styles/signInPageStyles.js';
import logo from '../assets/logo.png';
import trofeu from '../assets/troféu.png';
import LinksList from '../components/LinksList.jsx';
import { RankingLogo, GreaterMessage,HomePageContainer } from '../styles/rankingPageStyles.js';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/userDataContext.js';
import { Content, WelcomeMessage } from '../styles/homePageStyles.js';
import UseLogout from '../helpers/logout.js';
export default function RankingPage(){
	const {setHeader} = useContext(HeaderContext);
	const {userData, setUserData} = useContext(UserContext);
	const [links, setLinks] = useState([]);
	const [_logout, setLogout] = UseLogout(false);
	const navigate = useNavigate();
	useEffect(()=> {
		if(!userData) {
			setHeader(
				<>
					<RedirectButton color='#5D9040' onClick={() => navigate('/signin')}>Entrar</RedirectButton>
					<RedirectButton onClick={() => navigate('/signup')}>Cadastrar-se</RedirectButton>
				</>
			);
		}
	},[userData]);

	useEffect(()=> {
		getRank();
		const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'));
		if(token){
			getMyData();
		}
	} ,[]);

	async function getMyData(){
		try {
			const response = await userApi.list();
			setUserData(response);
			setHeader(
				<Content>
					<WelcomeMessage>Seja bem-vindo(a), {`${response.name}`}</WelcomeMessage>
					<div>
						<RedirectButton onClick={() => navigate('/profile')}>Home</RedirectButton>
						<RedirectButton onClick={() => navigate('/')}>Ranking</RedirectButton>
						<RedirectButton onClick={()=> setLogout(true)} underline = "underline" >Sair</RedirectButton>
					</div>
				</Content>
			);
		} catch (error) {
			alert(error.data.message);
		}
	}

	async function getRank(){
		try {
			const response = await api.list();
			const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'));
			if(token){
				setUserData({...userData, token});
			}
			setLinks(response);
		} catch (error) {
			alert(error.data.message);
		}
	}

	return (
		<HomePageContainer height = {!userData ? '80vh' : '60vh'}>
			<img src={logo} alt='logo'/>
			<RankingLogo>
				<img src={trofeu}/>
				Ranking
			</RankingLogo>
			<LinksList links = {links}/>
			{!userData && <GreaterMessage>Crie sua conta para usar nosso serviço!</GreaterMessage>}
		</HomePageContainer>
	);
}