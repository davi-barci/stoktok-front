import styled from "styled-components";
import { useNavigate, Link  } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import {BsFillBagCheckFill} from "react-icons/bs";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";

export default function Success() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user === null) navigate("/")

    axios
    .post(`${process.env.REACT_APP_API_URL}/confirmemail`, {email: user.email, name: user.name})
    .then((res) => {
        console.log("e-mail enviado");
    })
    .catch((err) => {
      console.log(err);
    });
  });

  return (
    <MainContainer>
      <div>
        <Link to="/">Home</Link>
        <AiOutlineArrowRight />
        <p>Carrinho</p>
        <AiOutlineArrowRight />
        <p>Dados de Entrega/Pagamento</p>
        <AiOutlineArrowRight />
        <p>Confirmação</p>
      </div>

      <div>
        <BsFillBagCheckFill/>
        <p>SUA PEDIDO FOI CONCLUÍDO COM SUCESSO</p>
        <p>Obrigado pelo seu pedido! Ele está sendo processado e em breve será confirmado. <br/> Assim que isso ocorrer, enviaremos um e-mail de confirmação para o e-mail cadastrado.</p>
        <HomeButton style={{backgroundColor: "#30775b", color:"white", marginTop: "30px"}} onClick={() => navigate("/")}>VOLTAR PARA A HOME</HomeButton>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;


  >div:nth-of-type(1){
    width: 100%;
    height: 36px;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    >p{
        height: 100%;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        margin-left: 10px;
        color: #30775B;
        display: flex;
        align-items: center;
        cursor: default;
    }

    >p:nth-of-type(3){
      font-weight: 700;
      font-size: 18px;
    }

    >a {
      height: 100%;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      margin-left: 10px;
      color: #30775b;
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    >svg {
      margin-left: 10px;
      color: #30775b;
    }
  }

  >div:nth-of-type(2){
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >svg{
      font-size: 100px;
      color: #30775b;
    }

    >p:nth-of-type(1){
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      margin-top: 50px;
      color: #30775b;
    }

    >p:nth-of-type(2){
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      margin-top: 20px;
      color: grey;
      text-align: center;
    }
  }

`;

const HomeButton = styled(Button)`
    width: 300px;
    height: 40px;
`;
