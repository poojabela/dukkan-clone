import styled from "styled-components";

const Anchor = styled.a`
color: #1a181e
text-decoration: none;
font-size: 17px;
font-weight: 400;
line-height: 26px
letter-spacing: 0.02;
&:hover {
  text-decoration: ${props => props.primary ? "underline" : "none"};
}
`

export default Anchor;