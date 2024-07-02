import { Button } from "@/components/ui/button";
import { FaEdit } from "react-icons/fa";
import { ImExit } from "react-icons/im";

export default function Config() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-800">
            <header className="flex items-center justify-between p-[20px] bg-slate-950">
                <h1 className="text-[#00BFFF] text-[25px] font-bold flex items-center gap-[10px]"><FaEdit className="mt-[2px] text-[#00BFFF]" />Modo Editor</h1>
                <a href="/">
                    <Button className="text-[#00BFFF] w-[100px] flex gap-[5px] border-[1px] border-[#00BFFF] hover:bg-gray-700">
                        <ImExit className="mt-[2px]" />
                        Sair
                    </Button>
                </a>
            </header>
            <main>
                <menu className="w-[300px] bg-slate-950 h-screen border-t-[1px] border-t-[#00BFFF]">

                </menu>
            </main>
        </div>
    )
}