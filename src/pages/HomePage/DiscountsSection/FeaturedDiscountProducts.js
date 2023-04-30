import styled from "styled-components";
import ThirtyOff from "../../../assets/DiscountSection/discount_image01.png";
import DiscountFurniture from "../../../assets/DiscountSection/discount_image02.png";
import DiscountAccessories from "../../../assets/DiscountSection/discount_image03.png";
import ProductCardLarge from "../ComponentsProducts/ProductCardLarge";
import { useEffect, useRef } from "react";

export default function FeaturedDiscountProducts(){
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

    return (
        <ContainerFeaturedProducts>
            <img src={ThirtyOff} />
            <div>
                <img src={DiscountFurniture} />
                <img src={DiscountAccessories} />
            </div>
            <swiper-container ref={swiperRef} init="false">
                <swiper-slide>
                    <ProductCardLarge/>
                </swiper-slide>
                <swiper-slide>
                    <ProductCardLarge/>
                </swiper-slide>
            </swiper-container>
        </ContainerFeaturedProducts>
    );
};

const ContainerFeaturedProducts = styled.div`
        width: 100%;
        height: 450px;
        display: flex;
        justify-content: space-between;
        gap: 0px 10px;
        margin-bottom: 40px;

        >img:nth-of-type(1){
            width: 445px;
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
`