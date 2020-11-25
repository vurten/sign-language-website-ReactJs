import React from "react";
import BackButton from "../components/BackButton";
import Background from "../styled-elements/Background";
import Container from "../styled-elements/Container";
import { Column, ColumnWCentered, Row } from "../styled-elements/Flex";
import { Subtitle } from "../styled-elements/Title";
import VideoAlphabet from "../videos/videoAlphabet.mp4";



const CoursAlphabet = props => {
    return (
        
        <Background>
            <Row>
                <Column className="pl-3">
                <BackButton url="/cours" text="Retour"/>
                </Column>
            </Row>
            <Container>
            <ColumnWCentered>
                <Subtitle className="mt-3">Cours sur l'alphabet</Subtitle>
            </ColumnWCentered>
            <Row> 
                <div className="video-alphabet">
                    <video src={VideoAlphabet} controls="controls" />
                </div>   
                <div className="lien">   
                <a href={"/quiz"}>Passer le Quizz</a>  
                </div>    
            </Row>
            </Container>
        </Background>
        
    );
};

export default CoursAlphabet;
