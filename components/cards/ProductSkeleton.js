import React from 'react';

const ProductSkeleton = () => {
  return (
   

   
    <div className="w-64 bg-white rounded shadow-2xl">
  
    
      <div className="h-48 bg-gray-200 rounded-tr rounded-tl animate-pulse"></div>
  
      <div className="p-5">
   
        <div className="h-6 rounded-sm bg-gray-200 animate-pulse mb-4"></div>
  
      
        <div className="grid grid-cols-4 gap-1">
          <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
  
          <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
  
          <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
        </div>
  
      </div>
  
    </div>
  

  )
};

export default ProductSkeleton;
