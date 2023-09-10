import styled from "styled-components";
import Icon from "../../assets/icon-stok-tok.jpg";

export default function Menu(){
    return(
            <ContainerMenu>
                <div>
                    <h1>Atendimento</h1>
                    <p>Atendimento pelo WhatsApp</p>
                    <p>Acompanhar pedido</p>
                    <p>Chat online</p>
                    <p>Compre pelo telefone</p>
                    <p>Mande uma mensagem</p>
                    <p>Perguntas frequentes</p>
                </div>

                <div>
                    <h1>Como trabalhamos</h1>
                    <p>Como comprar</p>
                    <p>Cupom de desconto</p>
                    <p>Entrega</p>
                    <p>Mapa do site</p>
                    <p>Pagamento</p>
                    <p>Política de privacidade</p>
                    <p>Troca de Devolução</p>
                    <p>Regulamentos</p>
                </div>

                <div>
                    <h1>Serviços</h1>
                    <p>Especificadores Stok&Tok</p>
                    <p>Cartão Presente</p>
                    <p>Clique E Retire</p>
                    <p>Decoração De Ambientes</p>
                    <p>Kwork</p>
                    <p>Lista de casamento</p>
                    <p>Venda corporativa</p>
                    <p>Ambiente em 3D: agende aqui</p>
                    <p>Compre via WhatsApp</p>
                    <p>Clube Stok&Tok</p>
                </div>

                <div>
                    <h1>Institucional</h1>
                    <p>A Stok&Tok</p>
                    <p>Blog StokEmCasa</p>
                    <p>Designers</p>
                    <p>Lojas</p>
                    <p>Trabalhe conosco</p>
                    <p>Best Friday Stok&Tok</p>
                    <p>Sustentabilidade - ESG Stok&Tok</p>
                </div>

                <div>
                    <img src={Icon} alt="logo"/>
                </div>
        </ContainerMenu>
    );
};

const ContainerMenu = styled.div`
    width: 100%;
    height: 320px;
    background-color: #30775B;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    >div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 20px;
        
        h1{
            font-family: 'Roboto', sans-serif;
            font-style: bold;
            font-weight: 700;
            font-size: 20px;
            color: white;
            margin-bottom: 10px;
            cursor: default;
        }

        p{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            color: white;
            margin-bottom: 10px;
            cursor:pointer;
        }
    }

    >div:nth-last-child(1){
        height: 320px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0px;

        >img{
            border: 1px solid black;
        }
    }
`;