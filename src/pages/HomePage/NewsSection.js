import styled from "styled-components";

export default function NewsSection(){
    return(
        <ContainerNews>
            <p>Novidades para você</p>
            <div>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </ContainerNews>
    );
};

const ContainerNews = styled.div`
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
`;