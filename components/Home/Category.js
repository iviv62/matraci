import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Category = ({name, link, alt, image}) => {


    return (
        
        <Link href={link} >
            <a>
        <div className="bg-white py-5 relative w-full h-96  hover:shadow-lg cursor-pointer    ">
            <div className="relative text-3xl font-bold top-2 z-10 ">{name}</div>
            
            <div className={'image-container  '}>
            <Image src={image}   alt="mattress" layout="fill" objectFit="contain" alt={alt}  className={'image   '} />
            </div>
        </div>
        </a>
        </Link>
    )
}

export default Category
