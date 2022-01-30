import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import ProductCard from '../cards/ProductCard'

const ProductSwiper = ({data}) => {

    const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef,slider] = useKeenSlider({
    slidesPerView: 1,
    spacing:20,
    loop: true,
    mode: "free",
    breakpoints: {
      "(min-width: 640px)": {
        slidesPerView: 1,
        spacing:10,
        mode: "free-snap",
      },
      "(min-width: 768px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 4,
        mode: "free-snap",
      },
     
    },
    slideChanged(s) {
        setCurrentSlide(s.details().relativeSlide)
      },
   
   
  })
    return (
        <div className=" w-full container justify-center ">
      <div className="navigation-wrapper  ">
        <div ref={sliderRef} className="keen-slider">
          {
            data.map((product)=><div className='keen-slider__slide '><ProductCard data={product}  /></div>)
          }
          
          
        
        </div>
        {slider && (
            <>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
              />
            </>
          )}
        </div>
        
       
    
    </div>
    )
}


  
export default ProductSwiper

function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--left bg-neutral opacity-30 hover:opacity-100 p-2" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    )
  }
  
function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--right bg-neutral opacity-30 hover:opacity-100 p-2" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    )
  }