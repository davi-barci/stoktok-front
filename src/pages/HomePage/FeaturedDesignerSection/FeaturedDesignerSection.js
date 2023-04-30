import styled from "styled-components";
import DesignerPhoto from "../../../assets/DesignerSection/designer_profile_photo.png";
import BgDesigner from "../../../assets/DesignerSection/designer_bg.png";
import ProductCardSmall from "../ComponentsProducts/ProductCardSmall";
import { useEffect, useRef } from "react";

export default function FeaturedDesignerSection(){
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
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
                width: 450px;
                height: 100%;
              }

              swiper-slide{
                width: 220px;
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
        <ContainerFeaturedDesigner>
            <div>
                <img src={DesignerPhoto}/>
                <h1>Bruno Faucz</h1>
                <p>Formado em Design de Mobiliário em 
                    2007, e pós-graduado em Master Design 
                    Internacional, o jovem designer 
                    catarinense Bruno Faucz nascido em 
                    1986 vivenciou o design de dentro da 
                    indústria por sete anos - tempo em que o 
                    aplicou efetivamente dentro de uma 
                    visão empregada à produção.</p>
            </div>
            <div>
                <p>Conheça os móveis do designer</p>
                <div>
                    <swiper-container ref={swiperRef} init="false">
                        <swiper-slide>
                            <ProductCardSmall/>
                        </swiper-slide>
                        <swiper-slide>
                            <ProductCardSmall/>
                        </swiper-slide>
                        <swiper-slide>
                            <ProductCardSmall/>
                        </swiper-slide>
                        <swiper-slide>
                            <ProductCardSmall/>
                        </swiper-slide>
                    </swiper-container>     
                </div>
            </div>
        </ContainerFeaturedDesigner>
    );
};

const ContainerFeaturedDesigner = styled.div`
        width: 100%;
        height: 650px;
        display: flex;
        margin-bottom: 40px;

        >div:nth-of-type(1){
            width: 50%;
            height: 100%;
            background-image: url(${BgDesigner});
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            >img{
                width: 300px;
                height: 300px;
                border-radius: 50%;
                margin-bottom: 40px;
            }

            >h1{
                text-align: center;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 40px;
                color: white;
                margin-bottom: 5px;
            }

            >p{
                width: 360px;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 400;
                line-height: 25px;
                font-size: 20px;
                color: white;
            }
        }

        >div:nth-of-type(2){
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            >p{
                width: 350px;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 32px;
                margin-bottom: 40px;
                color: black;
            }

            >div:nth-of-type(1){
                width: 100%;
                height: 320px;
                display: flex;
                justify-content: center;

                >div{
                    width: 220px;
                    height: 100%;
                }
            }
        }
`;