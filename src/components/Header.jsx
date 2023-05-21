import { StyledHeader } from '../styles/headerStyles.js';
export default function Header({children}){
	return (
		<StyledHeader>{children}</StyledHeader>
	);
}