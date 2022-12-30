import { useState } from "react";
import { RiUser3Line, RiAddLine, RiMenu3Fill, RiPieChartLine, RiCloseLine, RiSearch2Line, RiArrowDownSLine, RiDeleteBin6Line } from "react-icons/ri";
import Car from "./components/shared/Car";
import Card from "./components/shared/Card";
import Header from "./components/shared/Header";
import SideBar from "./components/shared/SideBar"

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
    setShowOrder(false)
  }
  const handleToggleOrder = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
  }
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <SideBar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 flex justify-between py-2 px-8 rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2" onClick={handleToggleOrder}>
          <RiPieChartLine />
        </button>
        <button onClick={handleToggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-28 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          <Header />
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <Card img={"comida.png"} description={"Speacy seasoned seafood nodles"} price={"2.29"} inventory={"20"} />
            {/* Card */}
            <Card img={"comida.png"} description={"Speacy seasoned seafood nodles"} price={"2.29"} inventory={"20"} />
            {/* Card */}
            <Card img={"comida.png"} description={"Speacy seasoned seafood nodles"} price={"2.29"} inventory={"20"} />
            {/* Card */}
            <Card img={"comida.png"} description={"Speacy seasoned seafood nodles"} price={"2.29"} inventory={"20"} />
            {/* Card */}
            <Card img={"comida.png"} description={"Speacy seasoned seafood nodles"} price={"2.29"} inventory={"20"} />


          </div>
        </div>
      </main >
    </div >
  )
}

export default App
