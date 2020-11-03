import React , { useEffect, useState } from "react";
import BackButton from "../components/BackButton"
import Circle from "../components/Circle"
import Container from "../styled-elements/Container"
import InvisibleLink from "../styled-elements/InvisibleLink"
import{ Column} from "../styled-elements/Flex"
import { Subtitle } from "../styled-elements/Title"
import{ ColumnWCentered , Row} from "../styled-elements/Flex"
import styled from "styled-components"
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../utilities/capitalize";
import { Course } from "../types/types";
import Background from "../styled-elements/Background";

interface Props {}

const Cours: React.FC<Props> = props => {

const id = window.location.pathname.split("/")[2]

const [cours, setCours] = useState<Course>()

useEffect(()=> {
        fetch(`http://localhost:8080/course/${id}`).then(res => res.json()).then( res => setCours(res))
}, [])

console.log(cours)

return(
    <>
  
    <Background>
        <Row>
            <Column className="pl-3">  
                <BackButton url="/courses" text="Retour aux cours"/>
            </Column>
        </Row>
        <Container>
        <Row>
            <ColumnWCentered>
                <Subtitle className="mt-3">{capitalizeFirstLetter(cours?.title ? cours?.title : "")}</Subtitle>
            </ColumnWCentered>
        </Row>
        </Container>
    </Background>
    </>
)};
 
export default Cours;