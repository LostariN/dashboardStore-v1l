import React from 'react'
import { RiHome6Line, RiPercentFill, RiPieChartLine, RiMailLine, RiNotificationLine, RiSettings4Line, RiLogoutCircleLine } from "react-icons/ri";


function SideBar({ showMenu }) {

    return (
        <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-4 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
            <div>
                <ul className='pl-4'>
                    <li>
                        <h1 className='text-2xl text-gray-300 font-bold text-center my-5 uppercase'>logo</h1>
                    </li>
                    <li className='p-4 hover:bg-[#262837] group transition-colors'>
                        <a href="#" className='group-hover:bg-[#ec7c6a] rounded-xl text-[#ec7c6a] p-4 flex justify-center group-hover:text-white transition-colors'>
                            <RiHome6Line className='text-2xl' />
                        </a>
                    </li>
                    <li className='p-4 hover:bg-[#262837] group transition-colors'>
                        <a href="#" className='group-hover:bg-[#ec7c6a] rounded-xl text-[#ec7c6a] p-4 flex justify-center group-hover:text-white transition-colors'>
                            <RiPercentFill className='text-2xl' />
                        </a>
                    </li>
                    <li className='p-4 hover:bg-[#262837] group transition-colors'>
                        <a href="#" className='group-hover:bg-[#ec7c6a] rounded-xl text-[#ec7c6a] p-4 flex justify-center group-hover:text-white transition-colors'>
                            <RiPieChartLine className='text-2xl' />
                        </a>
                    </li>
                    <li className='p-4 hover:bg-[#262837] group transition-colors'>
                        <a href="#" className='group-hover:bg-[#ec7c6a] rounded-xl text-[#ec7c6a] p-4 flex justify-center group-hover:text-white transition-colors'>
                            <RiMailLine className='text-2xl' />
                        </a>
                    </li>
                    <li className='p-4 hover:bg-[#262837] group transition-colors'>
                        <a href="#" className='group-hover:bg-[#ec7c6a] rounded-xl text-[#ec7c6a] p-4 flex justify-center group-hover:text-white transition-colors'>
                            <RiNotificationLine className='text-2xl' />
                        </a>
                    </li>
                    <li className='p-4 hover:bg-[#262837] group transition-colors'>
                        <a href="#" className='group-hover:bg-[#ec7c6a] rounded-xl text-[#ec7c6a] p-4 flex justify-center group-hover:text-white transition-colors'>
                            <RiSettings4Line className='text-2xl' />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='pl-4'>
                    <li className='p-4 hover:bg-[#262837] group transition-colors'>
                        <a href="#" className='group-hover:bg-[#ec7c6a] rounded-xl text-[#ec7c6a] p-4 flex justify-center group-hover:text-white transition-colors'>
                            <RiLogoutCircleLine className='text-2xl' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar