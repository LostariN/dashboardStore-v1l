import React from 'react'

function Card({ img, description, price, inventory }) {
    return (
        <div className="flex flex-col items-center bg-[#1F1D2B] rounded-lg p-8 text-center gap-2">
            <img src={img} className=" w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
            <p className="text-gray-300 text-xl">{description}</p>
            <span className="text-gray-400">${price}</span>
            <p className="text-gray-500">{inventory} Bowls available</p>
        </div>
    )
}

export default Card