import styled from "styled-components";
import { AiOutlineHeart, AiOutlineArrowDown, AiFillHeart} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {useState, useContext, useEffect} from "react";
import UserContext from "../../../contexts/UserContext";
import axios from "axios";

export default function ProductCardSmall(props){
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

    function selectProduct(id){
        navigate(`/product/${id}`);
    }

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

    return(
        <ContainerProductCard onClick={() => selectProduct(props.id)}>
            <div>
                {(wishlist) ? 
                    <AiFillHeart onClick={(event) => wishlistProduct(event, props.id)}/> :
                    <AiOutlineHeart onClick={(event) => wishlistProduct(event, props.id)}/>
                }
            </div>
            <img src={props.image}/>
            <p>{props.name}</p>
            <div>
                <p>{`R$ ${Number(props.price).toFixed(2).replace('.', ',')}`}</p>
                {(Number(props.discount) != 0) &&
                    <div>
                        <p>{`${props.discount}%`}</p>
                        <AiOutlineArrowDown/>
                    </div>
                }
            </div>
        </ContainerProductCard>
    );
};

const ContainerProductCard = styled.div`
        width: 220px;
        height: 300px;
        margin-left: 12px;
        margin-top: 10px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        cursor: pointer;

        >div:nth-of-type(1){
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-bottom: 30px;

            svg{
                font-size: 20px;
                margin-right: 10px;
                color: red;
                height: 100%;
            }
        }

        >img{
            width: 150px;
            height: 150px;
            object-fit: cover;
            margin-bottom: 11px;
        }

        >p{
            width: 100%;
            height: 18.4px;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: black;
            margin-left: 17px;
            margin-bottom: 20px;
        }

        >div:nth-of-type(2){
            width: 100%;
            height: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            >p{
                height: 16px;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 700;
                font-size: 15px;
                color: green;
                margin-left: 10px;
            }

            >div{
                width: 48px;
                height: 20px;
                background-color: green;
                border-radius: 3px;
                margin-right: 17px;
                display: flex;
                justify-content: center;
                align-items: center;

                >p{
                    font-family: 'Roboto', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 12px;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 3px;
                }

                >svg{
                    color:white;
                    font-size: 12px;
                    
                }
            }
        }   
`;