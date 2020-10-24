import React from "react";
import{ ColumnHWCentered} from "../styled-elements/Flex"
import styled from "styled-components"
import StyledLink  from "../styled-elements/StyledLink"
 
interface Props {
    link: string;
    text: string;
}

const CircleSection = styled.div`
    border: 2px solid #dfb458;
    height: 50px;
    width: 50px;
    border-radius: 100px;

    :hover {
        background-color: #fae0af;
    }
`;

const Circle: React.FC<Props> = ({link, text})=> 
<>
<CircleSection>
    <ColumnHWCentered>
        <StyledLink to={link}>{text}</StyledLink>
    </ColumnHWCentered>
</CircleSection>
</>;

 

export default Circle;