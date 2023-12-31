import styled from "styled-components";
import Logo from "../../assets/logo-stok-tok.png";
import Options from "./Options";
import {useNavigate} from "react-router-dom";

export default function NavBar(){
    const navigate = useNavigate();

    return(
        <ContainerNavBar>
            <img src={Logo} alt="Logo Stok&Tok" onClick={() => navigate("/")}/>
            <Options/>
        </ContainerNavBar>
    );
}

const ContainerNavBar = styled.div`
    width: 100%;
    height: 80px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;

    img{
        width: 154px;
        height: 22px;
        margin-left: 25px;
        cursor: pointer;
    }
`;