/* eslint-disable react/prop-types */
import { FaNoteSticky, FaRegNoteSticky } from "react-icons/fa6";
import { HiBell, HiCurrencyRupee } from "react-icons/hi";
import { MdCandlestickChart, MdDashboard, MdDocumentScanner, MdInsertChart } from "react-icons/md";
import { NavLink } from "react-router-dom";




{/* <RouterProvider router={router} /> */ }


export default function App(props) {
  // pink- #E27498

  return (
    <main className="w-full bg-[#F8F8FB] min-h-screen h-screen overflow-hidden">
      <div className="flex flex-row py-4 pl-4 h-full gap-12">
        <div className="w-[80px] text-white bg-gradient-to-b from-[#0F3556] to-[#17558b] h-full rounded-xl p-4 ">
          <div className="text-[40px] flex flex-col justify-around items-center h-full">
            <NavLink className="cursor-pointer" to={'/'}>
              <MdDashboard className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/scanners'}>
              <MdCandlestickChart className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <MdInsertChart className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <MdDocumentScanner className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <HiBell className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <FaRegNoteSticky className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <FaNoteSticky className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <HiCurrencyRupee className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer" />
            </NavLink>
          </div>
        </div>


        <div className="p-4 w-full overflow-auto">
          <div className="flex flex-row w-full h-auto justify-between mb-8">
            <NavLink className="" to={"/"}>
              <img src="https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" className="w-[100px] h-auto" />
            </NavLink>
            <img src="https://qash-react-omega.vercel.app/static/media/2.54e869c1f9d853c8f5f8.png" className="w-[30px] h-[30px]" />
          </div>

          {props.Component}
        </div>
      </div>
    </main>
  )
}