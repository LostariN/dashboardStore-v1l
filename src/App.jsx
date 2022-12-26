import { useState } from "react";
import { RiUser3Line, RiAddLine, RiMenu3Fill, RiPieChartLine, RiCloseLine, RiSearch2Line } from "react-icons/ri";
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
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6 ">
          <header className="p-4">
            <div className="flex flex-col gap-4 mb-5">
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
            <nav className="text-gray-300 flex items-center justify-between border-b">

              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:bg-[#ec7c6a] before:absolute before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">Hot Dishes</a>
              <a href="#" className="py-2 pr-4">Cold Dishes</a>
              <a href="#" className="py-2 pr-4">Soup</a>
              <a href="#" className="py-2 pr-4">Grill</a>
              {/* <a href="#" className="  py-2 pr-4 hover:border-[#ec7c6a]">Ice Cream</a>
              <a href="#" className="  py-2 pr-4 hover:border-[#ec7c6a]">Dessert</a> */}
            </nav>
          </header>
        </div>
        <div className="bg-indigo-700 lg:col-span-2 fixed right-0 lg:static">hola 2</div>
      </main>
    </div>
  )
}

export default App
