'use client'

import { useState } from "react"

export default function NewItem() {
    const [quantity, setQuantity] = useState(1)

    const increment = function() {
        if (quantity + 1 <= 20) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = function() {
        if (quantity - 1 >= 1) {
            setQuantity(quantity - 1)
        }
        
    }

    return (
        <div className="flex  justify-center min-h-screen bg-black">
            <p className="flex bg-gray-100 items-center justify-center border border-gray-500 rounded w-min h-min p-3">
                <span className="text-black-500 w-12 text-lg font-extrabold text-center border border-gray-500 rounded">{quantity}</span>
                
                <button className={`text-white p-3 text-xl mx-2 rounded ${quantity > 1 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:cursor-not-allowed"}`} onClick={decrement} disabled={!(quantity > 1)}>-</button>
                <button className={`text-white p-3 text-xl mx-2 rounded ${quantity < 20 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:cursor-not-allowed"}`} onClick={increment} disabled={!(quantity < 20)}>+</button>
            </p>
        </div>
    )

}