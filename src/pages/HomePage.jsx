import { useContext, useEffect, useState } from 'react';
import * as userApi from '../services/api/users.js';
import * as api from '../services/api/urls.js';
import HeaderContext from '../context/headerContext.js';
import UserContext from '../context/userDataContext.js';
import { RedirectButton } from '../styles/signInPageStyles.js';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FormArea, InputLink, SubmitButton, WelcomeMessage, Content } from '../styles/homePageStyles.js';
import { useForm } from 'react-hook-form';
import Links from '../components/Links.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseLogout from '../helpers/logout.js';
export default function HomePage(){
	const {setHeader} = useContext(HeaderContext);
	const {setUserData} = useContext(UserContext);
	const [shortenedLinks, setShortenedLinks] = useState([]);
	const navigate = useNavigate();
	const [_logout, setLogout] = UseLogout(false);
	const {register, handleSubmit} = useForm();
	useEffect(() => {
		getMyData();
	},[]);
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
			
			setShortenedLinks(response.shortenedUrls);
		} catch (error) {
			alert(error.data.message);
		}
	}
	async function submitLink(data){
		const customId = 'custom-id-created';
		try {
			const loadingToast = toast.promise((api.create(data.link)), {
				pending: 'Encurtando sua url...',
				success: 'Url encurtada com sucesso!',
				error: 'Ocorreu um erro ao encurtar o sua url!'
			}, {toastId:customId});
			await loadingToast;
			getMyData();
		} catch (error) {
			alert(error.data.message);
		}
	}

	async function deleteLink(urlId){
		try {
			const loadingToast = toast.promise((api.deleteUrl(urlId)), {
				pending: 'Deletando sua url...',
				success: 'Url deletada com sucesso!',
				error: 'Houve um erro ao tentar deletar o link!',
			});
			await loadingToast;
			getMyData();
		} catch (error) {
			alert(error.data.message);
		}
	}

	return(
		<>
			<ToastContainer
				position="top-left"
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<img src={logo} alt="logo" />

			<FormArea onSubmit={handleSubmit(submitLink)}>
				<InputLink 
					required
					{...register('link')}
					placeholder = "Links que cabem no seu bolso!"
				/>
				<SubmitButton>Encurtar Link</SubmitButton>
			</FormArea>

			<Links 
				shortenedLinks = {shortenedLinks}
				deleteLink = {deleteLink}
			/>
		</>
	);
}