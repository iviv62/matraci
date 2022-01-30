import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ArticleCard = ({Img,Alt,Title,Description,Slug}) => {
    return (
        <Link href={"/blog/"+Slug}>
        <a>
        <div className="flex flex-col md:max-w-md sm:max-w-sm bg-white hover:shadow-xl cursor-pointer">
        <div className="relative w-full md:max-h-md sm:max-h-sm h-72 max-h-[400px] ">
        <Image
                  layout="fill"
                  objectFit="contain"
                  src={Img}
                  alt={Alt} />
        </div>
        <div className="px-5 py-5">
        <h2 className="font-bold text-xl">{Title}</h2> 
        <p className="font-semibold text-base-300 text-lg py-5">{Description}</p>
        </div>
        </div>
        </a>
        </Link>
    )
}

export default ArticleCard
