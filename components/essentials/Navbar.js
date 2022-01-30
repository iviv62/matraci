import React from 'react'
import { Icon } from 'react-icons-kit'

import {ic_menu} from 'react-icons-kit/md/ic_menu'
import { Menu,Dialog, Transition } from '@headlessui/react'
import {ic_king_bed_twotone} from 'react-icons-kit/md/ic_king_bed_twotone'
import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import pillow from '../../public/pillow.png'
import top from '../../public/top-matrak.png'
import Link from 'next/link'
import {close} from 'react-icons-kit/fa/close'
import Searchbar from './Searchbar'
import {chevronDown} from 'react-icons-kit/fa/chevronDown'

const Navbar = () => {
  const [open, setOpen] = useState(false)
    return (
        <div className="navbar mb-2 shadow-lg bg-white w-full text-neutral">

            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch hidden lg:flex">
                <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full btn btn-ghost btn-sm rounded-btn font-bold">
            Продукти
            
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-10 absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-secondary' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2  text-lg font-semibold`}
                  >
                  <Icon size={48} icon={ic_king_bed_twotone} className="mr-4"  />
                    Матраци
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-secondary ' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2  text-lg font-semibold`}
                  >
                  <Image src={pillow} alt="Pillow" className="mr-10" />
                    <span className="ml-4">Възглавници</span>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-secondary ' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2  text-lg font-semibold`}
                >
                <Image src={top} alt="Pillow" className="mr-10" />
                  <span className="ml-4">Топ Матраци</span>
                </button>
              )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-secondary ' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2  text-lg font-semibold`}
                >
                <Image src={top} alt="Pillow" className="mr-10" />
                  <span className="ml-4">Рамки</span>
                </button>
              )}
              </Menu.Item>
            </div>
            
          </Menu.Items>
        </Transition>
      </Menu>
                   
                    <a className="btn btn-ghost btn-sm rounded-btn font-bold">
                        Производители
                    </a>
                    <a className="btn btn-ghost btn-sm rounded-btn text-red-600 font-bold">
                        Промоции
                    </a>
                    <a className="btn btn-ghost btn-sm rounded-btn font-bold">
                        Доставка
                    </a>
                    <a className="btn btn-ghost btn-sm rounded-btn font-bold">
                        Методи на плащане
                    </a>                    

                </div>
                <Icon onClick={()=>setOpen(!open)} className="xs:visible sm:visible md:visible lg:invisible xl:invisible 2xl:invisible cursor-pointer " size={26} icon={ic_menu}  />   
            </div>
            

            <div className="navbar-end items-end ">
            
             <Searchbar/>
            
            </div>


            {/*DRAWERS*/}
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
                          <Dialog.Title className="text-3xl font-bold text-gray-900">Меню</Dialog.Title>
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
                        <div className="mt-6 flex flex-col justify-start px-4 sm:px-6    ">
                        <a className="btn btn-ghost btn-sm rounded-btn text-red-600 font-bold">
                            Промоции
                        </a>

                        {/*dropdown*/}
                        <Dropdown/>

                        <a className="btn  btn-ghost btn-sm rounded-btn font-bold">
                        Производители
                        </a>
                        
                        <a className="btn btn-ghost btn-sm rounded-btn font-bold">
                            Доставка
                        </a>
                        <a className="btn btn-ghost btn-sm rounded-btn font-bold">
                            Методи на плащане
                        </a>        
                           
    
    
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

export default Navbar


function Dropdown() {
  return (
    <div className="w-full ">
      <div className="   bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex uppercase w-full justify-center items-center space-x-5 px-4 py-2 text-sm font-medium text-primary bg-secondaty rounded-md focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 hover:bg-base-300 hiver:rounded-full">
                <span>Продукти</span>
                <Icon size={15} icon={chevronDown} className={`${
                  open ? 'transform rotate-180 mt-2' : 'mb-2'
                }  text-primary  flex justify-center items-center ` }  />
                
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2">
              <button
              className={`bg-base-200
                  text-gray-900 group flex rounded-md items-center w-full px-2 py-2  text-lg font-semibold hover:bg-secondary`}
            >
            <Image src={top} alt="Pillow" className="mr-10" />
              <span className="ml-4">Рамки</span>
            </button>
            <button
            className={`bg-base-200
                text-gray-900 group flex rounded-md items-center w-full px-2 py-2  text-lg font-semibold hover:bg-secondary`}
          >
          <Image src={top} alt="Pillow" className="mr-10" />
            <span className="ml-4">Рамки</span>
          </button>
          <button
          className={`bg-base-200
              text-gray-900 group flex rounded-md items-center w-full px-2 py-2  text-lg font-semibold hover:bg-secondary`}
        >
        <Image src={top} alt="Pillow" className="mr-10" />
          <span className="ml-4">Рамки</span>
        </button>
        <button
        className={`bg-base-200
            text-gray-900 group flex rounded-md items-center w-full px-2 py-2  text-lg font-semibold hover:bg-secondary`}
      >
      <Image src={top} alt="Pillow" className="mr-10" />
        <span className="ml-4">Рамки</span>
      </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        
       
      </div>
    </div>
  )
                
}