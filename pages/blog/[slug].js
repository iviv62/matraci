import React from 'react'
import Head from 'next/head'
import {API} from "../../settings/constants"
import ReactHtmlParser from 'react-html-parser';

const article = ({post}) => {
  
    return (
        <div className="flex flex-col min-h-screen">
        <Head>
            <title>hi</title>
            <meta name="description" content={post.meta_description}/>
            <title>{post.meta_title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta charset="UTF-8"></meta>
           </Head>
        
    <main className="">
        
    <h1 class="font-bold text-center text-3xl py-5 px-5 ">{post.title}</h1>
      <div className="px-4 lg:px-0  text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        {ReactHtmlParser(post.content)}

      </div>
    </main>
            
        </div>
    )
}

export default article


export const getStaticPaths = async ()=>{
    let res  = await fetch(`${API}all-posts/`)
    const data = await res.json();
    
   
    const paths = data.map((post)=>{
        return{
            params:{
                id: post.id,
                slug:post.slug,
                
            }
            
        }
    })

    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug
    const res = await fetch(`${API}post/`+slug)
    const data = await res.json()
    return{
        props:{post:data}
        ,revalidate: 60
    }
   
}
