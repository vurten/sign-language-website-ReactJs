import React from "react";
import BackButton from "../components/BackButton"
import Container from "../styled-elements/Container"
import{ Column} from "../styled-elements/Flex"
import { Subtitle } from "../styled-elements/Title"
import{ ColumnWCentered ,RowHCentered, Row} from "../styled-elements/Flex"

interface Props {}

 
const Cours: React.FC<Props> = props => {
return(
    <>
        <Container>
            <Row>
            <Column>  

            <BackButton /></Column></Row>
            <Row>
                <ColumnWCentered>
                        <Subtitle className="mt-3">Sign me on</Subtitle>
                        <p>Section de cours</p>
                </ColumnWCentered></Row>
            
        </Container>
    </>
)};
 
export default Cours;