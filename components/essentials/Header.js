import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Searchbar from './Searchbar'

import { user } from 'react-icons-kit/fa/user'
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart'

import { truck } from 'react-icons-kit/fa/truck'
import { phone } from 'react-icons-kit/fa/phone'
import { Icon } from 'react-icons-kit'
import {close} from 'react-icons-kit/fa/close'
import Link from "next/link"

import ProductCardCart from '../cards/ProductCardCart'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="navbar  bg-white text-black border-2  w-full">
            <div className="flex-none px-2 mx-2">
                <span className="text-3xl font-bold xs:text-xs md:text-3xl">
                <Link href={`/`}><a>Matraci.org</a></Link>
                </span>
            </div>
            <div className="flex w-full"></div>
            
            <div className="flex space-x-5  ">
            
            <div className="flex items-center space-x-3">
                <Icon size={18} icon={phone} className="animate-pulse " />
                <div className="flex flex-col ">
                <p className=" font-bold text-primary xs:text-xs md:text-md">Телефон за поръчки</p>
                <p className="text-primary  font-bold xs:text-xs md:text-md">0895211273</p>
                </div>
            </div>
             
            </div>
            
            <div className="flex-none px-3">
                <button className="">
                <Link href={`/user/`}>
                <a className='flex flex-row space-x-1'> 
                    <Icon size={24}  icon={user} />
                   <span className='text-md font-semibold sm:hidden xs:hidden md:block lg:block '>Профил</span>
                </a>
                </Link>
                </button>
            </div>
            <div className="flex-none mr-4">
                <button onClick={()=>setOpen(!open)} className="">
                <div className=" indicator  z-0">
                <div className="indicator-item badge badge-primary ">3</div> 
                    <Icon size={24} icon={shoppingCart} />
                    
                </div>
               
                </button> 
            </div>

            {/*DRAWERS */}
            <Transition.Root show={open} as={Fragment} className="z-20">
        <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen max-w-xl">
                  
                  <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <div className="flex flex-row justify-between px-4 sm:px-6">
                      <Dialog.Title className="text-3xl font-bold text-gray-900">Количка</Dialog.Title>
                      <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="">
                      <button
                        type="button"
                        className="rounded-md text-black hover:text-primary focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Затвори</span>
                        <Icon size={32} icon={close} />
                      </button>
                    </div>
                  </Transition.Child>
                    </div>
                    <div className="mt-6 flex flex-col h-[90%] px-4 sm:px-6    ">
                      {/* Replace with your content */}
                        <div className="flex flex-col   overflow-auto   ">
                            <ProductCardCart/>
                            <ProductCardCart/>
                            <ProductCardCart/>
                            <ProductCardCart/>
                            <ProductCardCart/>
                            <ProductCardCart/>
                            <ProductCardCart/>
                            <ProductCardCart/>
                        </div>

                        <div className="flex flex-col space-y-5 mt-20 ">
                        <div className="flex flex-row justify-between ">
                            <span className="font-bold text-xl">Сума</span>
                            <span className="font-bold text-xl">1000 лв.</span>
                        </div>
                        <div className="flex flex-col  ">
                            <button className="btn btn-xl btn-primary">Плати</button>
                            <span className="mx-auto mt-4">или <a className="link link-hover link-primary ">продължи да пазаруваш</a></span>
                        </div>
                        </div>


                      {/* /End replace */}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>


         


             </div>
       

    )
}

export default Header


 