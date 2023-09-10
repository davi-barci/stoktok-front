import styled from "styled-components";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import {AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import { useState, useContext, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import axios from "axios";


export default function ProductInfo(props){
    const [qtdProduct, setQtdProduct] = useState(1);

    function handleBuyButton() {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const newItem = {
        ...props,
        quantity: qtdProduct,
      };
  
      const existingItem = cartItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        cartItems.push(newItem);
      }
  
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      alert("Produto adicionado ao carrinho!");
      setQtdProduct(1);
    }

    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState(false);
    const {user} = useContext(UserContext);

    useEffect(() => {
        if (user === null) {
          return;
        } else {
          axios
            .get(`${process.env.REACT_APP_API_URL}/wishlist/${user._id}`)
            .then((res) => {
              if (res.data) { 
                if (res.data.products.some((prod) => prod !== null && prod._id === props.id)) {
                  setWishlist(true);
                } else {
                  setWishlist(false);
                }
              } else {
                setWishlist(false);
              }
            })
            .catch((err) => {
              console.log(err);
              navigate("/");
            });
        }
    }, [user]);


    function wishlistProduct(event, id){
        event.stopPropagation()
        if(user === null) return navigate("/login");

        console.log(wishlist);
        if(wishlist){
            axios
            .put(`${process.env.REACT_APP_API_URL}/wishlist-del`, {idUsuario: user._id, idProduto: id})
            .then((res) => {
                setWishlist(false);
                return;
            })
            .catch((err) => {
                console.log(err);
                alert("Ocorreu um erro ao remover o produto da wishlist. Tente novamente...");
                navigate("/");
                return;
            });
        } else {
            axios
            .put(`${process.env.REACT_APP_API_URL}/wishlist-add`, {idUsuario: user._id, idProduto: id})
            .then((res) => {
                setWishlist(true);
            })
            .catch((err) => {
                console.log(err);
                alert("Ocorreu um erro ao adicionar na wishlist. Tente novamente...");
                navigate("/");
            });
        }
    }

    return (
        <ContainerProductInfo>
            {(wishlist) ? 
                <AiFillHeart onClick={(event) => wishlistProduct(event, props.id)}/> :
                <AiOutlineHeart onClick={(event) => wishlistProduct(event, props.id)}/>
            }
            <p>{props.name.toUpperCase()}</p>
            <p>{`COR: ${props.color.toUpperCase()}`}</p>
            <div>
                <Rating value={props.rating} precision={0.1} readOnly/>
                <p>{`(${props.numReviews}) avaliações`}</p>
            </div>
            <p>{props.description}</p>
            <div>
                <div>
                    <p>{`R$ ${Number(props.price).toFixed(2).replace('.',',')}`}</p>
                    {(Number(props.discount) != 0 ) && 
                        <p>{`R$ ${(Number(props.price)/(1-props.discount/100)).toFixed(2).replace('.',',')}`}</p>
                    }
                </div>
                <div>
                    <AiOutlineMinusCircle onClick={() => (qtdProduct > 1) && setQtdProduct(qtdProduct-1)}/>
                    <div>{qtdProduct}</div>
                    <AiOutlinePlusCircle onClick={() => (qtdProduct < 100) && setQtdProduct(qtdProduct+1)}/>
                </div>
            </div>
            <div>
                <BuyButton onClick={handleBuyButton} variant="contained" style={{backgroundColor: "#30775b"}}>COMPRAR</BuyButton>
            </div>
        </ContainerProductInfo>
    );
}

const ContainerProductInfo = styled.div`
        width: 569px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: relative;

        >svg:nth-of-type(1){
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 20px;
            color: red;
            width: 50px;
            height: 50px;
            cursor: pointer;
        }

        >p:nth-of-type(1){
            font-family: 'Roboto', sans-serif;
            font-style: bold;
            font-weight: 700;
            font-size: 30px;
            line-height: 30px;
            color: #2d3a37;
            display: flex;
            align-items: center;
            text-align: center;
            margin-bottom: 10px;
        }

  > p:nth-of-type(2) {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #2d3a37;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
  }

  > p:nth-of-type(3) {
    width: calc(100% - 20px);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #2d3a37;
    display: flex;
    align-items: center;
    text-align: justify;
    margin-bottom: 10px;
    line-height: 18px;
  }

  > div:nth-of-type(1) {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    p {
      margin-left: 5px;
      color: #2d3a37;
    }
  }

  > div:nth-of-type(2) {
    width: 100%;
    height: 40px;
    margin-bottom: 51px;
    display: flex;
    justify-content: space-between;

    > div:nth-of-type(1) {
      display: flex;

      > p:nth-of-type(1) {
        height: 100%;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 25px;
        color: #30775b;
        display: flex;
        align-items: center;
        text-align: center;
        margin-right: 10px;
      }

      > p:nth-of-type(2) {
        height: 100%;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 25px;
        color: red;
        text-decoration: line-through;
        display: flex;
        align-items: center;
        text-align: center;
      }
    }

    > div:nth-of-type(2) {
      display: flex;
      align-items: center;

      > svg {
        font-size: 25px;
        margin-left: 10px;
        color: #30775b;
        cursor: pointer;
      }

      > div:nth-of-type(1) {
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
  }

  > div:nth-of-type(3) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BuyButton = styled(Button)`
  width: 407px;
  height: 60px;
`;
