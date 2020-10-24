import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import Container from "../styled-elements/Container"
import{ ColumnWCentered, ColumnHWCentered} from "../styled-elements/Flex"
import '../index.css';
import Cours from "../img/cours-icn.svg"
import Quizz from "../img/quizz-icn.svg"
 
interface Props {}
 
const Title = styled.p`
    font-family: Gilroy;
    font-size: 60px;
    color: #1a2563;
    font-weight: 600;
`;

const Row = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  justify-content: flex-start;
  min-width: 0;
`;

const Card = styled.div`
    border: 2px solid #dfb458;
    height: 200px;
    width: 200px;
    border-radius: 12px;

    :hover {
        background-color: #fae0af;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #1a2563;
    font-family: Gilroy;
    font-weight: 600;
`;

const Index: React.FC<Props> = props => {
return(
<>
    <Container>
        <ColumnWCentered>
            <Title>Sign me on</Title>
            <Row>
                <StyledLink to="/cours">
                    <Card>
                        <ColumnHWCentered>
                            <img src={Cours} height={90}/>
                            <p>Cours</p>
                        </ColumnHWCentered>
                    </Card>
                </StyledLink>
                <Card className="ml-2">
                    <StyledLink to="/quizz">
                        <ColumnHWCentered>
                            <img src={Quizz} height={90}/>
                            <p>Quizz</p>
                        </ColumnHWCentered>
                    </StyledLink>
                </Card>
            </Row>
    </ColumnWCentered>
    </Container>
</>
)};
 
export default Index;