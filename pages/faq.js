import React from 'react'
import Accordeon from '../components/Accordeon'
import Contacts from '../components/cards/Contacts'
import {API} from '../settings/constants'


const faq = ({faqs}) => {
    return (
        <div className="min-h-screen flex flex-col mt-20 items-start container mx-auto px-20">
        <div className="text-center py-5">
        <h1 className="font-bold sm:text-sm md:text-2xl lg:text-3xl ">Често задавани въпроси</h1>
        <h2 className="sm:text-sm md:text-xl lg:text-2xl text-base-300">Насреща сме, за да ти помогнем</h2>
        </div>
       
            <div className="grid  w-full md:grid-cols-3 sm:grid-cols-1">
                <div className=" md:col-span-2  sm:col-span-1 space-y-5 bg-white rounded-2xl">
                 {faqs.map(entry=>
                    <Accordeon Title={entry.title} Content={entry.content}/>
                    )}
                </div>
                <div className="sm:col-span-1 ">
                <Contacts/>
                </div>
        
                </div>
        </div>
    )
}

export default faq


export const getStaticProps = async () =>{

    let res  = await fetch(`${API}faq/`)
    const data = await res.json();
   
    return{
      props:{
        faqs:data,   
      },
      revalidate: 60
  }
  }