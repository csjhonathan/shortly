import { useForm } from 'react-hook-form';
import * as api from '../services/api/users.js';
import logo from '../assets/logo.png';
import { 
	InputName, 
	InputEmail, 
	InputPassword, 
	InputConfirmPassowd,
	FormArea, 
	SubmitButton, 
	Logo,
	RedirectButton
} from '../styles/signUpPageStyles.js';
import { useContext, useEffect } from 'react';
import HeaderContext from '../context/headerContext.js';
import { useNavigate } from 'react-router-dom';
export default function SignUpPage(){
	const {register, handleSubmit, setFocus} = useForm();
	const {setHeader} = useContext(HeaderContext);
	const navigate = useNavigate();
	useEffect(()=> {
		setHeader(
			<>
				<RedirectButton onClick={() => navigate('/signin')}>Entrar</RedirectButton>
				<RedirectButton color='#5D9040' onClick={() => navigate('/signup')}>Cadastrar-se</RedirectButton>
			</>
		);
	}, []);

	async function sendForm (data) {
	
		const {name, email, password, confirmPassword} = data;

		if(password!==confirmPassword) return setFocus('password');
    
		try {
			await api.create(name, email, password, confirmPassword);
			navigate('/signin');
		} catch (error) {
			alert(error.data.message);
		}
	}

	return (
		<>
			<Logo src={logo} alt='logo'/>
			<FormArea onSubmit={handleSubmit(sendForm)}>
				<InputName 
					type='text'
					placeholder='Nome'
					required
					{...register('name')}
				/>
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
				<InputConfirmPassowd 
					type='password'
					placeholder='Confirmar Senha'
					required
					{...register('confirmPassword')}
				/>
				<SubmitButton>Criar Conta</SubmitButton>
			</FormArea>
		</>
	);
}