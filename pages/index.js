import Head from 'next/head'
import Footer from '../components/essentials/Footer.js'
import Header from '../components/essentials/Header.js'
import Navbar from '../components/essentials/Navbar.js'
import HomeSwiper from '../components/HomeSwiper.js'
import InfoSection from '../components/essentials/InfoSection.js'
import CategorySection from '../components/Home/CategorySection.js'
import ProductCard from '../components/cards/ProductCard.js'
import ProductSwiper from '../components/Swipers/ProductSwiper.js'
import ManufacturerSwiper from '../components/Swipers/ManufacturerSwiper.js'
import {API} from "../settings/constants"

export default function Home({categories, banners,products, manufacturers}) {
  console.log(manufacturers)
  return (
    <div className="flex flex-col  min-h-screen ">
      <Head>
        <title>Matraci</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSwiper data={banners}/>
      <main className="flex flex-col items-center w-full flex-1 px-20 text-center bg-base-200">
      
      <InfoSection/>

      <CategorySection data={categories}/>
      <div className="flex flex-col">
      <div className="font-bold  text-3xl self-start mt-2 mb-2" >Най-продавани</div>
      <ProductSwiper data={products}/>
      </div>
    
      <div className="flex flex-col">
      <div className="font-bold  text-3xl self-start mt-2 mb-2" >Най-промоционални</div>
      <ProductSwiper data ={products}/>
      </div> 
      <ManufacturerSwiper data ={manufacturers}/>
      </main>
        
    </div>
  )
}

export const getStaticProps = async () =>{

  let res  = await fetch(`${API}categories/`)
  const data = await res.json();

  let res1  = await fetch(`${API}home-swiper-banners/`)
  const banners = await res1.json();

  //get data for swipers
  let res2 = await fetch(`${API}products/`)
  const products= await res2.json();

  let res3 = await await fetch(`${API}manufacturers/`)
  const manufacturers= await res3.json();
  


  return{
    props:{
      categories:data,
      banners:banners,
      products:products.results,
      manufacturers:manufacturers
    },
    revalidate: 60
}
}