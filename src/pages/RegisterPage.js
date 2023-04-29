import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
        <h1>Quero criar uma conta Stok&Tok</h1>
        <p>
          Crie sua conta Tok&Stok agora e acesse promoções exclusivas, fique por
          dentro das novidades e acompanhe suas compras!
        </p>
      </div>
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
        <button type="submit" disabled={isRegisterFormDisabled}>
          {isRegisterFormDisabled ? "..." : "Entrar"}
        </button>
      </StyledForm>
      <Link to={"/login"}>Já tem uma conta? Faça login!</Link>
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
