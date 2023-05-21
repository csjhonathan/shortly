import { useEffect, useState } from 'react';
import * as api from '../services/api/ranking.js';
import { useContext } from 'react';
import HeaderContext from '../context/headerContext.js';
import { RedirectButton } from '../styles/signInPageStyles.js';
import logo from '../assets/logo.png';
import trofeu from '../assets/troféu.png';
import LinksList from '../components/LinksList.jsx';
import { RankingLogo, GreaterMessage,HomePageContainer } from '../styles/rankingPageStyles.js';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/userDataContext.js';
export default function RankingPage(){
	const {setHeader} = useContext(HeaderContext);
	const {userData} = useContext(UserContext);
	const [links, setLinks] = useState([]);
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
		getRank();
	},[userData]);

	async function getRank(){
		try {
			const response = await api.list();
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