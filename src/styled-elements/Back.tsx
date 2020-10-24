import { Link } from "react-router-dom";
import styled from "styled-components"

const Back = styled(Link)`
    text-decoration: none;
    color: #1a2563;
    font-family: Gilroy;
    font-weight: 600;
    
    :hover {
        text-decoration: underline;
    }
`;

export default Back;