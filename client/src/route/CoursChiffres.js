import React from "react";
import BackButton from "../components/BackButton";
import Background from "../styled-elements/Background";
import Container from "../styled-elements/Container";
import { Column, ColumnWCentered, Row } from "../styled-elements/Flex";
import { Subtitle } from "../styled-elements/Title";
import VideoChiffres from "../videos/videoChiffres.mp4";


const CoursChiffres = props => {
    return (
        
        <Background>
            <Row>
                <Column className="pl-3">
                    <BackButton url="/cours" text="Retour"/>
                </Column>
            </Row>
            <Container>
            <ColumnWCentered>
                <Subtitle className="mt-3">Cours sur les nombres</Subtitle>
            </ColumnWCentered>
            <Row> 
                <div className="video-chiffres">
                    <video src={VideoChiffres} controls="controls" />
                </div>                  
                <div className="lien">   
                <a href={"/quizChiffres"}>Passer le Quizz</a>  
                </div>
            </Row>
            </Container>
        </Background>
        
    );
};

export default CoursChiffres;
