import React,{ useState } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'

const ManufacturerCard = ({data}) => {
    const [isShowing, setIsShowing] = useState(false)
    return (
        <div className="mb-2 cursor-pointer keen-slider__slide ">
        <div 
            onMouseEnter={() => setIsShowing((isShowing) => !isShowing)}
            onMouseLeave={() => setIsShowing((isShowing) => !isShowing)}
            className={'relative h-[200px] w-[200px]  border-2 bg-white '}>
            <Image src={data.image}   alt="mattress" layout="fill" objectFit="contain" alt={data.alt}  className={`image  ${isShowing && 'blur-sm'}  `} />
            <Transition
            className="relative"
            show={isShowing}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
        <div className="relative bottom-0 h-10 bg-base-300  text-2xl text-black  w-full text-center font-bold">{data.name}</div>
        </Transition>
            
            
            
            
        </div>
        </div>
    )
}

export default ManufacturerCard
