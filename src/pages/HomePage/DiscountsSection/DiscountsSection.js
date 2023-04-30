import styled from "styled-components";
import ProductCardMedium from "../ComponentsProducts/ProductCardMedium";
import { useEffect, useRef } from "react";
import FeaturedDiscountProducts from "./FeaturedDiscountProducts";


export default function DiscountsSection() {
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        slidesPerView: 4,
        slidesPerGroup: 4,
        speed: 500,
        loop: true,
        navigation: true,
        injectStyles: [
            `
              .swiper-pagination-bullet{
                width: 15px;
                height: 15px;
                background-color: #30775B;
              }

              .swiper-wrapper{
                width: 100%;
                height: 350px;
                margin-left: 12px;
              }

              swiper-slide{
                width: 100%;
                height: 350px;
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
        <>
            <ContainerDiscounts>
                <div>
                    <p>Baixaram de Preço</p>
                    <div>
                        <swiper-container ref={swiperRef} init="false">
                           <swiper-slide>
                                <ProductCardMedium/>
                            </swiper-slide> 
                            <swiper-slide>
                                <ProductCardMedium/>
                            </swiper-slide> 
                            <swiper-slide>
                                <ProductCardMedium/>
                            </swiper-slide> 
                            <swiper-slide>
                                <ProductCardMedium/>
                            </swiper-slide>
                            <swiper-slide>
                                <ProductCardMedium/>
                            </swiper-slide> 
                            <swiper-slide>
                                <ProductCardMedium/>
                            </swiper-slide> 
                            <swiper-slide>
                                <ProductCardMedium/>
                            </swiper-slide> 
                            <swiper-slide>
                                <ProductCardMedium/>
                            </swiper-slide>  
                        </swiper-container> 
                    </div>
                </div>

                <FeaturedDiscountProducts/>
            </ContainerDiscounts>
        </>
    );
};

const ContainerDiscounts = styled.div`
    >div:nth-of-type(1){
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
            height: 350px;
        }
    }
`;