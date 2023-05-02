import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Button from '@mui/material/Button';
import bgLogin from "../assets/bglogin.png";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [isLoginFormDisabled, setLoginFormDisabled] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  function handleForm(e) {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoginFormDisabled(true);
    axios
      .post(`${API}/login`, loginForm)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Tente outra vez...");
        setLoginFormDisabled(false);
      });
  }

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, []);

  return (
    <MainContainer>
      <div>
        <p>LOGIN</p>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            value={loginForm.email}
            onChange={handleForm}
            disabled={isLoginFormDisabled}
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
          <label htmlFor="password">Senha:</label>
          <input
            value={loginForm.password}
            onChange={handleForm}
            disabled={isLoginFormDisabled}
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            required
          />
          <LoginButton type="submit" disabled={isLoginFormDisabled} style={{backgroundColor: "#30775b", color:"white", marginBottom: "25px"}}>
            {isLoginFormDisabled ? "..." : "Entrar"}
          </LoginButton>
        </StyledForm>
        <div>
          <Link to={"/register"}>Não tem uma senha? Cadastre agora.</Link>
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
    height: 330px;
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

const LoginButton = styled(Button)`
    width: 300px;
    height: 40px;
`;