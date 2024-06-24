import { FaGraduationCap, FaHouseDamage } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
export default function About() {
    return (
        <div className="h-screen bg-slate-800 flex flex-col p-6">
            <h1 className="w-full text-center text-[50px] font-semibold text-gray-300">Quem sou eu?</h1>
            <div>
                <div>
                    <h2 className="text-2xl text-gray-300 flex items-center"><MdDriveFileRenameOutline className="mr-[5px] text-[#00BFFF]" /> Eu</h2>
                    <p className="text-gray-300">Me chamo Ronald Camargo tenho 23 anos.</p>
                </div>
                <div>
                    <h2 className="text-2xl text-gray-300 flex items-center"><FaGraduationCap className="mr-[5px] text-[#00BFFF]" /> Formação</h2>
                    <p className="text-gray-300">Sou formado em Engenharia da Computação - Bacharelado pela Universidade Federal de Mato Grosso (2018-2023).</p>
                </div>
                <div>
                    <h2 className="text-2xl text-gray-300 flex items-center"><FaHouseDamage className="mr-[5px] text-[#00BFFF]" /> Endereço</h2>
                    <p className="text-gray-300">Resido em Planalto da Serra - MT.</p>
                </div>
            </div>
        </div>
    )
}