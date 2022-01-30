import React,{useState} from 'react'
import { Transition } from '@headlessui/react'
import SimpleProductCard from "../cards/SimpleProductCard"
import useComponentVisible from '../Hooks/useComponentVisible'

const Searchbar = () => {
  const {ref,isComponentVisible, setIsComponentVisible} = useComponentVisible(false)

  const getSearchData = (e) =>{
    if(e.target.value.length>3){
      setIsComponentVisible(true)
      //get data
    }else{
      setIsComponentVisible(false)
    }
  }

    return (
      <div className=" md:max-w-md sm:max-w-sm ">  
     <div className="pt-2 relative  text-gray-600">
     <input type="search" className="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
       onChange={(e)=>getSearchData(e)}  placeholder="Търси"/>
     <span  className="absolute right-0 top-0 mt-5 mr-4">
       <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
          version="1.1" id="Capa_1" x="0px" y="0px"
         viewBox="0 0 56.966 56.966"  
         width="512px" height="512px">
         <path
           d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
       </svg>
     </span>
     
   </div>
  
<div ref={ref} className={`${isComponentVisible? `block`:'hidden'}  relative md:max-w-md sm:max-w-sm ` }>
<ul className="menu shadow-lg bg-base-100  absolute top-0 right-0 z-10 md:max-w-md sm:max-w-sm overflow-auto h-72">
  
<SimpleProductCard Title={"test dasd dsa sdada dsasda dsdasd"} Price="323" Alt="test" Img="/mattress.png"/>
<SimpleProductCard Title={"test dasd dsa sdada dsasda dsdasd"} Price="323" Alt="test" Img="/mattress.png"/>
<SimpleProductCard Title={"test dasd dsa sdada dsasda dsdasd"} Price="323" Alt="test" Img="/mattress.png"/>
 
</ul>
</div>

   </div>
    )
}

export default Searchbar
