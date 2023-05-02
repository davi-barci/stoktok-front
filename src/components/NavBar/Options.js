import styled from "styled-components";
import {AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart} from "react-icons/ai";
import { useNavigate} from "react-router-dom";

export default function Options(){
    const navigate = useNavigate();

    return (
        <ContainerOptions>
            <div>
                <AiOutlineUser/>
                <p>Entre ou cadastre-se</p>
            </div>
            <div>
                <AiOutlineShoppingCart/>
                <p>Carrinho</p>
            </div>
            <div onClick={() => navigate("/wishlist")}>
                <AiOutlineHeart/>
                <p>Lista de Desejos</p>
            </div>
        </ContainerOptions>
    );
}

const ContainerOptions = styled.div`
    margin-right: 25px;
    display: flex;
    justify-content: space-between;
    gap: 0px 20px;

    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        svg{
            font-size: 20px;
            color: #30775B;
        }

        p{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            color: #30775B;
        }
    }
`;