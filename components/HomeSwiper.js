import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Link from 'next/link';
import useWindowDimensions from "../components/Hooks/useWindowDimensions";

const HomeSwiper = ({data}) => {
    const { height, width } = useWindowDimensions();
    const adjustHeight=(width,height)=>{
      if(width>500){
        return width/3
      }else{
        return width/3
      }
    }
    
    const [pause, setPause] = React.useState(false)
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        loop: true,
        duration: 3000,
        dragStart: () => {
        setPause(true)
        },
        dragEnd: () => {
        setPause(false)
        },
        slideChanged(s) {
        setCurrentSlide(s.details().relativeSlide)
        },
    })

    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
          setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
          setPause(false)
        })
      }, [sliderRef])
    
      React.useEffect(() => {
        timer.current = setInterval(() => {
          if (!pause && slider) {
            slider.next()
          }
        }, 6000)
        return () => {
          clearInterval(timer.current)
        }
      }, [pause, slider])

    return (
        <div className="flex flex-col " >
        <div className="navigation-wrapper w-full  ">
          <div ref={sliderRef} className="keen-slider " style={{width:`${width-10}px`,height:`${width/3}px`}}>
            {data.map(banner=>
           
            <a href={banner.link} key={banner.id} className="keen-slider__slide cursor-pointer">
            <Image src={banner.image} priority={true} quality={70} alt={banner.alt} layout="fill" objectFit="fill"    className=""    />
            </a>
           
            )}
            
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
        {slider && (
          <div className="dots">
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                />
              )
            })}
          </div>
        )}
      </div>
    )
      
}

function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--left" + disabeld}
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
        className={"arrow arrow--right" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    )
  }

export default HomeSwiper
