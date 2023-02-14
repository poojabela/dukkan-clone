import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? "#146eb4" : "#fff"};
  border: ${props => props.primary ? "none" : "#1a181e"};
  color: ${props => props.primary ? "#fff" : "#1a181e"};
  cursor: pointer;
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  line-height: 26px;
  font-size: 18px;
  font-weight: ${props => props.primary ? "600" : "500"};
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-out;
  outline: none;

  &:hover {
    background-color: ${props => props.primary ? "#0c538b" : "none"};
    position: relative;
    bottom: 1px;
  }

  @media (max-width: 700px){
    padding: 10px;
    font-size: 14px;
  }
`;

export default Button;

