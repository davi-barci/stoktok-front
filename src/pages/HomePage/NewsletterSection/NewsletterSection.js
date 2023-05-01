import styled from "styled-components";
import {useState} from "react";
import axios from "axios";
import Button from '@mui/material/Button';

export default function NewsletterSection(){
    const [formNewsletter, setFormNewsletter] = useState({email:"", name:""});
    const [disableButton, setDisableButton] = useState(false);
    const [disabledForm, setDisabledForm] = useState(false);

    function handleForm(e){
        setFormNewsletter({...formNewsletter, [e.target.name]: e.target.value});
    }

    function confirmarCadastro(e){
        e.preventDefault();

        axios
        .post(`${process.env.REACT_APP_API_URL}/newsletter`, formNewsletter)
        .then((res) => {
            console.log("e-mail enviado");
            setDisabledForm(true);
        })
        .catch((err) => {
          console.log(err);
          setDisableButton(false);
        });

        setDisableButton(true);
    }

    return (
        <ContainerNewsletter>
            <p>Saiba tudo sobre móveis e decoração</p>
            <p>E fique por dentro das novidades e promoções da Stok&Tok</p>
            {(disabledForm) ? 
                <p>Seu e-mail foi cadastrado com sucesso!</p> :
                <form onSubmit={confirmarCadastro}>
                    <input 
                        placeholder="Nome"
                        type="text"
                        name="name"
                        value={formNewsletter.name}
                        onChange={handleForm}
                        disabled={disableButton}
                        required
                    />
                    <input 
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        value={formNewsletter.email}
                        disabled={disableButton}
                        onChange={handleForm}
                        required
                    />
                    <ConfirmButton  disabled={disableButton} style={{backgroundColor: "#3A8369", marginBottom: "20px", color: "white"}} type="submit">{(disableButton) ? "..." : "Cadastrar"}</ConfirmButton>
                </form>
            }
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

        >p:nth-of-type(1){
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-style: bold;
            font-weight: 700;
            font-size: 25px;
            margin-bottom: 40px;
            color: black;
            margin-top: 20px;
        }

        >p:nth-of-type(2){
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            margin-bottom: 40px;
            color: black;
        }

        >p:nth-of-type(3){
            width: 100%;
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 40px;
            color: #3A8369;
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
        }
`;

const ConfirmButton = styled(Button)`
    width: 200px;
    height: 50px;
    border-radius: 5px;
`;