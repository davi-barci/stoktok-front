import styled from "styled-components";
import OfficeLine from "../../../assets/OfficeSection/office_image.png";
import BenchChair from "../../../assets/OfficeSection/benches_chairs_image.png";
import DecorateItens from "../../../assets/OfficeSection/decorate_image.png";
import ProductCardLarge from "../ComponentsProducts/ProductCardLarge";
import { useEffect, useRef } from "react";

export default function FeaturedSection(){
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        slidesPerView: 1,
        speed: 500,
        pagination: true,
        navigation: true,
        injectStyles: [
            `
              .swiper-pagination-bullet{
                width: 15px;
                height: 15px;
                background-color: #30775B;
              }

              .swiper-wrapper{
                width: 430px;
                height: 100%;
              }

              swiper-slide{
                width: 430px;
                height: 100%;
              }

              .swiper-button-prev,
              .swiper-button-next {
                width: 60px;
                height: 60px;
                background-color: white;
                border-radius:50%;
                box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
                color: #30775B;
              }

              .swiper-button-prev:hover,
              .swiper-button-next:hover{
                background-color: #30775B;
                color: white;
              }
          `,
        ],
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);

    return(
        <ContainerFeatured>
            <p>Destaques</p>
            <div>
                <swiper-container ref={swiperRef} init="false">
                    <swiper-slide>
                        <ProductCardLarge/>
                    </swiper-slide>
                    <swiper-slide>
                        <ProductCardLarge/>
                    </swiper-slide>
                </swiper-container>
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

    >p{
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

        >img:nth-of-type(1){
            width: 430px;
            height: 100%;
            object-fit: cover;
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
    }
`;