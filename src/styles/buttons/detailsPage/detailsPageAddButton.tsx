import styled from 'styled-components';

const Add = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #7EBC43;
  color: #FFFFFF;
  width: 70%;
  height: 39.36px;
  border-radius: 5px;
  border: none;
  @media(max-width: 1200px) {
    bottom: 0;
    right: 10px;
    margin-bottom: 15px;
    position: fixed;
    width: 200px;
    height: 40px;
  }
  cursor: pointer;
`;

export default Add;
