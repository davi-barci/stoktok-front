import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import {AiOutlineArrowRight, AiFillHeart} from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import WishlistCard from "./WishlistCard";
import axios from "axios";


export default function WishlistPage(){
    const {user} = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(user === null) {
          navigate("/login");
        } else {
            axios
            .get(`${process.env.REACT_APP_API_URL}/wishlist/${user._id}`)
            .then((res) => {
                if (res.data) {
                    setProducts(res.data.products);
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Ocorreu um erro ao carregar a sua wishlist.");
                navigate("/");
            });
        }
      }, [products]);

    return(
        <ContainerWishlist>
            <div>
                <Link to="/">Home</Link>
                <AiOutlineArrowRight/>
                <p>Wishlist</p>
            </div>

            <div>
                <AiFillHeart/>
                <p>My Wishlist</p>
                <hr/>
            </div>

            <div>
                {(products.length === 0) ?
                    <p>Você ainda não tem nenhum produto na lista de desejos!</p> :
                    products.map((prod, index) => (prod !== null) && <WishlistCard key={index} id={prod._id} image={prod.images[0]} name={prod.name} price={prod.price}/>)
                }
            </div>
        </ContainerWishlist>
    );
}

const ContainerWishlist = styled.div`
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

        >a{
            height: 100%;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            margin-left: 10px;
            color: #30775B;
            display: flex;
            align-items: center;
            text-decoration: none;
        }

        >svg{
            margin-left: 10px;
            color: #30775B;
        }
    }

    >div:nth-of-type(2){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        >svg{
            font-size: 100px;
            color: #30775B;
            margin-bottom: 10px;
        }

        >p{
            width: 100%;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            color: #30775B;
            text-align: center;
            margin-bottom: 10px;
        }

        >hr{
            width: calc(100% - 50px);
            height: 2px;
            background-color: #30775B;
            margin-bottom: 50px;
        }
    }

    >div:nth-of-type(3){
        width: 100%;
        min-height: 400px;
        height: auto;
        display: flex;
        flex-wrap: wrap;

        >p{
            width: 100%;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            color: #30775B;
        }
    }
`;
