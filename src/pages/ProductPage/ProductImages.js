import styled from "styled-components";
import {useState, useRef, useEffect} from "react";

export default function ProductImages(props){
    const [imageSelected, setImageSelected] = useState(props.images[0]);
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [imgOffsetLeft, setImgOffsetLeft] = useState(null);
    const [imgOffsetTop, setImgOffsetTop] = useState(null);
    const glassDimension = 100; 
    const myDivRef = useRef(null);

    useEffect(() => {
        if (myDivRef.current) {
          setImgOffsetLeft(myDivRef.current.offsetLeft);
          setImgOffsetTop(myDivRef.current.offsetTop);
        }
    }, [myDivRef]);

    function handleMouseOver() {
        setIsVisible(true);
      }
    
    function handleMouseOut() {
        setIsVisible(false);
    }
    
    function handleMouseMove(event) {
        setMousePosition({
            x: event.clientX,
            y: event.clientY + window.scrollY,
        });
    }

    return (
        <>
            <ContainerAllImages>
                <img src={props.images[0]} onClick={() => setImageSelected(props.images[0])}/>
                <img src={props.images[1]} onClick={() => setImageSelected(props.images[1])}/>
                <img src={props.images[2]} onClick={() => setImageSelected(props.images[2])}/>
            </ContainerAllImages>
            <ContainerSelectedImage 
                image={imageSelected} 
                isVisible={isVisible} 
                glassDimension={glassDimension} 
                mousePosition={mousePosition} 
                imgOffsetLeft={imgOffsetLeft} 
                imgOffsetTop={imgOffsetTop} 
                imgWidth={375} 
                imgHeight={487}
            >
                <div
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onMouseMove={handleMouseMove}
                    ref={myDivRef}
                />
                <div/>
            </ContainerSelectedImage>
        </>
    );
}

const ContainerAllImages = styled.div`
    width: 164px;
    height: 100%;
    margin-right: 21px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    >img{
        width: 151px;
        height: 155px;
        border-radius: 3px;
        object-fit: cover;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    }

`;

const ContainerSelectedImage = styled.div`
    width: 375px;
    height: 100%;
    margin-right: 41px;
    display: flex;
    align-items: center;

    >div:nth-of-type(1){
        position: relative;
        width: 375px;
        height: 487px;
        border-radius: 3px;
        background: url(${props => props.image}) center center no-repeat;
        background-size: cover;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        -webkit-transition: all 1s ease-out;
        -moz-transition: all 1s ease-out;
        transition: all 1s ease-out;
    }

    >div:nth-of-type(2){
        position: absolute;
        display: ${props => props.isVisible ? "block" : "none"};
        pointer-events: none;
        border-radius: 100%;
        border: 5px solid rgba(85, 85, 85, .4);
        width: ${props => `${props.glassDimension}px`};
        height: ${props => `${props.glassDimension}px`};
        background-image: url(${props => props.image});
        background-position: ${props => `${100 * (props.mousePosition.x - props.imgOffsetLeft) / props.imgWidth}% ${100 * (props.mousePosition.y - props.imgOffsetTop) / props.imgHeight}%`};
        left: ${props => `${props.mousePosition.x - props.glassDimension / 2}px`};
        top: ${props => `${props.mousePosition.y - props.glassDimension / 2}px`};
    }
`;