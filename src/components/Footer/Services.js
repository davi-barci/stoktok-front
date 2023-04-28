import styled from "styled-components";
import { AiOutlineSetting } from "react-icons/ai";
import { BsShop, BsBookmarkCheck, BsTruck } from "react-icons/bs";

export default function SocialMedia(){
    return(
        <ContainerServices>
            <div>
                <BsBookmarkCheck/>
                <p>2 anos de garantia</p>
            </div>

            <div>
                <BsShop/>
                <p>Clique e retire</p>
            </div>

            <div>
                <BsTruck/>
                <p>Entrega agendada</p>
            </div>

            <div>
                <AiOutlineSetting/>
                <p>Serviço de montagem</p>
            </div>
        </ContainerServices>
    );
};

const ContainerServices = styled.div`
    width: 100%;
    height: 80px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        :hover{
                color: #30775B;
        }

        p{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            margin-left: 15px;
        }

        svg{
            font-size: 25px;
            color: black;
        }
    }
`;