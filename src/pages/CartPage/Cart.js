import { useState } from "react";
import { useNavigate,  Link  } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import {BsFillTrash3Fill} from "react-icons/bs";
import styled from "styled-components";
import Button from '@mui/material/Button';

export default function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const userKey = localStorage.getItem("user");

  function handleEmptyCart() {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  }

  function handleAddOne(item) {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  }

  function handleReduceOne(item) {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) }
        : cartItem
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  }

  function handleRemoveItem(item) {
    const updatedItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  }

  return (
    <CartPageContainer>
      <div>
        <Link to="/">Home</Link>
        <AiOutlineArrowRight />
        <p>Carrinho</p>
        <AiOutlineArrowRight />
        <p>Dados de Entrega/Pagamento</p>
        <AiOutlineArrowRight />
        <p>Confirmação</p>
      </div>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>Seu carrinho está vazio 😞</EmptyCartMessage>
      ) : (
        <>
          <div>
            <p>PRODUTO</p>
            <p>QTD</p>
            <p>PREÇO</p>
            <p>TOTAL</p>
          </div>
          {cartItems.map((item) => (
            <CartItemCard key={item.id}>
              <div>
                <CartItemImage src={item.cartImage} alt={item.name} />
                <p>{item.name}</p>
              </div>
              <div>
                  <AiOutlineMinusCircle onClick={() => handleReduceOne(item)}/>
                  <div>{item.quantity}</div>
                  <AiOutlinePlusCircle onClick={() => handleAddOne(item)}/>
              </div>
              <p>{`${item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}`}</p>
              <p>
                {`${(item.price * item.quantity).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}`}
              </p>
              <RemoveButton onClick={() => handleRemoveItem(item)} variant="contained" style={{backgroundColor: "red", position: "absolute", top: "0px", right: "20px", borderRadius: "0px"}}>
                <BsFillTrash3Fill style={{fontSize: "20px"}}/>
              </RemoveButton>
            </CartItemCard>
          ))}
          <ButtonContainer>
            <ButtonCustom variant="contained"  style={{marginLeft: "20px", backgroundColor: "red", borderRadius: "5px"}} onClick={handleEmptyCart}>Empty Cart</ButtonCustom>
            {userKey ? (
              <ButtonCustom  style={{marginRight: "20px", backgroundColor: "#30775B", borderRadius: "5px"}} variant="contained" onClick={() => navigate("/checkout")}>
                Confirme sua compra
              </ButtonCustom>
            ) : (
              <ButtonCustom  style={{marginRight: "20px", backgroundColor: "blue", borderRadius: "5px"}}  variant="contained" onClick={() => navigate("/login")}>
                Faça seu login
              </ButtonCustom>
            )}
          </ButtonContainer>
        </>
      )}
    </CartPageContainer>
  );
}

const ButtonCustom = styled(Button)`
  width: 250px;
  height: 100%;
`;

const CartPageContainer = styled.div`
  width: 100%;
  min-height: 600px;
  height: auto;

  >div:nth-of-type(1) {
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

    >p:nth-of-type(1){
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
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 3px solid #30775b;
    margin-bottom: 30px;

    >p{
      height: 100%;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: #30775B;
      display: flex;
      align-items: center;
    }
  }

`;

const EmptyCartMessage = styled.p`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 40px;
    color: #30775b;
`;

const CartItemCard = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

  >p:nth-of-type(1),
  >p:nth-of-type(2){
    width: 110px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    color: #30775B;
  }

  >div:nth-of-type(2) {
      display: flex;
      align-items: center;

      >svg {
        font-size: 25px;
        margin-left: 10px;
        color: #30775b;
        cursor: pointer;
      }

      >div:nth-of-type(1) {
        width: 45px;
        height: 30px;
        border-radius: 5px;
        background-color: #30775b;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 15px;
        color: white;
        margin-left: 10px;
        cursor: default;
      }
  }

  >div:nth-of-type(1){
    height: 100%;

    >p:nth-of-type(1){
      width: 100px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: start;
      font-weight: 700;
      font-size: 15px;
      margin-top: 3px;
      margin-bottom: 3px;
  }

  }
`;

const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled(Button)`
  width: 10px;
  height: 35px;
`;
