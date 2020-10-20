import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
 
interface Props {}
 
const Title = styled.p`
    font-family: Roboto;
`;

const Index: React.FC<Props> = props => {
return(
<>
    <Title>Sign me on</Title>
    <Link to="/cours">Cours</Link>
</>
)};
 
export default Index;