import styled from "styled-components";

export default function Success() {
  return (
    <MainContainer>
      <SuccessMessage>
        <h1>Compra concluída com sucesso!</h1>
        <p>Obrigado por sua compra!</p>
      </SuccessMessage>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SuccessMessage = styled.div`
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
`;
