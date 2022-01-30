import React, { useState, Fragment } from 'react';
import AccordeonFilter from '../AccordeonFilter';
import { Menu, Dialog, Transition, } from '@headlessui/react'
import { Icon } from 'react-icons-kit'
import { filter } from 'react-icons-kit/fa/filter'
import { close } from 'react-icons-kit/fa/close'
import { trashO } from 'react-icons-kit/fa/trashO'

const MobileFilter = ({ Sizes, Rigidities, Manufacturers, Types }) => {
    const [open, setOpen] = useState(false)
    const clearFilter=()=>{
        document.querySelectorAll('.filter-input').forEach( el => el.checked = false );
      }



    return (
        <div className='xs:block sm:block md:hidden  lg:hidden xl:hidden container mx-auto'>
            <button onClick={() => setOpen(!open)} className="btn btn-lg btn-outline">
                Филтър
                <Icon size={34} icon={filter} />
            </button>

            {/*DRAWERS*/}
            <Transition.Root show={open} as={Fragment} >
                <Dialog as="div" className="fixed inset-0 overflow-hidden z-50" onClose={setOpen}>
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
                                            <Dialog.Title className=" flex flex-col space-y-5 items-center justify-center text-3xl font-bold text-gray-900">
                                                <span>Филтър</span>
                                                <button onClick={() => clearFilter()} class="btn btn-xs">
                                                    <Icon size={16} icon={trashO} />
                                                    изчисти
                                                </button>

                                            </Dialog.Title>

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
                                        <div className="mt-6 flex flex-col justify-start px-4 sm:px-6 space-y-2   ">
                                            <AccordeonFilter Title={"Размер"} data={Sizes} FilterType={"size"} />
                                            <AccordeonFilter Title={"Твърдост"} data={Rigidities} type="checkbox" Name={"rigidity"} />
                                            <AccordeonFilter Title={"Производители"} data={Manufacturers} type="checkbox" />
                                            <AccordeonFilter Title={"Вид"} data={Types} type="checkbox" />
                                            <AccordeonFilter Title={"Състав"} data={Types} type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </div>);
};

export default MobileFilter;
