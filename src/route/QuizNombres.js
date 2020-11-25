import React, {useState} from "react";
import BackButton from "../components/BackButton";
import Background from "../styled-elements/Background";
import Container from "../styled-elements/Container";
import { Column, ColumnWCentered, Row } from "../styled-elements/Flex";
import { Subtitle } from "../styled-elements/Title";
import DIX from "../img/dix.gif";
import Huit from "../img/huit.jpg";
import SEPT from "../img/sept.jpg";
import NEUF from "../img/neuf.jpg";


 export default function QuizNombres() {

    const questionQuizz = [
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
            questionText: 'Quel est ce chiffre ? ',
            questionImg: Huit,
			choixDeReponse: [
				{ reponsesText: 'Huit', bonneReponse: true },
				{ reponsesText: 'Trois', bonneReponse: false },
				{ reponsesText: 'Six', bonneReponse: false },
				{ reponsesText: 'Dix', bonneReponse: false },
			],
		},
		{
            questionText: 'Quel est ce chiffre ? ',
            questionImg: SEPT,
			choixDeReponse: [
				{ reponsesText: 'Trois', bonneReponse: false },
				{ reponsesText: 'Six', bonneReponse: false },
				{ reponsesText: 'Cinq', bonneReponse: false },
				{ reponsesText: 'Sept', bonneReponse: true },
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
                    <BackButton url="/coursChiffres" text="Retour"/>
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

