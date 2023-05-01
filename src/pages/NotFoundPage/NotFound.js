import styled from "styled-components";
import bgNotFound from "../../assets/bgNotFound.jpg";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";

export default function NotFound(){
    const navigate = useNavigate();

    return(
        <NotFoundContainer>
            <p>404</p>
            <p>NOT FOUND</p>
            <NotFoundButton variant="contained" style={{backgroundColor: "#30775b"}} onClick={() => navigate("/")}>
                Voltar para Home
            </NotFoundButton>
        </NotFoundContainer>
    );
}

const NotFoundContainer = styled.div`
  background: url(${bgNotFound}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >p{
    width: 100%;
    color: white;
    font-size: 80px;
    font-weight: 700;
    text-align: center;
  }
`;

const NotFoundButton = styled(Button)`
    width: 200px;
    height: 40px;
`;