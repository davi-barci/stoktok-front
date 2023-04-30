import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

export default function ProductCardMedium(props){
    return(
        <ContainerProductCard>
            <div>
                <AiOutlineHeart/>
            </div>
            <img src={props.image}/>
            <p>{props.name}</p>
            <div>
                <p>{`R$ ${Number(props.price).toFixed(2).replace('.', ',')}`}</p>
                <div/>
            </div>
        </ContainerProductCard>
    );
};

const ContainerProductCard = styled.div`
        width: 295px;
        height: 350px;
        margin-top: 5px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

        >div:nth-of-type(1){
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-bottom: 50px;

            svg{
                font-size: 20px;
                margin-right: 10px;
                color: red;
            }
        }

        >img{
            width: 190px;
            height: 190px;
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

            p{
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
            }
        }   
`;