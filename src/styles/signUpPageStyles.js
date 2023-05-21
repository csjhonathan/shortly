import styled from 'styled-components';

export const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 420px;
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

export const InputName = styled(InputPattern)`
  /* border: 1px solid rgba(255, 0, 0, 0.25);
  box-shadow: 0px 4px 24px rgba(255, 0, 0, 0.12); */
`;

export const InputEmail = styled(InputPattern)`
  /* border: 1px solid rgba(255, 0, 0, 0.25);
  box-shadow: 0px 4px 24px rgba(255, 0, 0, 0.12); */
`;

export const InputPassword= styled(InputPattern)`
  /* border: 1px solid rgba(255, 0, 0, 0.25);
  box-shadow: 0px 4px 24px rgba(255, 0, 0, 0.12); */
`;

export const InputConfirmPassowd = styled(InputPattern)`
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

export const Logo = styled.img`
`;

export const RedirectButton = styled.button`
  color: ${({color}) => color ? color : '#9C9C9C' };
`;