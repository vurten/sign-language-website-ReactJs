import React from "react";
import BackButton from "../components/BackButton";
import Background from "../styled-elements/Background";
import Container from "../styled-elements/Container";
import { Column, ColumnWCentered, Row } from "../styled-elements/Flex";
import { Subtitle } from "../styled-elements/Title";

interface Props { }

const Quizz: React.FC<Props> = props => {
    return (
        <>
        <Background>
            <Row>
                <Column className="pl-3">  
                    <BackButton url="/" text="Retour au sommaire"/>
                </Column>
            </Row>
            <Container>
            <Row>
                <ColumnWCentered>
                    <Subtitle className="mt-3">Section d'examens</Subtitle>
                </ColumnWCentered>
            </Row>
            </Container>
        </Background>
        </>
    );
};

export default Quizz;
