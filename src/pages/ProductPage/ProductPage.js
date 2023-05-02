import styled from "styled-components";
import {AiOutlineArrowRight} from "react-icons/ai";
import ProductInfo from "./ProductInfo";
import ProductImages from "./ProductImages";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ProductPage(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [productSelected, setProductSelected] = useState(null);

    useEffect(() => {
        window.scrollTo(0,0);

        axios
        .get(`${process.env.REACT_APP_API_URL}/`)
        .then((res) => {
          const product = res.data.filter((prod) => prod._id === id);
          (product.length === 0) && navigate("/notfound")
          setProductSelected(product[0]);
        })
        .catch((err) => {
          console.log(err);
          alert("Ocorreu um erro durante a recuperação dos produtos. Por favor, tente novamente");
          navigate("/");
        });
    }, []);

    return(
        <ContainerProductPage>
            {
                (productSelected !== null) &&
                <>
                <div>
                        <Link to="/">Home</Link>
                        <AiOutlineArrowRight/>
                        <p>{productSelected.name}</p>
                    </div>

                    <div>
                        <div>
                            <ProductImages images={productSelected.images}/>
                            <ProductInfo 
                                name={productSelected.name}
                                color={productSelected.color}
                                rating={productSelected.rating}
                                numReviews={productSelected.numReviews}
                                price={productSelected.price}
                                description={productSelected.description}
                                discount={productSelected.discount}
                                id={productSelected._id}
                            />
                        </div>
                </div>
                </>
            }
        </ContainerProductPage>
    );
}

const ContainerProductPage = styled.div`
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
        height: 600px;
        background-color: white;
        display: flex;
        justify-content: center;

        >div{
            width: 1170px;
            height: 509px;
            background: #FFFFFF;
            box-shadow: 0px 0px 25px 10px #F6F4FD;
            border-radius: 2px;
            display: flex;
        }
    }

`;
