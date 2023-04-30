import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import CadeiraTeste from "../../../assets/cadeira-teste.png";

export default function ProductCardLarge(){
    return(
        <ContainerProductCardLarge>
            <div>
                <AiOutlineHeart/>
            </div>
            <img src={CadeiraTeste}/>
            <p>Kloe cadeira giratória</p>
            <div>
                <p>R$ 300,00</p>
                <div/>
            </div>
        </ContainerProductCardLarge>
    );
};

const ContainerProductCardLarge = styled.div`
            width: 430px;
            height: 100%;
            background-color: #F4F0F0;
            display: flex;
            flex-direction: column;
            align-items: center;

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
            }
        }

        >img{
            width: 300px;
            height: 300px;
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
            text-align: center;
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