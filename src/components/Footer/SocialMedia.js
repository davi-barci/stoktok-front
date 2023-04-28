import styled from "styled-components";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai";
import { BsPinterest} from "react-icons/bs";

export default function SocialMedia(){
    return(
        <ContainerSocialMedia>
            <p>Siga a Stok&Tok</p>
            <div>
                <AiFillFacebook/>
                <AiFillInstagram/>
                <BsPinterest/>
                <AiFillTwitterCircle />
            </div>
        </ContainerSocialMedia>
    );
};

const ContainerSocialMedia = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    >p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: black;
        margin-bottom: 50px;
    }

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        >svg{
            font-size: 30px;
            padding-right: 20px;
            cursor: pointer;

            :hover{
                color: #30775B;
            }
        }

        >svg:nth-of-type(3){
            font-size: 26px;
        }

        >svg:nth-last-of-type(1){
            padding-right: 0px;
        }
    }
`;