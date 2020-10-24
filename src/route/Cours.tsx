import React from "react";
import BackButton from "../components/BackButton"
import Circle from "../components/Circle"
import Container from "../styled-elements/Container"
import{ Column} from "../styled-elements/Flex"
import { Subtitle } from "../styled-elements/Title"
import{ ColumnWCentered ,ColumnHWCentered, Row} from "../styled-elements/Flex"
import styled from "styled-components"

interface Props {}

const Cours: React.FC<Props> = props => {
return(
    <>
        <Container>
            <Row>
                <Column>  
                    <BackButton />
                </Column>
            </Row>
            <Row>
                <ColumnWCentered>
                    <Subtitle className="mt-3">Sign me on</Subtitle>
                    <p>Section de cours</p>
                </ColumnWCentered>
            </Row>
            <Row>
                <Column>
                    <Circle link="random" text="1"/>
                </Column>
            </Row>
            
        </Container>
    </>
)};
 
export default Cours;