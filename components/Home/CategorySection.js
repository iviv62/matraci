import React from 'react'
import Category from './Category'
const categories=[
    {
        name:"Матраци",
        link:"/матраци",
        img:"/mattress.png"
    },
    {
        name:"Възглавници",
        link:"/възглавници",
        img:"/pillow2.png",
        alt:"възглавници"
    },
    {
        name:"Топ Матраци",
        link:"/матраци",
        img:"/top-matrak2.png"
    },
    {
        name:"Рамки",
        link:"/рамки",
        img:"/ramki.png",
        alt:"Рамки"
    },
]

const CategorySection = ({data}) => {

    return (
        <div className="w-full flex flex-col container py-10 ">
        <h3 className="text-5xl font-bold pb-10">Категории</h3> 
       
         
        <div className="grid grid-cols-2 gap-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ">
        {data.map(category=><Category key={category.id} name={category.name} link={`categories/`+category.slug} image={category.image} alt = {category.image_alt}/>)}
        </div>
            
       
        </div>
    )
}

export default CategorySection
