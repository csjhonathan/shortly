/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ResetStyle from './styles/resetSyles.js';
import GlobalStyle from './styles/globalStyles.js';
import Header from './components/Header.jsx';
import Container from './components/Container.jsx';
import HeaderContext from './context/headerContext.js';
import UserContext from './context/userDataContext.js';
import { useState } from 'react';
import HomePage from './pages/HomePage.jsx';
import RankingPage from './pages/RankingPage.jsx';
export default function App() {
	const [header, setHeader] = useState(null);
	const [userData, setUserData] = useState(null);

	return (
		<HeaderContext.Provider value = {{header, setHeader}}>
			<UserContext.Provider value = {{userData, setUserData}}>
				<BrowserRouter>
					<ResetStyle />
					<GlobalStyle />
					<Container>
						<Header >
							{header}
						</Header>
						<Routes>
							<Route path='/signup' element={<SignUpPage />} />
							<Route path='/signin' element={<SignInPage />} />
							<Route path='/' element={<RankingPage />} />
							<Route path='/profile' element={<HomePage />} />
						</Routes>
					</Container>
				</BrowserRouter>
			</UserContext.Provider>
		</HeaderContext.Provider>
	);
}