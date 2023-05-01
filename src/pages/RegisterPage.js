import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from '@mui/material/Button';
import bgLogin from "../assets/bglogin.png";

export default function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isRegisterFormDisabled, setRegisterFormDisabled] = useState(false);
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  function handleForm(e) {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setRegisterFormDisabled(true);
    axios
      .post(`${API}/register`, registerForm)
      .then((_res) => navigate("/login"))
      .catch((err) => {
        console.log(err);
        alert("Tente outra vez...");
        setRegisterFormDisabled(false);
      });
  }

  return (
    <MainContainer>
      <div>
        <p>CADASTRAR</p>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input
            value={registerForm.name}
            onChange={handleForm}
            disabled={isRegisterFormDisabled}
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            value={registerForm.email}
            onChange={handleForm}
            disabled={isRegisterFormDisabled}
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
          <label htmlFor="password">Senha:</label>
          <input
            value={registerForm.password}
            onChange={handleForm}
            disabled={isRegisterFormDisabled}
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            required
          />
          <RegisterButton type="submit" disabled={isRegisterFormDisabled} style={{backgroundColor: "#30775b", color:"white", marginBottom: "25px"}}>
            {isRegisterFormDisabled ? "..." : "Cadastrar"}
          </RegisterButton>
        </StyledForm>
        <div>
          <Link to={"/login"}>Já tem uma conta? Faça login!</Link>
        </div>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: url(${bgLogin}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  >div{
    width: 400px;
    height: 420px;
    background: #FFFFFF;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

    >p{
      width: 100%;
      text-align: center;
      font-weight: 700;
      font-size: 28px;
      color: rgb(51, 51, 51);
      text-align: center;
      margin-bottom: 15px;
      margin-top: 20px;
    }

    >div{
      width: 100%;
      display: flex;
      justify-content: center;

      >a{
        color:#30775b;
      }
    }
  }
`;

const StyledForm = styled.form`
   display: flex;
  flex-direction: column;
  align-items: center;

  >label{
    width: 300px;
    text-align: start;
    font-size: 12px;
    color: rgb(51, 51, 51);
    line-height: 1.5;
  }

  >input{
    width: 300px;
    height: 35px;
    box-sizing: border-box;
    margin-bottom: 30px;
    font-size: 14px;
    border: none;
    border-bottom: 2px solid #30775b;

    :focus{
      outline: none;
    }

    ::placeholder{
      color: #30775b;
    }
  }
`;

const RegisterButton = styled(Button)`
    width: 300px;
    height: 40px;
`;