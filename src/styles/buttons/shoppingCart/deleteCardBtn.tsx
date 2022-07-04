import styled from 'styled-components';

const Delete = styled.button`
  color: grey;
  width: 20px;
  border-radius: 50%;
  border: none;
  margin-bottom: -20px;
  position: absolute;
  cursor: pointer;
  @media(max-width: 800px) {
    margin-top: -12px;
    margin-left: 145px;
  }
`;

export default Delete;
