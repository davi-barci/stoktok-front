import styled from "styled-components";
import SliderCategories from "./SliderCategories";
import DiscountsSection from "./DiscountsSection";
import FeaturedSection from "./FeaturedSection";
import NewsSection from "./NewsSection";
import SeeMoreSection from "./SeeMoreSection";
import FeaturedDesignerSection from "./FeaturedDesignerSection";
import NewsletterSection from "./NewsletterSection";
import CarouselAutoplay from "./CarouselAutoplay";

export default function Home(){
    return(
        <>
            <CarouselAutoplay/>
            <SliderCategories/>
            <DiscountsSection/>
            <FeaturedSection/>
            <NewsSection/>
            <SeeMoreSection/>
            <FeaturedDesignerSection/>
            <NewsletterSection/>
        </>
    );
}
