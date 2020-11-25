import React from "react";
import BackButton from "../components/BackButton";
import Background from "../styled-elements/Background";
import Container from "../styled-elements/Container";
import { Column, ColumnWCentered, Row } from "../styled-elements/Flex";
import { Subtitle } from "../styled-elements/Title";
import Card from "../components/Card";
import Alphabet from "../img/alphabet.jpg";
import Numbers from "../img/numbers.png";
import Animals from "../img/animals.jpg";


const Cours = props => {
    return (
        <>
        <Background>
            <Row>
                <Column className="pl-3">
                    <BackButton url="/" text="Retour au sommaire"/>
                </Column>
            </Row>
            <Container>
            <ColumnWCentered>
                <Subtitle className="mt-3">Section Cours</Subtitle>
            </ColumnWCentered>
            <Row>           
                <Card img={Alphabet} link="/coursAlphabet" text="Alphabet" className="ml-2"/>
                <Card img={Numbers} link="/coursChiffres" text="Nombres" className="ml-2"/> 
                <Card img={Animals} link="/coursAnimaux" text="Animaux" className="ml-2"/>         
            </Row>
            </Container>
        </Background>
        </>
    );
};

export default Cours;
