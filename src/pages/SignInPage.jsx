import { useForm } from 'react-hook-form';
import * as api from '../services/api/users.js';
import logo from '../assets/logo.png';
import { 
	FormArea, 
	InputEmail, 
	InputPassword, 
	Logo, 
	RedirectButton, 
	SubmitButton,
	KeeploggedArea
} from '../styles/signInPageStyles.js';
import { useContext, useEffect } from 'react';
import HeaderContext from '../context/headerContext.js';
import { useNavigate } from 'react-router-dom';
export default function SignInPage(){
	const {register, handleSubmit} = useForm();
	const {setHeader} = useContext(HeaderContext);
	const navigate = useNavigate();

	useEffect(()=> {
		setHeader(
			<>
				<RedirectButton color='#5D9040' onClick={() => navigate('/signin')}>Entrar</RedirectButton>
				<RedirectButton onClick={() => navigate('/signup')}>Cadastrar-se</RedirectButton>
			</>
		);
	}, []);
	
	async function sendForm (data) {
		const {email, password, keeplogged} = data;
		try {
			const {token} = await api.sync(email, password);
			if(keeplogged){
				localStorage.setItem('token', JSON.stringify(token));
			}
			sessionStorage.setItem('token', JSON.stringify(token));
			navigate('/profile');
		} catch (error) {
			alert(error.data.message);
		}
	}

	return (
		<>
			
			<Logo src={logo} alt='logo'/>
			<FormArea onSubmit={handleSubmit(sendForm)}>
				<InputEmail
					type='email' 
					placeholder='E-mail'
					required
					{...register('email')}
				/>
				<InputPassword 
					type='password'
					placeholder='Senha'
					required
					{...register('password')}
				/>
				<KeeploggedArea>
					<label htmlFor="keeplogged">Manter login?</label>
					<input 
						type='checkbox'
						name='keeplogged'
						{...register('keeplogged')}
					/>
				</KeeploggedArea>
				<SubmitButton>Entrar</SubmitButton>
			</FormArea>
    
    
		</>
	);
}