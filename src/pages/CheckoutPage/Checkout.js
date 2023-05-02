import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";

export default function Checkout() {
  const [checkoutForm, setCheckoutForm] = useState({
    cep: "",
    number: "",
    complement: "",
    phone: "",
    cardNumber: "",
    expirationDate: "",
    holderName: "",
    cvv: "",
  });

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const user = JSON.parse(localStorage.getItem("user")) || "";

  const [isRegisterFormDisabled, setCheckoutFormDisabled] = useState(false);
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  function handleForm(e) {
    setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCheckoutFormDisabled(true);
    const productsWithQuantity = cartItems.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }));

    const payload = {
      checkoutData: checkoutForm,
      userId: user._id,
      products: productsWithQuantity,
    };

    axios
      .post(`${API}/checkout`, payload)
      .then((_res) => {
        localStorage.removeItem("cartItems");
        navigate("/success");
      })
      .catch((err) => {
        console.log(err);
        alert("Tente outra vez...");
        setCheckoutFormDisabled(false);
      });
  }

  return (
    <MainContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>Dados da Entrega</SectionTitle>
          <FormField>
            <label htmlFor="cep">CEP:</label>
            <input
              value={checkoutForm.cep}
              onChange={handleForm}
              disabled={isRegisterFormDisabled}
              type="text"
              id="cep"
              name="cep"
              placeholder="Digite seu CEP"
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="number">Número:</label>
            <input
              value={checkoutForm.number}
              onChange={handleForm}
              disabled={isRegisterFormDisabled}
              type="text"
              id="number"
              name="number"
              placeholder="Digite o número"
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="complement">Complemento:</label>
            <input
              value={checkoutForm.complement}
              onChange={handleForm}
              disabled={isRegisterFormDisabled}
              type="text"
              id="complement"
              name="complement"
              placeholder="Digite o complemento"
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="phone">Telefone:</label>
            <input
              value={checkoutForm.phone}
              onChange={handleForm}
              disabled={isRegisterFormDisabled}
              type="text"
              id="phone"
              name="phone"
              placeholder="Digite seu telefone"
              required
            />
          </FormField>
        </Section>
        <Section>
          <SectionTitle>Dados do Pagamento</SectionTitle>
          <FormField>
            <label htmlFor="cardNumber">Número do Cartão:</label>
            <input
              value={checkoutForm.cardNumber}
              onChange={handleForm}
              disabled={isRegisterFormDisabled}
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Digite o número do cartão"
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="expirationDate">Data de Expiração:</label>
            <input
              value={checkoutForm.expirationDate}
              onChange={handleForm}
              disabled={isRegisterFormDisabled}
              type="text"
              id="expirationDate"
              name="expirationDate"
              placeholder="MM/AA"
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="holderName">Nome do Titular:</label>
            <input
              value={checkoutForm.holderName}
              onChange={handleForm}
              disabled={isRegisterFormDisabled}
              type="text"
              id="holderName"
              name="holderName"
              placeholder="Digite o nome do titular"
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="cvv">CVV:</label>
            <input
              value={checkoutForm.cvv}
              onChange={handleForm}
              disabled={isRegisterFormDisabled}
              type="text"
              id="cvv"
              name="cvv"
              placeholder="Digite o CVV"
              required
            />
          </FormField>
        </Section>

        <CheckoutButton type="submit" disabled={isRegisterFormDisabled}>
          {isRegisterFormDisabled ? "..." : "FINALIZAR COMPRA"}
        </CheckoutButton>
      </StyledForm>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form``;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const FormField = styled.div`
  margin-bottom: 15px;

  label {
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 30px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const CheckoutButton = styled(Button)`
  width: 300px;
  height: 40px;
  background-color: #30775b;
  color: white;
  margin-bottom: 25px;
`;
