import styled from "styled-components";
import {AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart} from "react-icons/ai";
import { useNavigate} from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Options(){
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);

    function userLogin(){
      if (user === null){
        navigate("/login")
      }else{
        if (window.confirm("Você realmente deseja sair dessa conta?")){
          const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
          };

          axios
          .post(`${process.env.REACT_APP_API_URL}/logout`, null, config)
          .then(res => {
            localStorage.removeItem("user");
            setUser(null);
          })
          .catch(err => {
              console.log(err);
              alert("Ocorreu um erro durante a logout. Por favor, tente novamente...");
          });
        }
      }
    }

    return (
        <ContainerOptions>
            <div onClick={() => userLogin()}>
                <AiOutlineUser />
                {(user === null) ? 
                    <p>Entre ou cadastre-se</p> :
                    <p>{`Olá, ${user.name.split(' ')[0]}`}</p>
                }
            </div>
            <div onClick={() => navigate("/cart")}>
                <AiOutlineShoppingCart />
                <p>Carrinho</p>
            </div>
            <div onClick={() => navigate("/wishlist")}>
                <AiOutlineHeart/>
                <p>Lista de Desejos</p>
            </div>
        </ContainerOptions>
    );
}

const ContainerOptions = styled.div`
  margin-right: 25px;
  display: flex;
  justify-content: space-between;
  gap: 0px 10px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    svg {
      font-size: 20px;
      color: #30775b;
    }

    p {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      color: #30775b;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 150px;
      text-align: center;
    }
  }
`;
