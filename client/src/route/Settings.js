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
    const [coursAlphabetList, setCoursAlphabetList] = useState([]);
    const [nouvelleVideo, setNouvelleVideo] = useState('');

    useEffect(() =>{
        Axios.get('http://localhost:3001/api/get').then((response)=>{
            setCoursAlphabetList(response.data);
        });
    }, []);

    const ajouterDansBd = () =>{
        Axios.post('http://localhost:3001/api/insert', {
            coursDescription: coursDescription,
            coursVideo: coursVideo
        });
        
        
        setCoursAlphabetList([...coursAlphabetList, 
                {coursAlphabetText: coursDescription, coursAlphabImg: coursVideo},
            ]);
        
    };

    const supprimerDansBd = (cours) =>{
        Axios.delete(`http://localhost:3001/api/delete/${cours}`);
    };

    const modifierDansBd = (cours) =>{
        Axios.put('http://localhost:3001/api/update', {
            coursDescription: cours,
            coursVideo: nouvelleVideo,
        });

        setNouvelleVideo("");
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
                <Subtitle className="mt-3">Section modification de cours</Subtitle>
            </ColumnWCentered>
            <Row>           
                <div className="form">
                    <label className="descri">Titre</label>
                    <input type="text" name="coursDescription" onChange={(e)=>{
                        setCoursDescription(e.target.value);
                    }}/>
                    <label className="vid">Video / Image</label>
                    <input type="file" name="coursVideo" onChange={(e)=>{
                        setCoursVideo(e.target.value);
                    }}/>
                    <button id="ajouter" onClick={ajouterDansBd}>Ajouter</button>
                    {coursAlphabetList.map((val)=>{
                        return (
                        <div className="db">
                           <h3> Titre du cours alphabet: {val.coursAlphabetText}</h3>
                           <p>Chemin Video: {val.coursAlphabImg}</p>
                           <button id="bt-supprimer" onClick={() => {supprimerDansBd(val.coursAlphabetText)}}>Supprimer</button>
                           <input type="file" id="modifier" onChange={(e) => {
                                setNouvelleVideo(e.target.value);
                                }}/>
                           <button id="bt-modifier" onClick={()=> {modifierDansBd(val.coursAlphabetText)}}>Modifier</button>
                           <button id="bt-logout1" onClick={()=> {window.location.href = "http://localhost:3000/";}}>Logout</button>
                        </div>
                        );
                    })
                    }
                    
                </div>        
            </Row>
            </Container>
        </Background>
        </>
    );
};

export default Settings;
