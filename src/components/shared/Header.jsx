import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
function Header() {
    return (
        <header className="">
            <div className="flex flex-col gap-4 mb-5 md:flex-row md:justify-between md:items-center">
                <div >
                    <h1 className="text-2xl text-gray-200">Jaegar Resto</h1>
                    <p className="text-gray-400">fecha</p>
                </div>
                <form>
                    <div className="w-full relative" >
                        <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-200" />
                        <input type="text" placeholder="Search for: food " className="bg-[#1F1D2B] py-2 pl-10 pr-4 rounded-lg w-full text-gray-200 outline-none" />
                    </div>
                </form>
            </div>
            <nav className="text-gray-300 flex items-center justify-between lg:justify-start lg:gap-8 border-b mb-6">

                <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:bg-[#ec7c6a] before:absolute before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">Hot Dishes</a>
                <a href="#" className="py-2 pr-4">Cold Dishes</a>
                <a href="#" className="py-2 pr-4">Soup</a>
                <a href="#" className="py-2 pr-4">Grill</a>
                {/* <a href="#" className="  py-2 pr-4 hover:border-[#ec7c6a]">Ice Cream</a>
              <a href="#" className="  py-2 pr-4 hover:border-[#ec7c6a]">Dessert</a> */}
            </nav>
        </header>
    )
}

export default Header