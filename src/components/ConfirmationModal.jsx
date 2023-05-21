import styled from 'styled-components';
import{AiFillCheckCircle} from 'react-icons/ai';
import {ImCross} from 'react-icons/im';
export default function ConfirmationModal({ message, onConfirm, onCancel }){
	return (
		<Modal>
			<Message>{message}</Message>
			<AiFillCheckCircle 
				size={40} 
				color='green'
				style={{marginRight: 15}}
				onClick={onConfirm}/>
			<ImCross size={30} color="red" onClick={onCancel}/>
		</Modal>
	);
}

const Modal = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  align-items: center;
`;

const Message = styled.p`
  font-family: 'Lexend Deca', sans-serif;
`;
