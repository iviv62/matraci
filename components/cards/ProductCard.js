import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import { gift } from 'react-icons-kit/fa/gift'
import { Icon } from 'react-icons-kit'
import { plus } from 'react-icons-kit/fa/plus'
import { heartO } from 'react-icons-kit/fa/heartO'
import { heart } from 'react-icons-kit/fa/heart'
import { truck } from 'react-icons-kit/fa/truck'
import Link from 'next/link'
import {filterValues} from "../../settings/cache"
import { useReactiveVar } from '@apollo/client';

const ProductCard = ({ data }) => {
    const [stateIcon, setStateIcon] = useState(false);
    const [filterSize, setFilterSize] = useState("")

    const filterArray = useReactiveVar(filterValues)

    const getSize=(data)=>{
        let item =data.sizes.find(item=>item.size.size == filterSize)
        if(item){
            return item.size.size
        }
    }

    const getPriceNoDiscount = (data) =>{
        let item =data.sizes.find(item=>item.size.size == filterSize)
        if(item){
            return item.without_discount_price
        }
    }
    const getPrice = (data) =>{
        let item =data.sizes.find(item=>item.size.size == filterSize)
       
        if(item){
            return item.final_price
        }
    }
    
    useEffect(() => {
    
        let obj = filterValues().filter(item => item.filterType ==="size")
       if( obj.length>0){
           
           setFilterSize(obj[0].value[0])
       }
      
    
    }, [filterArray]);
    

    return (

        <div className="rounded-md  bg-white max-w-[300px] min-w-[200px] mb-20 text-left shadow-md ">

            <div className="indicator flex items-center w-full ">

                <div className="indicator-item indicator-bottom indicator-end space-x-1  mr-16">

                    {/*
                        stateIcon ? (
                            <Icon onClick={() => setStateIcon(false)} size={20} icon={heart} className="text-accent cursor-pointer" />

                        ) : (<Icon onClick={() => setStateIcon(true)} size={20} icon={heartO} className="cursor-pointer" />)
                        */}

                    {data.free_delivery && (
                        <div data-tip="Безплатна доставка" className="tooltip  z-20">
                            <Icon size={20} icon={truck} />
                        </div>
                    )}
                    {data.gift && (
                        <div data-tip="+ подарък" className="tooltip tooltip-left z-30">
                            <Icon size={40} icon={gift} className="text-secondary animate-pulse  " />
                        </div>
                    )}

                </div>
                <div className="relative w-full  h-[200px]">
                    <div className="flex flex-row items-center justify-between ">
                        {
                            data.reduction? (<div className=" relative top-2 left-2  z-10 bg-accent text-white rounded-full h-16 w-16">
                                <div className="flex flex-col h-full  items-center justify-center font-bold">
                                    <span>{`-${data.reduction}%`}</span>
                                </div>
                            </div>):(<div></div>)
                        }

                        <div className="  relative right-2 z-10  bg-secondary p-1 rounded">
                            <div className="flex flex-col h-full  items-center justify-end  ">
                                <span>{data._type.name}</span>
                            </div>
                        </div>
                    </div>
                    <a href={`/products/${data.slug}`}>
                        <Image src={data.product_images[0].image} alt={data.product_images[0].alt} layout="fill" objectFit="contain" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col p-3">
                <h3 className="card-title">{data.title}
                    {
                        data.new_status && (<div className="badge mx-2 badge-sm badge-secondary">Ново</div>)
                    }

                </h3>
                <div className="flex space-x-2 flex-wrap items-end">
                    <div className="font-bold text-sm ">Цена:</div>
                    { data.reduction && (<div className="font-bold text-md line-through text-base-300">{filterSize?getPriceNoDiscount(data) +"лв":data.sizes[0].without_discount_price +"лв"}</div>)}
                    <div className="font-bold text-2xl text-accent">{filterSize?getPrice(data)+ "лв":data.sizes[0].final_price +"лв"}</div>
                </div>

                <div className=" card-actions items-center">
                    <div className="mx-2 text-sm badge badge-secondary ">{filterSize?getSize(data):data.sizes[0].size.size}cm</div>
                    <div className="mx-2 text-sm ">+{data.sizes.length} налични размера</div>
                    <button className="btn btn-sm  btn-outline ">Виж Повече</button>
                </div>
            </div>

        </div>

    )
}

export default ProductCard
