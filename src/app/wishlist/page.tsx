import React from 'react'
import WishlistCard from '@/components/wishlist-components/WishlistCard'
import { Circle } from 'lucide-react'

export default function WishlistPage() {
  return (
    <div>
      <h2 className="mt-3 mb-6 text-center text-3xl font-bold text-gray-700 dark:text-gray-300">
        Wishlist
        <p className="flex items-center justify-center gap-4 text-3xl font-bold mt-2">
          <span className="h-[2px] w-16 bg-gradient-to-r from-orange-700 to-yellow-500"></span>
          <span className="text-yellow-500">
            <Circle></Circle>
          </span>
          <span className="h-[2px] w-16 bg-gradient-to-r from-yellow-500  to-orange-700"></span>
        </p>
      </h2>
        <WishlistCard></WishlistCard>
    </div>
  )
}
