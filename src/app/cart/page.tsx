import React from 'react'
import TableCart from './../../components/cart components/TableCart';
import { Circle } from 'lucide-react';

export default function CartPage() {
  return (
    
    <>
    <div className="mt-3 mb-6 text-center">
  <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
   Cart
  </h2>

  <div className="flex items-center justify-center gap-4 text-3xl font-bold mt-2">
    <span className="h-[2px] w-16 bg-gradient-to-r from-orange-700 to-yellow-500"></span>
    <span className="text-yellow-500">
      <Circle />
    </span>
    <span className="h-[2px] w-16 bg-gradient-to-r from-yellow-500 to-orange-700"></span>
  </div>
</div>
    <TableCart/></>
  )
}
