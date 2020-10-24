import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Arrow from "../img/arrow-icn.svg"
import{ RowHCentered } from "../styled-elements/Flex"

interface Props {}

const Back = styled(Link)`
text-decoration: none;
color: #1a2563;
font-family: Gilroy;
font-weight: 600;

:hover {
    text-decoration: underline;
}
`;

const BackButton: React.FC<Props> = props => <><Back to="/" className= "mt-3 mb-2"><RowHCentered><img src={Arrow}/> Retour au sommaire</RowHCentered></Back></>;

 

export default BackButton;