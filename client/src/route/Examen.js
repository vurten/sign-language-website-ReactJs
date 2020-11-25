import React, {useState} from "react";
import BackButton from "../components/BackButton";
import Background from "../styled-elements/Background";
import Container from "../styled-elements/Container";
import { Column, ColumnWCentered, Row } from "../styled-elements/Flex";
import { Subtitle } from "../styled-elements/Title";
import CHAT from "../img/chat.gif";
import CROCODILE from "../img/croco.gif";
import OURS from "../img/ours.gif";
import GIRAFFE from "../img/giraffe.gif";
import Z from "../img/Z.jpeg";
import DIX from "../img/dix.gif";
import NEUF from "../img/neuf.jpg";


 export default function QuizAnimaux() {

    const questionQuizz = [
		{
            questionText: 'Quel est cet animal ? ',
            questionImg: CHAT,
			choixDeReponse: [
				{ reponsesText: 'Chien', bonneReponse: false },
				{ reponsesText: 'Chat', bonneReponse: true },
				{ reponsesText: 'Mouton', bonneReponse: false },
				{ reponsesText: 'Oiseau', bonneReponse: false },
			],
        },
        {
            questionText: 'Quelle est cette lettre ? ',
            questionImg: Z,
			choixDeReponse: [
				{ reponsesText: 'A', bonneReponse: false },
				{ reponsesText: 'Z', bonneReponse: true },
				{ reponsesText: 'T', bonneReponse: false },
				{ reponsesText: 'U', bonneReponse: false },
			],
        },
        {
            questionText: 'Quel est ce chiffre ? ',
            questionImg: DIX,
			choixDeReponse: [
				{ reponsesText: 'Un', bonneReponse: false },
				{ reponsesText: 'Dix', bonneReponse: true },
				{ reponsesText: 'Deux', bonneReponse: false },
				{ reponsesText: 'Neuf', bonneReponse: false },
			],
		},
		{
            questionText: 'Quel est cet animal ? ',
            questionImg: GIRAFFE,
			choixDeReponse: [
				{ reponsesText: 'Vache', bonneReponse: false },
				{ reponsesText: 'Ours', bonneReponse: false },
				{ reponsesText: 'Giraffe', bonneReponse: true },
				{ reponsesText: 'Lion', bonneReponse: false },
			],
		},
		{
            questionText: 'Quel est cet animal ? ',
            questionImg: CROCODILE,
			choixDeReponse: [
				{ reponsesText: 'Crocodile', bonneReponse: true },
				{ reponsesText: 'Requin', bonneReponse: false },
				{ reponsesText: 'Oiseau', bonneReponse: false },
				{ reponsesText: 'Ours', bonneReponse: false },
			],
        },
        {
            questionText: 'Quel est ce chiffre ? ',
            questionImg: NEUF,
			choixDeReponse: [
				{ reponsesText: 'Sept', bonneReponse: false },
				{ reponsesText: 'Dix', bonneReponse: false },
				{ reponsesText: 'Neuf', bonneReponse: true },
				{ reponsesText: 'Huit', bonneReponse: false },
			],
		},
		{
            questionText: 'Quel est cet animal ? ',
            questionImg: OURS,
			choixDeReponse: [
				{ reponsesText: 'Lion', bonneReponse: false },
				{ reponsesText: 'Vache', bonneReponse: false },
				{ reponsesText: 'Oiseau', bonneReponse: false },
				{ reponsesText: 'Ours', bonneReponse: true },
			],
		},
	];

	const [reponseActuelle, setreponseActuelle] = useState(0);
	const [afficherResultat, setafficherResultat] = useState(false);
	const [resultat, setresultat] = useState(0);

	const ajouterScore = (bonneReponse) => {
		if (bonneReponse) {
			setresultat(resultat + 1);
		}

		const prochaineQuestion = reponseActuelle + 1;
		if (prochaineQuestion < questionQuizz.length) {
			setreponseActuelle(prochaineQuestion);
		} else {
			setafficherResultat(true);
		}
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
            <Row>
                <ColumnWCentered>
                    <Subtitle className="mt-3">Section de Quizz</Subtitle>
                </ColumnWCentered>
            </Row>
            </Container>
            <div className='bloc'>
			{afficherResultat ? (
				<div className='resultat'>
					Votre note est de {resultat} sur {questionQuizz.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {reponseActuelle + 1}</span>/{questionQuizz.length}
						</div>
						<div className='question-text'>{questionQuizz[reponseActuelle].questionText}
                            <div className='ques-img'>
                                <img src={questionQuizz[reponseActuelle].questionImg}/>
                            </div>
                        </div>
                        
					</div>
					<div className='reponse-section'>
						{questionQuizz[reponseActuelle].choixDeReponse.map((lesReponses) => (
							<button onClick={() => ajouterScore(lesReponses.bonneReponse)}>{lesReponses.reponsesText}</button>
						))}
					</div>
                    
				</>
			)}
		</div>
        </Background>
        </>
    );
};