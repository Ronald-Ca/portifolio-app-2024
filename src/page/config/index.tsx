import { Button } from "@/components/ui/button";
import { FaAddressCard, FaEdit, FaGamepad, FaHouseUser } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import ConfigHome from "./config-home";
import ConfigAbout from "./config-about";
import ConfigSkill from "./config-skill";
import ConfigProject from "./config-project";
import { useState } from "react";

export default function Config() {
    const [activeComponent, setActiveComponent] = useState<'home' | 'about' | 'skills' | 'projects'>('home');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'home':
                return <ConfigHome />;
            case 'about':
                return <ConfigAbout />;
            case 'skills':
                return <ConfigSkill />;
            case 'projects':
                return <ConfigProject />;
            default:
                return <ConfigHome />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-gray-950 animate-gradient-move">
            <header className="flex items-center justify-between p-[20px] bg-slate-950 border-b-[1px] border-b-[#00BFFF]">
                <h1 className="text-[#00BFFF] text-[25px] font-bold flex items-center gap-[10px]">
                    <FaEdit className="mt-[2px] text-[#00BFFF]" />
                    Modo Editor
                </h1>
                <a href="/">
                    <Button className="text-[#00BFFF] w-[100px] flex gap-[5px] border-[1px] border-[#00BFFF] hover:bg-[#1c222b]">
                        <ImExit className="mt-[2px]" />
                        Sair
                    </Button>
                </a>
            </header>
            <main className="flex flex-1">
                <menu className="w-[250px] bg-slate-950 min-h-full border-r-[1px] border-r-[#00BFFF]">
                    <ul className="flex flex-col justify-center items-center gap-[10px] text-gray-50">
                        <li
                            onClick={() => setActiveComponent('home')}
                            className="flex justify-center items-center gap-[5px] text-[#00BFFF] border-t-[1px] border-t-[#00BFFF] border-b-[1px] border-b-[#00BFFF] w-[100%] p-[10px] mt-[10px] font-semibold cursor-pointer transition-colors duration-[300ms] hover:bg-[#1c222b]"
                        >
                            <FaHouseUser color="#00BFFF" />
                            Início
                        </li>
                        <li
                            onClick={() => setActiveComponent('about')}
                            className="flex justify-center items-center gap-[5px] text-[#00BFFF] border-t-[1px] border-t-[#00BFFF] border-b-[1px] border-b-[#00BFFF] w-[100%] p-[10px] font-semibold cursor-pointer transition-colors duration-[300ms] hover:bg-[#1c222b]"
                        >
                            <FaAddressCard color="#00BFFF" />
                            Sobre
                        </li>
                        <li
                            onClick={() => setActiveComponent('skills')}
                            className="flex justify-center items-center gap-[5px] text-[#00BFFF] border-t-[1px] border-t-[#00BFFF] border-b-[1px] border-b-[#00BFFF] w-[100%] p-[10px] font-semibold cursor-pointer transition-colors duration-[300ms] hover:bg-[#1c222b]"
                        >
                            <FaGamepad color="#00BFFF" />
                            Skills
                        </li>
                        <li
                            onClick={() => setActiveComponent('projects')}
                            className="flex justify-center items-center gap-[5px] text-[#00BFFF] border-t-[1px] border-t-[#00BFFF] border-b-[1px] border-b-[#00BFFF] w-[100%] p-[10px] font-semibold cursor-pointer transition-colors duration-[300ms] hover:bg-[#1c222b]"
                        >
                            <PiProjectorScreenChartFill color="#00BFFF" />
                            Projetos
                        </li>
                    </ul>
                </menu>
                <div className="flex-1 p-[20px]">
                    {renderComponent()}
                </div>
            </main>
        </div>
    );
}
