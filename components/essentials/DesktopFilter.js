import React from 'react';
import AccordeonFilter from '../AccordeonFilter';
import { useReactiveVar } from '@apollo/client';
import { filterValues } from '../../settings/cache';
import Router, { withRouter, useRouter } from 'next/router';

const DesktopFilter = ({Sizes,Rigidities,Manufacturers,Types, Kernels}) => {
  const router = useRouter()
  const {slug } = router.query

  

  const clearFilter=()=>{
    
    filterValues([])
    document.querySelectorAll('.filter-input').forEach( el => el.checked = false );
    Router.push({
      pathname: `/categories/${slug}`,   
      })
  }
  
  return (
    <div className='flex flex-col w-56 space-y-1 mb-6 xs:hidden sm:hidden md:block lg:block xl:block'>
      <div className='flex flex-row justify-between'>
        <span className='font-bold text-neutral text-center '>Филтър</span>
        <button onClick={()=>clearFilter()} className="btn btn-xs">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 mr-1 stroke-current">   
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>                       
  </svg>
     изчисти
    
</button>

      </div>
   

    <AccordeonFilter Title={"Размер"} data={Sizes} FilterType={"size"} type={"radio"} Name="size" />
    <AccordeonFilter Title={"Твърдост"} data={Rigidities} type="checkbox" FilterType={"rigidity"} />
    <AccordeonFilter Title={"Производители"} data={Manufacturers} FilterType={"manufacturer"} type="checkbox"  />
    <AccordeonFilter Title={"Вид"} data={Types} type="radio" FilterType={"producttype"} />
    <AccordeonFilter Title={"Състав"} data={Kernels} type="checkbox" FilterType={"kernel"}  />
  </div>
  );
};

export default DesktopFilter;
