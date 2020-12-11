import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Background from "../styled-elements/Background";
import Container from "../styled-elements/Container";
import { Column, ColumnWCentered, Row } from "../styled-elements/Flex";
import { Subtitle } from "../styled-elements/Title";
import '../App.css';
import Axios from 'axios';



const Connexion = props => {

    const [userMail, setUserMail] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [profileType, setProfileType] = useState('');

    const register = ()=>{
        Axios.post('http://localhost:3001/register', {mail: userMail, password: passwordReg, profile: profileType,
        }).then((response)=> {
            console.log(response);
        });
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
                <Subtitle className="mt-3">Section Login</Subtitle>
            </ColumnWCentered>
            <Row> 

                <div className="registration">
                    <h1 id="creation">Créer un compte</h1>
                    <label>adresse email </label>
                    <input type="text" onChange={(e)=>{
                        setUserMail(e.target.value);
                        }}/><br /><br />
                    <label>mot de passe </label>
                    <input type="text" onChange={(e)=>{
                        setPasswordReg(e.target.value);
                        }}/><br /><br />
                    <label>Type du profil </label>
                    <input type="text" onChange={(e)=>{
                        setProfileType(e.target.value);
                        }}/>
                    <button id="but-reg" onClick={register}> Register </button>
                </div>  

                <div className="login">
                    <br /><br /><br /><br /><br /><h1 id="connecter">Se connecter</h1>
                    <label>adresse email    </label>
                    <input type="text"/><br /><br />
                    <label>mot de passe </label>
                    <input type="text"/>
                    <button id="but-log"> Login </button>
                </div>          
                      
            </Row>
            </Container>
        </Background>
        </>
    );
};

export default Connexion;
