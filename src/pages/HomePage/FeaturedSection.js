import styled from "styled-components";
import OfficeLine from "../../assets/OfficeSection/office_image.png";
import BenchChair from "../../assets/OfficeSection/benches_chairs_image.png";
import DecorateItens from "../../assets/OfficeSection/decorate_image.png";

export default function FeaturedSection(){
    return(
        <ContainerFeatured>
            <p>Destaques</p>
            <div>
                <div>
                    <div/>
                    <div/>
                </div>
                <img src={OfficeLine}/>
                <div>
                    <img src={BenchChair}/>
                    <img src={DecorateItens}/>
                </div>
            </div>
        </ContainerFeatured>
    );
};

const ContainerFeatured = styled.div`
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

    >div{
        width: 100%;
        height: 450px;
        display: flex;
        justify-content: space-between;
        gap: 0px 10px;

        >div:nth-of-type(1){
            width: 445px;
            height: 100%;
            position: relative;
            background-color: grey;

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

        >img:nth-of-type(1){
            width: 430px;
            height: 100%;
            object-fit: cover;
        }

        >div:nth-of-type(2){
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
    }
`;