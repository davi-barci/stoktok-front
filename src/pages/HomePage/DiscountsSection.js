import styled from "styled-components";
import ThirtyOff from "../../assets/DiscountSection/discount_image01.png";
import DiscountFurniture from "../../assets/DiscountSection/discount_image02.png";
import DiscountAccessories from "../../assets/DiscountSection/discount_image03.png";

export default function DiscountsSection(){
    return(
            <>
            <ContainerDiscounts>
                <div>
                    <p>Baixaram de Preço</p>
                    <div>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
                
                <div>
                    <img src={ThirtyOff}/>
                    <div>
                        <img src={DiscountFurniture}/>
                        <img src={DiscountAccessories}/>
                    </div>
                    <div>
                        <div/>
                        <div/>
                    </div>
                </div>
            </ContainerDiscounts>
            </>
    );
};

const ContainerDiscounts = styled.div`
    >div:nth-of-type(1){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;

        p{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            margin-bottom: 40px;
            color: grey;
        }

        div{
            width: 100%;
            height: 350px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;

            div:nth-of-type(1){
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: white;
                position: absolute;
                z-index: 1;
                left: 1px;
                top: 145px;
                box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
                cursor: pointer;

                :hover{
                    background-color: #30775B;
                }
            }

            div:nth-of-type(2){
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: white;
                position: absolute;
                z-index: 1;
                right: 1px;
                top: 145px;
                box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
                cursor: pointer;
                
                :hover{
                    background-color: #30775B;
                }
            }

            div{
                width: 295px;
                height: 100%;
                background-color: grey;
            }
        }
    }

    >div:nth-of-type(2){
        width: 100%;
        height: 450px;
        display: flex;
        justify-content: space-between;
        gap: 0px 10px;
        margin-bottom: 40px;

        >img:nth-of-type(1){
            width: 445px;
            height: 100%;
            object-fit: cover;
        }

        >div:nth-of-type(1){
            width: 400px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            img{
                width: 100%;
                height: 220px;
                object-fit: cover;
            }
        }

        >div:nth-of-type(2){
            width: 430px;
            height: 100%;
            background-color: grey;
            position: relative;

            >div:nth-of-type(1){
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: white;
                position: absolute;
                z-index: 1;
                right: 15px;
                top: 195px;
                box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
                cursor: pointer;
                
                :hover{
                    background-color: #30775B;
                }
            }

            >div:nth-of-type(2){
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: white;
                position: absolute;
                z-index: 1;
                left: 15px;
                top: 195px;
                box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
                cursor: pointer;
                
                :hover{
                    background-color: #30775B;
                }
            }
        }
    }
`;