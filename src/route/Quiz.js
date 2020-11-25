import React, {useState} from "react";
import BackButton from "../components/BackButton";
import Background from "../styled-elements/Background";
import Container from "../styled-elements/Container";
import { Column, ColumnWCentered, Row } from "../styled-elements/Flex";
import { Subtitle } from "../styled-elements/Title";
import Z from "../img/Z.jpeg";
import K from "../img/K.jpeg";
import L from "../img/L.jpeg";
import B from "../img/B.jpeg";


 export default function Quiz() {

    const questionQuizz = [
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
            questionText: 'Quelle est cette lettre ? ',
            questionImg: B,
			choixDeReponse: [
				{ reponsesText: 'A', bonneReponse: false },
				{ reponsesText: 'D', bonneReponse: false },
				{ reponsesText: 'B', bonneReponse: true },
				{ reponsesText: 'W', bonneReponse: false },
			],
		},
		{
            questionText: 'Quelle est cette lettre ? ',
            questionImg: K,
			choixDeReponse: [
				{ reponsesText: 'K', bonneReponse: true },
				{ reponsesText: 'R', bonneReponse: false },
				{ reponsesText: 'X', bonneReponse: false },
				{ reponsesText: 'O', bonneReponse: false },
			],
		},
		{
            questionText: 'Quelle est cette lettre ? ',
            questionImg: L,
			choixDeReponse: [
				{ reponsesText: 'C', bonneReponse: false },
				{ reponsesText: 'H', bonneReponse: false },
				{ reponsesText: 'P', bonneReponse: false },
				{ reponsesText: 'L', bonneReponse: true },
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
				<BackButton url="/cours" text="Retour"/>
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

