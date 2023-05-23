import styled from 'styled-components';


export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: ${({height}) => height};
`;


export const List = styled.ul`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 1017px;
  background: #FFFFFF;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
  padding-left:40px ;
  padding-bottom: 30px;
  margin-top: 57px;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    
  }
`;

export const LinkItem = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #000000;
  margin-top: 19px;
`;

export const RankingLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
`;

export const GreaterMessage = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
`;