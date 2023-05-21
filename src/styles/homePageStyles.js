import styled from 'styled-components';
import {BsFillTrashFill, BsFillClipboardFill} from 'react-icons/bs';
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction:row;
  align-items: center;
  width: 100%;
`;

export const FormArea = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 150px;
  min-width: 1007px;
`;

const InputPattern = styled.input`
  width: 769px;
  height: 60px;
  background: #FFFFFF;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  padding-left: 22px;
  font-family: 'Lexend Deca', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  &::placeholder {
    color: #9C9C9C;
  }
  outline-color: lightgray;
`;

export const InputLink = styled(InputPattern)`
  /* border: 1px solid rgba(255, 0, 0, 0.25);
  box-shadow: 0px 4px 24px rgba(255, 0, 0, 0.12); */
`;

export const SubmitButton = styled.button`
  width: 182px;
  height: 60px;
  background: #5D9040;
  border-radius: 12px;
  border: none;
  font-family: 'Lexend Deca', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
  &:hover{
    cursor: pointer;
  }
`;

export const ShortedList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 60vh;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`;

export const ShortedLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #80CC74;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  color: #FFFFFF;
  min-width: 980px;
  margin-bottom: 42px;
  padding-left: 21px;
  ::-webkit-scrollbar{
    display: none;
  }
`;


export const UrlDiv = styled.div`
  width: 300px;
  overflow-y: scroll;
  height: 15px;
`;

export const ShortDiv = styled.div`
  cursor: pointer;
`;

export const ViewsDiv = styled.div`
`;
export const DeleteUrlButton = styled.button`
  width: 130px;
  height: 60px;
  background: #FFFFFF;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 0px 12px 12px 0px;
  border: none;
  cursor: pointer;
`;
export const WelcomeMessage = styled.p`
  color: #5D9040;
`;

export const TrashIcon = styled(BsFillTrashFill)`
  color: #EA4F4F;
`;

export const ClipBoard = styled(BsFillClipboardFill)`

`;