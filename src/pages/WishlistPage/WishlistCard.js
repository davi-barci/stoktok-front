import styled from "styled-components";
import Button from '@mui/material/Button';
import {AiOutlineHeart, AiOutlineMinusCircle, AiOutlinePlusCircle, AiFillHeart} from "react-icons/ai";
import { useState, useContext, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function WishlistCard(props){
    const [qtdProduct, setQtdProduct] = useState(1);
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
              if (res.data && res.data.products) { // verifique se res.data e res.data.products não são null
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

    return (
        <ContainerWishlistCard>
            <div>
                {(wishlist) ? 
                    <AiFillHeart onClick={(event) => wishlistProduct(event, props.id)}/> :
                    <AiOutlineHeart onClick={(event) => wishlistProduct(event, props.id)}/>
                }
            </div>
            <img src={props.cartImage}/>
            <p>{props.name}</p>
            <p>{`R$ ${Number(props.price).toFixed(2).replace('.', ',')}`}</p>
            <div>
                <BuyButton variant="contained" onClick={handleBuyButton} style={{backgroundColor: "#30775b", borderRadius: "10px", marginLeft: "17px"}}>COMPRAR</BuyButton>
                <div>
                    <AiOutlineMinusCircle onClick={() => (qtdProduct > 1) && setQtdProduct(qtdProduct-1)}/>
                    <div>{qtdProduct}</div>
                    <AiOutlinePlusCircle onClick={() => (qtdProduct < 100) && setQtdProduct(qtdProduct+1)}/>
                </div>
            </div>
        </ContainerWishlistCard>
    );
}

const ContainerWishlistCard = styled.div`
    width: 295px;
    height: 350px;
    background-color: white;
    border-radius: 10px;
    margin-left: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

    >div:nth-of-type(1){
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 10px;

        svg{
            font-size: 20px;
            margin-right: 10px;
            margin-top: 5px;
            color: red;
            height: 100%;
        }
    }

    >img{
        width: 190px;
        height: 190px;
        object-fit: cover;
        margin-bottom: 10px;
    }

    >p:nth-of-type(1){
        width: calc(100% - 34px);
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: black;
        margin-bottom: 5px;
    }

    >p:nth-of-type(2){
        width: calc(100% - 34px);
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: green;
        margin-bottom: 10px;
    }

    >div:nth-of-type(2){
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;

        >div:nth-of-type(1){
            display: flex;
            align-items: center;
            margin-right: 17px;

            >svg{
                font-size: 25px;
                margin-left: 10px;
                color: #30775b;
                cursor: pointer;
            }

            >div:nth-of-type(1){
                width: 45px;
                height: 30px;
                border-radius: 5px;
                background-color: #30775b;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 15px;
                color: white;
                margin-left: 10px;
                cursor: default;
            }
        }
    }
`;

const BuyButton = styled(Button)`
    width: 140px;
    height: 44px;
`;