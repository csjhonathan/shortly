import { useContext, useEffect, useState } from 'react';
import * as userApi from '../services/api/users.js';
import * as api from '../services/api/urls.js';
import HeaderContext from '../context/headerContext.js';
import UserContext from '../context/userDataContext.js';
import { RedirectButton } from '../styles/signInPageStyles.js';
import { Content } from '../styles/homePageStyles.js';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FormArea, InputLink, SubmitButton, WelcomeMessage } from '../styles/homePageStyles.js';
import { useForm } from 'react-hook-form';
import Links from '../components/Links.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function HomePage(){
	const {setHeader} = useContext(HeaderContext);
	const {userData, setUserData} = useContext(UserContext);
	const [shortenedLinks, setShortenedLinks] = useState([]);
	const navigate = useNavigate();
	const {register, handleSubmit} = useForm();
	useEffect(()=>{
		getMyData();
	},[]);

	function logout(){
		localStorage.setItem('token', null);
		setHeader(null);
		setUserData(null);
		navigate('/');
	}

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
						<RedirectButton onClick={logout}underline = "underline" >Sair</RedirectButton>
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
				error: 'Ocorreu um erro ao carregar os dados!'
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
				error: 'Ocorreu um erro ao carregar os dados!',
			});
			await loadingToast;
			getMyData();
		} catch (error) {
			alert(error.data.message);
		}
	}

	async function openUrl(urlId){
		try {
			const response = await api.sync(urlId);
			const url = (response.split(' '))[3];
			getMyData();
			window.open(url, '_blank');
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
				openUrl = {openUrl}
			/>
		</>
	);
}