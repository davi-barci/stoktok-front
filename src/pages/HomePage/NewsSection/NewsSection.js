import styled from "styled-components";
import { useEffect, useRef, useContext } from "react";
import ProductCardMedium from "../ComponentsProducts/ProductCardMedium";
import ProductsContext from "../../../contexts/Products.Context";

export default function NewsSection(){
    const swiperRef = useRef(null);
    const { products } = useContext(ProductsContext);

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
                height: 400px;
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
    return(
        <ContainerNews>
            <p>Novidades para você</p>
            <div>
                <swiper-container ref={swiperRef} init="false">
                    {(products !== null) && products.filter(prod => prod.category === "news").map((product, index) =>
                        <swiper-slide key={index}>
                            <ProductCardMedium name={product.name} image={product.images[0]} price={product.price} id={product._id} discount={product.discount}/>
                        </swiper-slide> 
                    )}
                </swiper-container> 
            </div>
        </ContainerNews>
    );
};

const ContainerNews = styled.div`
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
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;

            >div{
                width: 295px;
                height: 100%;
                background-color: grey;
            }
        }
`;