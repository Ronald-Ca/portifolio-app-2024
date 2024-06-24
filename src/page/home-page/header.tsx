import { GiCoffeeCup } from "react-icons/gi";
import { FaAddressCard } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { MdOutlineContactMail } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";

export default function Header() {
    return (
        <div className="w-full flex justify-between bg-slate-900 pl-[30px]  pr-[30px] pt-[10px] pb-[10px] items-center">
            <div className="flex flex-col justify-center items-center  p-2 bg-[#00BFFF] rounded-lg shadow-lg">
                <GiCoffeeCup size={30} className="text-slate-900" />
            </div>
            <div className="flex gap-3">
                <a href="/about" className=" w-[100px] border border-gray-600 rounded-[10px] p-1 flex justify-center items-center gap-2 bg-slate-900  text-gray-200 transition-transform duration-300 hover:bg-[#1c222b] hover:border-[#00BFFF]">
                    <FaAddressCard color="#00BFFF" />Sobre
                </a>
                <a className=" w-[100px] border border-gray-600 rounded-[10px] p-1 flex justify-center items-center gap-2 bg-slate-900  text-gray-200 transition-transform duration-300 hover:bg-[#1c222b] hover:border-[#00BFFF]" href="">
                    <FaGamepad color="#00BFFF" />Skills
                </a>
                <a className=" w-[100px] border border-gray-600 rounded-[10px] p-1 flex justify-center items-center gap-2 bg-slate-900  text-gray-200 transition-transform duration-300 hover:bg-[#1c222b] hover:border-[#00BFFF]" href="">
                    <PiProjectorScreenChartFill color="#00BFFF" /> Projetos
                </a>
            </div>
            <div className="flex gap-3">
                <a className=" w-[100px] border border-gray-600 rounded-[10px] p-1 flex justify-center items-center gap-1 bg-slate-700  text-gray-200 transition-transform duration-300 hover:bg-[#1c222b] hover:border-[#00BFFF]" href="">
                    <MdOutlineContactMail color="#00BFFF" />Contato
                </a>
                <a className=" w-[100px] border border-gray-600 rounded-[10px] p-1 flex justify-center items-center gap-1 bg-slate-950  text-gray-200 transition-transform duration-300 hover:bg-[#1c222b] hover:border-[#00BFFF]" href="">
                    <IoMdLogIn color="#00BFFF" /> Login
                </a>
            </div>
        </div>
    )
}