import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItemCard key={item.id}>
              <CartItemImage src={item.cartImage} alt={item.name} />
              <CartItemDetails>
                <p>{item.name}</p>
                <CartItemQuantity>
                  <QuantityButton onClick={() => handleReduceOne(item)}>
                    -
                  </QuantityButton>
                  <p>{item.quantity}</p>
                  <QuantityButton onClick={() => handleAddOne(item)}>
                    +
                  </QuantityButton>
                </CartItemQuantity>
              </CartItemDetails>
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
              <RemoveButton onClick={() => handleRemoveItem(item)}>
                Remove
              </RemoveButton>
            </CartItemCard>
          ))}
          <button onClick={handleEmptyCart}>Empty Cart</button>
          {userKey ? (
            <FinishPurchaseButton onClick={() => navigate("/checkout")}>
              Finalize sua compra
            </FinishPurchaseButton>
          ) : (
            <LoginMessage onClick={() => navigate("/login")}>
              Faça seu login
            </LoginMessage>
          )}
        </>
      )}
    </CartPageContainer>
  );
}

const FinishPurchaseButton = styled.button`
  background-color: #00ff00;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
`;

const LoginMessage = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

const RemoveButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;

const CartPageContainer = styled.div`
  padding: 20px;
`;

const EmptyCartMessage = styled.p`
  font-size: 18px;
`;

const CartItemCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
`;

const CartItemDetails = styled.div`
  flex-grow: 1;
`;

const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  margin: 0 5px;
`;
