import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Arrow from "../img/arrow-icn.svg"
import{ RowHWCentered } from "../styled-elements/Flex"

interface Props {
    url: string;
    text: string;
}

const Back = styled(Link)`
text-decoration: none;
color: #1a2563;
font-weight: 600;

:hover {
    text-decoration: underline;
}
`;

const BackButton: React.FC<Props> = ({url, text, ...props}) => <><Back to={url} className= "mt-3 mb-2"><RowHWCentered><img src={Arrow}/> {text}</RowHWCentered></Back></>;

 

export default BackButton;