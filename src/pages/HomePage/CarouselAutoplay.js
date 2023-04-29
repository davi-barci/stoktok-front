import styled from "styled-components";
import sliderImages from "../../constants/SliderImages";

export default function CarouselAutoplay(){
    return(
        <swiper-container slides-per-view="1" speed="500" autoplay-delay="2000" loop="true" pagination="true" style={{height: "550px"}}>
            <swiper-slide style={{backgroundColor: "green", display: "flex", justifyContent: "center", alignItens: "center"}}>
                <img src={sliderImages[0]} style={{width:"100%", height:"550px", objectFit: "cover"}}/>
            </swiper-slide>
            <swiper-slide style={{backgroundColor: "green", display: "flex", justifyContent: "center", alignItens: "center"}}>
                <img src={sliderImages[1]} style={{width:"100%", height:"550px", objectFit: "cover"}}/>
            </swiper-slide>
            <swiper-slide style={{backgroundColor: "green", display: "flex", justifyContent: "center", alignItens: "center"}}>
                <img src={sliderImages[2]} style={{width:"100%", height:"550px", objectFit: "cover"}}/>
            </swiper-slide>
            <swiper-slide style={{backgroundColor: "green", display: "flex", justifyContent: "center", alignItens: "center"}}>
                <img src={sliderImages[3]} style={{width:"100%", height:"550px", objectFit: "cover"}}/>
            </swiper-slide>
        </swiper-container>
    );
}

