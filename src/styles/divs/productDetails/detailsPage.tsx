import styled from 'styled-components';

const DetailsPage = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #DEDEDE;
  font-family: 'Lato';
  align-items: center;
  width: 100%;
  margin-top: 100px;
  @media(max-width: 1200px) {
    flex-direction: column;
    /* align-content: stretch; */
  }
`;

export default DetailsPage;
