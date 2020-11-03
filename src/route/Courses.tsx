import React , { useEffect, useState } from "react";
import BackButton from "../components/BackButton"
import Circle from "../components/Circle"
import Container from "../styled-elements/Container"
import InvisibleLink from "../styled-elements/InvisibleLink"
import{ Column} from "../styled-elements/Flex"
import { Subtitle } from "../styled-elements/Title"
import{ ColumnWCentered , Row} from "../styled-elements/Flex"
import styled from "styled-components"
import { Course } from "../types/types";

interface Props {}

const Background = styled.div`
height: 100vh;
background-color: #edfafa;
`;

const Cours: React.FC<Props> = props => {


const [courses, setCourses] = useState<Course[]>([])

useEffect(()=> {
        fetch("http://localhost:8080/courses").then(res => res.json()).then( res => setCourses(res))
}, [])

return(
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
                <Subtitle className="mt-3">Section de cours</Subtitle>
            </ColumnWCentered>
        </Row>
        <Row>
            {courses.map( (course, index) => (

            <Column key={index}>
                <InvisibleLink to={`/course/${course.number}`}>
                    <Circle link="random" text={course.number}/>
                </InvisibleLink>
            </Column>
            ))}
        </Row>
        </Container>
    </Background>
    </>
)};
 
export default Cours;