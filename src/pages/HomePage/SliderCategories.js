import styled from "styled-components";
import Categories from "./Categories";

export default function SliderCategories(){
    return (
        <ContainerSlide>
            <Categories/>
            <Categories/>
        </ContainerSlide>
    );
};

const ContainerSlide = styled.div`
        display: flex;
        align-items: center;
        border-bottom: 1px solid grey;
        overflow: hidden;
        margin-bottom: 40px;
`;