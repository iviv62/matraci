import React, { useState } from 'react'
import Image from "next/image"


const ProductCardCart = () => {
    const [counter, setCounter] = useState(1);
    const [price, setPrice] = useState(500);

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="flex justify-between mt-6 mb-6 ">
        <div className="relative w-[100px] h-[100px] border-2 border-gray-100">
        <Image src="/mattress.png" alt="mattress" layout="fill" objectFit="contain" />
    </div>
            
            <div className="ml-2 flex flex-col justify-between">
            
                <h3 className="font-semibold text-lg max-w-sm">Матрак iZone 7 NEW 21 см, двулицев </h3>
                <div className="font-medium text-md text-gray-400">размер 120x80</div>
                <div className="flex flex-row space-x-3">
                    <span>{`Брой ${counter}`}</span>
                    <button onClick={() => increment()} className="btn btn-primary btn-square btn-xs">+</button>
                    <button onClick={() => decrement()} className="btn btn-primary btn-outline btn-square btn-xs ">-</button>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end">
            <span className="font-bold">{`${price*counter} лв.`}</span>
            <span className="font-bold text-primary cursor-pointer">Премахни</span>
            </div>
        </div>
    )
}

export default ProductCardCart
