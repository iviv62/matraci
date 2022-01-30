import React from 'react'
import SimpleProductCard from '../cards/SimpleProductCard'
import HistorySwiper from '../Swipers/HistorySwiper'
const ProductHistory = () => {
    return (
        
        <div className="bg-base-300 py-20 flex flex-col px-20 " >
        <h3 className="font-bold text-2xl mb-2 text-neutral ">История на търсене</h3>
        <div className="flex flex-row space-x-3">
           
           <HistorySwiper/>
        </div>
        </div>
    )
}

export default ProductHistory
