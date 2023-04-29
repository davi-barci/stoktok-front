import styled from "styled-components";
import Room from "../../assets/Categories/room.png";
import LivingRoom from "../../assets/Categories/living_room.png";
import Office from "../../assets/Categories/office.png";
import Kitchen from "../../assets/Categories/kitchen.png";
import Bathroom from "../../assets/Categories/bathroom.png";

export default function Categories(){
    return (
        <ContainerCategories>
            <div>
                <img src={Room}/>
                <p>QUARTO</p>
            </div>
            <div>
                <img src={LivingRoom}/>
                <p>SALA DE ESTAR</p>
            </div>
            <div>
                <img src={Office}/>
                <p>ESCRITÓRIO</p>
            </div>
            <div>
                <img src={Kitchen}/>
                <p>COZINHA</p>
            </div>
            <div>
                <img src={Bathroom}/>
                <p>BANHEIRO</p>
            </div>
        </ContainerCategories>
    );
};

const ContainerCategories = styled.div`
    display: flex;
    align-items: center;
    animation: 35s slide linear infinite;

    @keyframes slide {
            from{
                transform: translateX(0);
            } to {
                transform: translateX(-100%);
            }
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        margin-right: 10px;

        img{
            width: 280px;
            height: 200px;
            border-radius: 50%;
            margin-bottom: 5px;
        }

        p{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            color: grey;
        }
    }
`;