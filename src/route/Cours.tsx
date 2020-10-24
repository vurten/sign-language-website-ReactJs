import React from "react";
import BackButton from "../components/BackButton"
import Container from "../styled-elements/Container"
import{ Column} from "../styled-elements/Flex"

interface Props {}

 
const Cours: React.FC<Props> = props => {
return(
    <>
        <Container>
            <Column>
                <BackButton />
                <p>Section de cours</p>
            </Column>
        </Container>
    </>
)};
 
export default Cours;