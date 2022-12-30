import React from 'react'
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
function Car({ showOrder, setShowOrder }) {
    return (
        <div className={`bg-[#1F1D2B] lg:col-span-2 fixed lg:right-0 lg:w-96 w-full h-full transition-all ${showOrder ? "right-0" : "-right-full"}`}>
            <div className="relative pt-16 p-8 h-full">
                <button onClick={() => setShowOrder(false)} className="lg:hidden">
                    <RiCloseLine className="absolute left-4 top-4 box-content text-gray-300 p-3 text-xl rounded-full bg-[#262837]" />
                </button>
                <h2 className="text-xl my-4">Orders #1234567</h2>
                <div className="flex items-center gap-4 flex-wrap mb-4">
                    <button className="bg-[#ec7c6a] rounded-xl py-2 px-4 text-white">
                        Dine in
                    </button>
                    <button className="text-[#ec7c6a] rounded-xl py-2 px-4 border border-gray-500">
                        To Go
                    </button>
                    <button className="text-[#ec7c6a] rounded-xl py-2 px-4 border border-gray-500">
                        Delivery
                    </button>
                </div>
                <div>
                    <div className="grid grid-cols-6 p-4">
                        <h5 className="col-span-4">Item</h5>
                        <h5 className="text-center">Qty</h5>
                        <h5 className="text-center">Price</h5>
                    </div>

                    <div className=" h-[400px] md:h-[700px] lg:h-[500px] overflow-scroll">
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-4">
                                <div className="flex items-center gap-3 col-span-4">
                                    <img src="comida.png" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Speacy seasoned sea...</h5>
                                        <p className="text-xs text-gray-500">$2.29</p>
                                    </div>
                                </div>
                                <div className="text-center"><span>2</span></div>
                                <div className="text-center"><span>$4.58</span></div>
                            </div>
                            <div className="grid grid-cols-6 items-center gap-2">
                                <form className="col-span-5">
                                    <input type="text" className=" text-white w-full bg-[#1F1D2B] outline-none rounded-xl px-4 py-2" placeholder="Order Note...." />
                                </form>
                                <div className="text-center">
                                    <button className="border border-red-500 text-lg p-2 rounded-lg"><RiDeleteBin6Line className="text-red-500" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-4">
                                <div className="flex items-center gap-3 col-span-4">
                                    <img src="comida.png" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Speacy seasoned sea...</h5>
                                        <p className="text-xs text-gray-500">$2.29</p>
                                    </div>
                                </div>
                                <div className="text-center"><span>2</span></div>
                                <div className="text-center"><span>$4.58</span></div>
                            </div>
                            <div className="grid grid-cols-6 items-center gap-2">
                                <form className="col-span-5">
                                    <input type="text" className=" text-white w-full bg-[#1F1D2B] outline-none rounded-xl px-4 py-2" placeholder="Order Note...." />
                                </form>
                                <div className="text-center">
                                    <button className="border border-red-500 text-lg p-2 rounded-lg"><RiDeleteBin6Line className="text-red-500" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-4">
                                <div className="flex items-center gap-3 col-span-4">
                                    <img src="comida.png" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Speacy seasoned sea...</h5>
                                        <p className="text-xs text-gray-500">$2.29</p>
                                    </div>
                                </div>
                                <div className="text-center"><span>2</span></div>
                                <div className="text-center"><span>$4.58</span></div>
                            </div>
                            <div className="grid grid-cols-6 items-center gap-2">
                                <form className="col-span-5">
                                    <input type="text" className=" text-white w-full bg-[#1F1D2B] outline-none rounded-xl px-4 py-2" placeholder="Order Note...." />
                                </form>
                                <div className="text-center">
                                    <button className="border border-red-500 text-lg p-2 rounded-lg"><RiDeleteBin6Line className="text-red-500" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-4">
                                <div className="flex items-center gap-3 col-span-4">
                                    <img src="comida.png" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Speacy seasoned sea...</h5>
                                        <p className="text-xs text-gray-500">$2.29</p>
                                    </div>
                                </div>
                                <div className="text-center"><span>2</span></div>
                                <div className="text-center"><span>$4.58</span></div>
                            </div>
                            <div className="grid grid-cols-6 items-center gap-2">
                                <form className="col-span-5">
                                    <input type="text" className=" text-white w-full bg-[#1F1D2B] outline-none rounded-xl px-4 py-2" placeholder="Order Note...." />
                                </form>
                                <div className="text-center">
                                    <button className="border border-red-500 text-lg p-2 rounded-lg"><RiDeleteBin6Line className="text-red-500" /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="absolute bottom-0 left-0 p-4 bg-[#262837] w-full">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400">Discount</span>
                        <span>$0</span>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-gray-400">subTotal</span>
                        <span>$0</span>
                    </div>
                    <div>
                        <button className="bg-[#ec7c6a] w-full p-2 rounded-lg">Continue to payment </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Car