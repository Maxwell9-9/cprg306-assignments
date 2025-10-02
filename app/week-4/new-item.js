'use client'

import { useState } from "react"

export default function NewItem() {
    const [getQuantity, setQuantity] = useState(1)

    const increment = function() {
        if (getQuantity + 1 <= 20) {
            setQuantity(getQuantity + 1)
        }
    }
    const decrement = function() {
        if (getQuantity - 1 >= 1) {
            setQuantity(getQuantity - 1)
        }
        
    }

    return (
        <div className="flex  justify-center min-h-screen bg-black">
            <p className="flex bg-gray-100 items-center justify-center border border-gray-500 rounded w-min h-min p-3">
                <span className="text-black-500 w-12 text-lg font-extrabold text-center border border-gray-500 rounded">{getQuantity}</span>
                {getQuantity > 1 ? <button className="bg-blue-600 text-white p-3 text-xl mx-2 rounded hover:bg-blue-700"onClick={decrement}>-</button> : <button className="bg-gray-600 text-white p-3 text-xl mx-2 rounded hover:cursor-not-allowed" disabled>-</button>}
                {getQuantity < 20 ? <button className="bg-blue-600 text-white p-3 text-xl mx-2 rounded hover:bg-blue-700" onClick={increment}>+</button> : <button className="bg-gray-600 text-white p-3 text-xl mx-2 rounded hover:cursor-not-allowed"disabled>+</button>}
            </p>
        </div>
    )

}