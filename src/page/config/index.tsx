import { Button } from "@/components/ui/button";
import { FaAddressCard, FaEdit, FaGamepad, FaHouseUser } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { PiProjectorScreenChartFill } from "react-icons/pi";

export default function Config() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-800">
            <header className="flex items-center justify-between p-[20px] bg-slate-950 border-b-[1px] border-b-[#00BFFF]">
                <h1 className="text-[#00BFFF] text-[25px] font-bold flex items-center gap-[10px]"><FaEdit className="mt-[2px] text-[#00BFFF]" />Modo Editor</h1>
                <a href="/">
                    <Button className="text-[#00BFFF] w-[100px] flex gap-[5px] border-[1px] border-[#00BFFF] hover:bg-[#1c222b]">
                        <ImExit className="mt-[2px]" />
                        Sair
                    </Button>
                </a>
            </header>
            <main>
                <menu className="w-[250px] bg-slate-950 h-screen border-r-[1px] border-r-[#00BFFF]">
                    <ul className="flex flex-col justify-center items-center gap-[10px] text-gray-50">
                        <li className="flex justify-center items-center gap-[5px] text-[#00BFFF] border-t-[1px] border-t-[#00BFFF] border-b-[1px] border-b-[#00BFFF] w-[100%] p-[10px] mt-[10px] font-semibold cursor-pointer transition-colors duration-[3000ms] hover:bg-[#1c222b]">
                            <FaHouseUser color="#00BFFF" />
                            Início
                        </li>
                        <li className="flex justify-center items-center gap-[5px] text-[#00BFFF] border-t-[1px] border-t-[#00BFFF] border-b-[1px] border-b-[#00BFFF] w-[100%] p-[10px] font-semibold cursor-pointer transition-colors duration-[3000ms] hover:bg-[#1c222b]">
                            <FaAddressCard color="#00BFFF" />
                            Sobre
                        </li>
                        <li className="flex justify-center items-center gap-[5px] text-[#00BFFF] border-t-[1px] border-t-[#00BFFF] border-b-[1px] border-b-[#00BFFF] w-[100%] p-[10px] font-semibold cursor-pointer transition-colors duration-[3000ms] hover:bg-[#1c222b]">
                            <FaGamepad color="#00BFFF" />
                            Skills
                        </li>
                        <li className="flex justify-center items-center gap-[5px] text-[#00BFFF] border-t-[1px] border-t-[#00BFFF] border-b-[1px] border-b-[#00BFFF] w-[100%] p-[10px] font-semibold cursor-pointer transition-colors duration-[3000ms] hover:bg-[#1c222b]">
                            <PiProjectorScreenChartFill color="#00BFFF" />
                            Projetos
                        </li>
                    </ul>
                </menu>
            </main>
        </div>
    )
}