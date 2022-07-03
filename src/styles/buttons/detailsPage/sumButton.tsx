import styled from 'styled-components';

const Sum = styled.button`
  margin: 12px;
  width: 24px;
  height: 24px;
  background-color: #7EBC43;
  border: none;
  font-size: larger;
  font-weight: bold;
  color: #FFFFFF;
  @media(max-width: 1200px) {
    display: none;
  }
  cursor: pointer;
`;

export default Sum;
