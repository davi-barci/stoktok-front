import styled from "styled-components";

export default function NewsletterSection(){
    return (
        <ContainerNewsletter>
            <p>Saiba tudo sobre móveis e decoração</p>
            <p>E fique por dentro das novidades e promoções da Stok&Tok</p>
            <form>
                <input placeholder="Nome"/>
                <input placeholder="E-mail"/>
                <button>Cadastrar</button>
            </form>
        </ContainerNewsletter>
    );
};

const ContainerNewsletter = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ECF3F4;

        p:nth-of-type(1){
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-style: bold;
            font-weight: 700;
            font-size: 25px;
            margin-bottom: 40px;
            color: black;
            margin-top: 20px;
        }

        p:nth-of-type(2){
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            margin-bottom: 40px;
            color: black;
        }

        >form{
            width: 600px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            input{
                width: 100%;
                height: 45px;
                border: 1px solid grey;
                border-radius: 5px;
                margin-bottom: 25px;
                box-sizing: border-box;
                padding: 10px;
            }

            button{
                width: 200px;
                height: 50px;
                border-radius: 5px;
                background-color: #3A8369;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                font-style: bold;
                font-weight: 700;
                font-size: 20px;
                margin-bottom: 40px;
                color: white;
                border: none;
            }

        }
`;