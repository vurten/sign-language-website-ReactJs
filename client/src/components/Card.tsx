import React from "react";
import styled from "styled-components"
import{ ColumnHWCentered} from "../styled-elements/Flex"
import { Link } from "react-router-dom";
import StyledLink  from "../styled-elements/StyledLink"

interface Props {
    className?: string;
    img: string;
    link: string;
    text: string;
}

const CardSection = styled.div`
    border: 2px solid #dfb458;
    height: 200px;
    width: 200px;
    border-radius: 12px;
    background-color:white;
    color: #1a2563;

    :hover {
        background-color: #fae0af;
    }
`;

const Card: React.FC<Props> = ({className, img, link, text}) => 
<>
<StyledLink to={link} className={className}>
    <CardSection>
        <ColumnHWCentered>
            <img src={img} height={90}/>
            <p>{text}</p>
        </ColumnHWCentered>
    </CardSection>
</StyledLink>
</>;

 

export default Card;