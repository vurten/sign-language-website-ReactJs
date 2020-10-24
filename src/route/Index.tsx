import React from "react";
import styled from "styled-components"
import { Title } from "../styled-elements/Title"
import Container from "../styled-elements/Container"
import Card from "../components/Card"
import{ ColumnWCentered, ColumnHWCentered} from "../styled-elements/Flex"
import '../index.css';
import Cours from "../img/cours-icn.svg"
import Quizz from "../img/quizz-icn.svg"
 
interface Props {}

const Row = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  justify-content: flex-start;
  min-width: 0;
`;

const Index: React.FC<Props> = props => {
return(
<>
    <Container>
        <ColumnWCentered>
            <Title>Sign me on</Title>
            <Row>
                <Card img={Cours} link="/cours" text="Cours"/>
                <Card img={Quizz} link="/quizz" text="Quizz" className="ml-2"/>
            </Row>
    </ColumnWCentered>
    </Container>
</>
)};
 
export default Index;