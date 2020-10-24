import React from "react";
import BackButton from "../components/BackButton"
import Circle from "../components/Circle"
import Container from "../styled-elements/Container"
import{ Column} from "../styled-elements/Flex"
import { Subtitle } from "../styled-elements/Title"
import{ ColumnWCentered , Row} from "../styled-elements/Flex"
import styled from "styled-components"

interface Props {}

const Background = styled.div`
height: 100vh;
background-color: #edfafa;
`;

const Cours: React.FC<Props> = props => {

return(
    <>
  
    <Background>
        <Row>
            <Column className="pl-3">  
                <BackButton />
            </Column>
        </Row>
        <Container>
        <Row>
            <ColumnWCentered>
                <Subtitle className="mt-3">Section de cours</Subtitle>
            </ColumnWCentered>
        </Row>
        <Row>
            <Column>
                <Circle link="random" text="1"/>
            </Column>
        </Row>
        </Container>
    </Background>
    </>
)};
 
export default Cours;