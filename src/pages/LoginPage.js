import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

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
        navigate("/success");
      })
      .catch((err) => {
        console.log(err);
        alert("Tente outra vez...");
        setLoginFormDisabled(false);
      });
  }

  useEffect(() => {
    if (user !== null) {
      navigate("/success");
    }
  }, []);

  return (
    <MainContainer>
      <div>
        <h1>Já tenho uma conta Stok&Tok</h1>
        <p>
          Acesse agora sua conta para acompanhar seus pedidos, ter ofertas
          exclusivas e muito mais.
        </p>
      </div>
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
        <button type="submit" disabled={isLoginFormDisabled}>
          {isLoginFormDisabled ? "..." : "Entrar"}
        </button>
      </StyledForm>
      <Link to={"/register"}>Não tem uma senha? Cadastre agora.</Link>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 50px 25%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
