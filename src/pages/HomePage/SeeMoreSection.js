import styled from "styled-components";
import SoftLineImage from "../../assets/SoftSection/soft_line.png";
import IluminationImage from "../../assets/SoftSection/ilumination.png";
import OrganizationImage from "../../assets/SoftSection/organization.png";

export default function SeeMoreSection(){
    return(
        <ContainerSeeMore>
            <p>Veja mais</p>
            <div>
                <img src={OrganizationImage}/>
                <div>
                    <img src={SoftLineImage}/>
                    <img src={IluminationImage}/>
                </div>
                <div>
                    <div/>
                    <div/>
                </div>
            </div>
        </ContainerSeeMore>
    );
};

const ContainerSeeMore = styled.div`
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

            >div:nth-of-type(2){
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

            >img:nth-of-type(1){
                width: 430px;
                height: 100%;
                object-fit: cover;
            }
        }
`;