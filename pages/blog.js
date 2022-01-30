import React,{useState,useEffect} from 'react'
import ArticleCard from '../components/cards/ArticleCard'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router';
import {API} from "../settings/constants";
import Head from 'next/head'
import Link from 'next/link';
const blog = ({data,props}) => {
   


    const [isLoading, setLoading] = useState(false); //State for the loading indicator
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    useEffect(() => { //After the component is mounted set router event handlers
        Router.events.on('routeChangeStart', startLoading); 
        Router.events.on('routeChangeComplete', stopLoading);

        return () => {
            Router.events.off('routeChangeStart', startLoading);
            Router.events.off('routeChangeComplete', stopLoading);
        }
    }, [])

    


    let content = null;
    if (isLoading)
        content = <div>Loading...</div>;
    else {
                //Generating posts list
        content = (
            <div className="container bg-base-200 mx-auto">
            <h2 className="font-bold text-xl pt-10"></h2>
                <div className=" py-20 grid space-x-6 space-y-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1">
                    {data.results.map(article=>
                         <ArticleCard Title={article.title} Description={article.summary} Alt={article.image_alt} Img={article.image} Slug={article.slug} />
                    )
                   
                    }
                </div>
                <div className="flex justify-center py-20">
               
                <div class="btn-group ">
                {data.current-1!=0 &&(<button onClick={() => Router.push(`blog/?page=${data.current - 1}`)} class="btn btn-outline">Previous</button>)}
                {data.current!=1 &&(<button onClick={() => Router.push(`blog/?page=${1}`)} class="btn btn-outline">{1}</button> )}
                {data.current>3 &&(<button class="btn btn btn-disabled text-black">...</button>)}
                {data.current-1!=0 && data.current-1!=1 &&(<button onClick={() => Router.push(`blog/?page=${data.current - 1}`)} class="btn btn-outline">{data.current-1}</button> )} 
               
                <button class="btn btn-active">{data.current}</button> 
                {data.total_pages!=data.current&&(<button  onClick={() => Router.push(`blog/?page=${data.current + 1}`)} class="btn btn-outline">{data.current+1}</button>)}
                {data.total_pages-data.current>2 && data.total_pages!=data.current+1   &&(<button class="btn btn btn-disabled text-black">...</button>)}
                {data.total_pages-data.current>1 &&(<button onClick={() => Router.push(`blog/?page=${data.total_pages}`)}  class="btn btn-outline">{data.total_pages}</button>)}
                {data.total_pages!=data.current&&(<button onClick={() => Router.push(`blog/?page=${data.current + 1}`)} class="btn btn-outline">Next</button>)}
              </div>

             
              
                </div>
            </div>
        );
    }


    return (
        
        <div className="bg-base-200">
             <Head>
            <title>{`Блог за обзавеждане| страница ${data.current}`}</title>
            <link rel="icon" href="/favicon.ico" />
             </Head>
            <div className="hero min-h-screen bg-accent">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center  hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            Блог
                        </h1>
                        <p className="mb-5">
                            Съвети за добър сън и избор на спални продукти
                        </p>
                    
                    </div>
                </div>
               
            </div>
            
            {content}
        </div>
    )
}

export default withRouter(blog)




export const getServerSideProps = async ({query}) =>{
    console.log(query)
    const page = query.page || 1; //if page empty we request the first page
    let res  = await fetch(`${API}post/?page=${page}`)
    const data = await res.json();
    console.log(data)
    return{
      props:{
        data:data,   
      },
    
  }
  }