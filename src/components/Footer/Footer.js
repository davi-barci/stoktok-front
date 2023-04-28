import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import Services from "./Services";
import Menu from "./Menu";

export default function Footer(){
    return(
        <ContainerFooter>
            <SocialMedia/>
            <Services/>
            <Menu/>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    width: 100%;
    height: 560px;
`;