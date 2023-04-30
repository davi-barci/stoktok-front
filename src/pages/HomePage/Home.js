import SliderCategories from "./Banners/SliderCategories";
import DiscountsSection from "./DiscountsSection/DiscountsSection";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import NewsSection from "./NewsSection/NewsSection";
import SeeMoreSection from "./SeeMoreSection/SeeMoreSection";
import FeaturedDesignerSection from "./FeaturedDesignerSection/FeaturedDesignerSection";
import NewsletterSection from "./NewsletterSection/NewsletterSection";
import CarouselAutoplay from "./Banners/CarouselAutoplay";
import { register } from "swiper/element/bundle";

register();

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
