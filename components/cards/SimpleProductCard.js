import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SimpleProductCard = ({Img,Alt,Title,Price}) => {
    return (
        
        <Link href="/" className="cursor-pointer">
        
        <a className="flex   md:max-w-md sm:max-w-sm h-32  bg-white shadow-lg rounded-lg ">
        
          <div className="relative w-full md:max-w-md sm:max-w-sm">
          <Image
                    layout="fill"
                    objectFit="contain"
                    src={Img}
                    alt={Alt} />
          </div> 
          <div className="w-2/3 p-4 flex flex-col space-y-2 md:max-w-md sm:max-w-sm xs:max-w-xs ">
          <div className="text-gray-900 font-bold text-lg truncate ">{Title}</div>
            
              <div className="text-gray-700 font-bold text-xl">{Price}лв.</div>
              
            
          </div>
        </a>
    </Link>
      
    )
}

export default SimpleProductCard
