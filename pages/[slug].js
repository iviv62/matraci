import React, { useState, useEffect } from 'react';
import Router, { withRouter, useRouter } from 'next/router';
import { API } from "../settings/constants"
import ProductCard from "../components/cards/ProductCard"
import DesktopFilter from '../components/essentials/DesktopFilter';
import MobileFilter from '../components/essentials/MobileFilter';
import Image from 'next/image';
import { useReactiveVar } from '@apollo/client';
import { filterValues } from '../settings/cache';
import { filter } from 'react-icons-kit/fa/filter';
import Loader from '../components/essentials/Loader';


const category = ({ data, sizes, rigidities, manufacturers, productTypes, kernels }) => {
  const router = useRouter()
  const { slug } = router.query
  const filterArray = useReactiveVar(filterValues);

  //Pagination Functions
  const previous = () => {
    const query = {};

    for (const key of filterArray) {
      let param = "";

      for (let i = 0; i < key.value.length; i++) {
        if (i == key.value.length - 1) {
          param += `${key.value[i]}`
        } else {
          param += `${key.value[i]},`
        }


      }
      if (typeof (param) != undefined) {
        query[key.filterType] = param;
      }

    }
    query["page"] = data.current - 1

    Router.push({
      pathname: `/${slug}`,
      query: query
    })


  }
  const lastPage = () => {
    const query = {};

    for (const key of filterArray) {
      let param = "";

      for (let i = 0; i < key.value.length; i++) {
        if (i == key.value.length - 1) {
          param += `${key.value[i]}`
        } else {
          param += `${key.value[i]},`
        }


      }
      if (typeof (param) != undefined) {
        query[key.filterType] = param;
      }

    }
    query["page"] = data.total_pages

    Router.push({
      pathname: `/${slug}`,
      query: query
    })
  }
  function next() {
    const query = {};

    for (const key of filterArray) {
      let param = "";

      for (let i = 0; i < key.value.length; i++) {
        if (i == key.value.length - 1) {
          param += `${key.value[i]}`
        } else {
          param += `${key.value[i]},`
        }


      }
      if (typeof (param) != undefined) {
        query[key.filterType] = param;
      }

    }
    query["page"] = data.current + 1

    Router.push({
      pathname: `/${slug}`,
      query: query
    })

  }
  const initialPage = ()=>{
    const query = {};

    for (const key of filterArray) {
      let param = "";

      for (let i = 0; i < key.value.length; i++) {
        if (i == key.value.length - 1) {
          param += `${key.value[i]}`
        } else {
          param += `${key.value[i]},`
        }


      }
      if (typeof (param) != undefined) {
        query[key.filterType] = param;
      }

    }
    query["page"] = 1

    Router.push({
      pathname: `/${slug}`,
      query: query
    })

  }


  useEffect(() => {

    const query = {};

    for (const key of filterArray) {
      let param = "";

      for (let i = 0; i < key.value.length; i++) {
        if (i == key.value.length - 1) {
          param += `${key.value[i]}`
        } else {
          param += `${key.value[i]},`
        }


      }
      if (typeof (param) != undefined) {
        query[key.filterType] = param;
      }

    }
    if (filterArray.length > 0) {
      Router.push({
        pathname: `/${slug}`,
        query: query
      })
    }





  }, [filterArray]);




  const [isLoading, setLoading] = useState(false); //State for the loading indicator
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => { //After the component is mounted set router event handlers
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);

    const query = router.query
    let tempArray = []
    for (const [key, val] of Object.entries(query)) {

      if (key != "slug") {
        tempArray.push({
          filterType: key,
          value: [val]
        })
      }

    }
    if (tempArray.length > 0) {
      filterValues(tempArray)
    }


    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      filterValues([])
    }
  }, [])


  let content = null;
  if (isLoading)
    content = (
      <Loader/>
     
    )
  else {
    content = (
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-1 w-full mx-auto'>
          
        {
          data.results.length==0 ? (<div className='text-3xl text-center text-bold'> Не са намерени резултати</div>):
          data.results.map((product) => <div><ProductCard key={product.id} data={product} /> </div>
          )
        }
      </div>
    )
  }
  return (
    <div className='flex flex-col  '>

      <div className='w-full mt-4 mx-auto   md:block sm:block xs:hidden lg:container '>
        <Image src={"/long_banner.jpg"} priority={true} alt={"Hello world"} height={100} width={1280} layout="responsive" objectFit="contain" className="" />
      </div>
      <div className='sm:text-center xs:text-center md:text-left  text-3xl font-bold text-neutral container py-5 mx-auto'>Матраци</div>
      <div><MobileFilter Sizes={sizes} Rigidities={rigidities} Manufacturers={manufacturers} Types={productTypes} Kernels={kernels} /></div>
      <div className='container mx-auto  mt-10  flex flex-row space-x-5'>

        <DesktopFilter Sizes={sizes} Rigidities={rigidities} Manufacturers={manufacturers} Types={productTypes} Kernels={kernels} />
        <div className='w-full'>{content}</div>
        

      </div  >
      <div className=' flex justify-center py-10 md:ml-32 sm:ml-0' >
        <div className="btn-group ">
          {data.current - 1 != 0 && (<button onClick={() => previous()} className="btn btn-outline">Previous</button>)}
          {data.current != 1 && (<button onClick={() => initialPage()} className="btn btn-outline">{1}</button>)}
          {data.current > 3 && (<button className="btn btn btn-disabled text-black">...</button>)}
          {data.current - 1 != 0 && data.current - 1 != 1 && (<button onClick={() => previous()} className="btn btn-outline">{data.current - 1}</button>)}

          <button className="btn btn-active">{data.current}</button>
          {data.total_pages != data.current && (<button onClick={() => next()} className="btn btn-outline">{data.current + 1}</button>)}
          {data.total_pages - data.current > 2 && data.total_pages != data.current + 1 && (<button className="btn btn btn-disabled text-black">...</button>)}
          {data.total_pages - data.current > 1 && (<button onClick={() => lastPage()} className="btn btn-outline">{data.total_pages}</button>)}
          {data.total_pages != data.current && (<button onClick={() => next()} className="btn btn-outline">Next</button>)}
        </div>
      </div>
    </div>
  )
};

export default withRouter(category);


export const getServerSideProps = async ({ query }) => {

  const { slug } = query
  console.log(query)


  const page = query.page || 1
  const size = query.size || ""
  const rigidity = query.rigidity || ""
  const manufacturer = query.manufacturer || ""
  const kernel = query.kernel || ""
  const type =query.producttype || ""


  //page building
  let uri = `${API}products/?category=${slug}&page=${page}&size=${size}&rigidity__id__in=${rigidity}&manufacturer__id__in=${manufacturer}&kernel__id__in=${kernel}&producttype=${type}`
  uri = encodeURI(uri)
  let res = await fetch(uri)
  const data = await res.json();



  //fetch filters 
  let resAll = await fetch(`${API}filter/?category=${slug}`)
  const all = await resAll.json()
  


  return {
    props: {
      data: data,
      sizes: all.sizes,
      rigidities: all.rigidity,
      manufacturers: all.manufacturers,
      productTypes: all._type,
      kernels:all.kernel
    },

  }
}