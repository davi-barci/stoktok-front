import sliderImages from "../../../constants/SliderImages";
import { useEffect, useRef } from "react";

export default function CarouselAutoplay(){
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        slidesPerView: 1,
        speed: 500,
        autoplay: {
          delay: 3000,
        },
        loop: true,
        pagination: {
            clickable: true
        },
        injectStyles: [
            `
              .swiper-pagination-bullet{
                width: 15px;
                height: 15px;
                background-color: #30775B;
              }

              .swiper-wrapper{
                height: 550px;
              }

              swiper-slide img{
                height: 550px;
                width: 100%;
                object-fit: cover;
              }
          `,
        ],
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);

    return(
            <swiper-container ref={swiperRef} init="false">
                {sliderImages.map((imagem, index) => 
                    <swiper-slide key={index}>
                        <img src={imagem}/>
                    </swiper-slide>
                )}
            </swiper-container>
    );
}
