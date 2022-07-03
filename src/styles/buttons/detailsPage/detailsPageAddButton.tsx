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
  :target {
    background-color: #FFFFFF;
  }
  cursor: pointer;
`;

export default Add;
