import axios from "axios";
import { useState } from "react";
import { useNavigate, Link  } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import InputMask from 'react-input-mask';

export default function Checkout() {

  const [checkoutForm, setCheckoutForm] = useState({
    cep: "",
    number: "",
    complement: "",
    phone: "",
    cardNumber: "",
    expirationDate: "",
    holderName: "",
    cvv: ""
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
          <StyledForm onSubmit={handleSubmit}>
            <div>
              <div>
                <SectionTitle>Dados da Entrega</SectionTitle>
                  <label htmlFor="cep">CEP:</label>
                  <InputMask
                    mask="99999-999"
                    maxlength="8"
                    minlength="8"
                    value={checkoutForm.cep}
                    onChange={handleForm}
                    disabled={isRegisterFormDisabled}
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="Digite seu CEP"
                    required
                  />
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
                  <label htmlFor="phone">Telefone:</label>
                  <InputMask
                    mask="(99) 99999-9999"
                    maxlength="11"
                    minlength="11"
                    value={checkoutForm.phone}
                    onChange={handleForm}
                    disabled={isRegisterFormDisabled}
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Digite seu telefone"
                    required
                  />
              </div>

              <div>
                <SectionTitle>Dados do Pagamento</SectionTitle>
                <Cards
                  number={checkoutForm.cardNumber}
                  name={checkoutForm.holderName}
                  expiry={checkoutForm.expirationDate}
                  cvv={checkoutForm.cvv}
                  focused={checkoutForm.focus}
                />
                <label htmlFor="cardNumber">Número do Cartão:</label>
                <InputMask
                  mask="9999 9999 9999 9999"
                  maxlength="16"
                  minlength="16"
                  value={checkoutForm.cardNumber}
                  onChange={handleForm}
                  disabled={isRegisterFormDisabled}
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Digite o número do cartão"
                  required
                />
                <label htmlFor="expirationDate">Data de Expiração:</label>
                <InputMask
                  mask="99/99"
                  maxlength="4"
                  minlength="4"
                  value={checkoutForm.expirationDate}
                  onChange={handleForm}
                  disabled={isRegisterFormDisabled}
                  id="expirationDate"
                  name="expirationDate"
                  placeholder="MM/AA"
                  required
                />
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
                <label htmlFor="cvv">CVV:</label>
                <InputMask
                  mask="999"
                  maxlength="3"
                  minlength="3"
                  value={checkoutForm.cvv}
                  onChange={handleForm}
                  disabled={isRegisterFormDisabled}
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="Digite o CVV"
                  required
                />
              </div>
            </div>

          <CheckoutButton type="submit" disabled={isRegisterFormDisabled} style={{backgroundColor: "#30775b", color:"white", marginBottom: "25px"}}>
            {isRegisterFormDisabled ? "..." : "FINALIZAR COMPRA"}
          </CheckoutButton>
          </StyledForm>
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

    >p:nth-of-type(2){
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
    display: flex;
    justify-content: space-around;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  >div:nth-of-type(1){
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0px 200px;
    margin-bottom: 40px;

    >div:nth-of-type(1){
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
    }

    >div:nth-of-type(2){
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

      >label:nth-of-type(1){
        margin-top: 20px;
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
    }
  }

`;


const SectionTitle = styled.p`
      width: 100%;
      text-align: center;
      font-weight: 700;
      font-size: 28px;
      color: rgb(51, 51, 51);
      text-align: center;
      margin-bottom: 15px;
      margin-top: 20px;
`;

const CheckoutButton = styled(Button)`
    width: 300px;
    height: 40px;
`;
