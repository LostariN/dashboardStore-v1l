import { useState } from "react";
import { RiUser3Line, RiAddLine, RiMenu3Fill, RiPieChartLine, RiCloseLine, RiSearch2Line, RiArrowDownSLine } from "react-icons/ri";
import SideBar from "./components/shared/SideBar"

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <SideBar showMenu={showMenu} />
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 flex justify-between py-2 px-8 rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={handleToggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
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
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div className="flex flex-col items-center bg-[#1F1D2B] rounded-lg p-8 text-center gap-2">
              <img src="comida.png" className=" w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-gray-300 text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="flex flex-col items-center bg-[#1F1D2B] rounded-lg p-8 text-center gap-2">
              <img src="comida.png" className=" w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-gray-300 text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="flex flex-col items-center bg-[#1F1D2B] rounded-lg p-8 text-center gap-2">
              <img src="comida.png" className=" w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-gray-300 text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="flex flex-col items-center bg-[#1F1D2B] rounded-lg p-8 text-center gap-2">
              <img src="comida.png" className=" w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-gray-300 text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="flex flex-col items-center bg-[#1F1D2B] rounded-lg p-8 text-center gap-2">
              <img src="comida.png" className=" w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-gray-300 text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className="bg-[#1F1D2B] lg:col-span-2 fixed right-0 lg:static w-full h-full">
          <div className="relative pt-16 p-8">
            <RiCloseLine className="absolute left-4 top-4 box-content text-gray-300 p-3 text-xl rounded-full bg-[#262837]" />
            <h2 className="text-xl my-4">Orders #1234567</h2>
            <div className="flex items-center gap-4 flex-wrap">
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
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
