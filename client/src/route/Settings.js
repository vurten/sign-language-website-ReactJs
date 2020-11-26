import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Background from "../styled-elements/Background";
import Container from "../styled-elements/Container";
import { Column, ColumnWCentered, Row } from "../styled-elements/Flex";
import { Subtitle } from "../styled-elements/Title";
import '../App.css';
import Axios from 'axios';


const Settings = props => {

    const [coursDescription, setCoursDescription] = useState('');
    const [coursVideo, setCoursVideo] = useState('');

    const enregistrerBd = () =>{
        Axios.post('http://localhost:3001/api/insert', {
            coursDescription: coursDescription, 
            coursVideo: coursVideo
        }).then(()=> {
            alert('Successful insert');
        }

        )
    };

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
                <Subtitle className="mt-3">Section Settings</Subtitle>
            </ColumnWCentered>
            <Row>           
                <div className="form">
                    <label className="descri">Description</label>
                    <input type="text" name="coursDescription" onChange={(e)=>{
                        setCoursDescription(e.target.value);
                    }}/>
                    <label className="vid">Video / Image</label>
                    <input type="text" name="coursVideo" onChange={(e)=>{
                        setCoursVideo(e.target.value);
                    }}/>
                    <button onClick={enregistrerBd}>Enregistrer</button>
                </div>        
            </Row>
            </Container>
        </Background>
        </>
    );
};

export default Settings;
