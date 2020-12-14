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

    const [userMailCheck, setUserMailCheck] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [type, setType] = useState('');

    const [loginMessage, setLoginMessage] = useState('');

    const register = ()=>{
        Axios.post('http://localhost:3001/register', {mail: userMail, password: passwordReg, profile: profileType,
        }).then((response)=> {
            console.log(response);
        });
    };

    const login = ()=>{
        Axios.post('http://localhost:3001/login', {mail: userMailCheck, password: passwordCheck,
            profile: type}).then((response)=> {

            if(response.data.message){
                setLoginMessage(response.data.message);
            }else {
                if(type == "professeur"){
                    window.location.href = "http://localhost:3000/settings";
                }else{
                    window.location.href = "http://localhost:3000/";
                }
            }
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
                    <input type="text" onChange={(e)=>{
                        setUserMailCheck(e.target.value);
                        }}/><br /><br />
                    <label>mot de passe </label>
                    <input type="text" onChange={(e)=>{
                        setPasswordCheck(e.target.value);
                        }}/><br /><br />
                    <label>Type du profil </label>
                    <input type="text" onChange={(e)=>{
                        setType(e.target.value);
                        }}/>
                    <button id="but-log" onClick={login}> Login </button>
                </div> 
                <div className="message-err">
                    <h1>{loginMessage}</h1>  
                </div>       
                      
            </Row>
            </Container>
        </Background>
        </>
    );
};

export default Connexion;