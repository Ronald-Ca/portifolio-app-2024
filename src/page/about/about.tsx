import { Button } from "@/components/ui/button";
import { FaGraduationCap, FaHouseDamage } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoMdCodeDownload } from "react-icons/io";

export default function About() {
    return (
        <div className="h-screen bg-slate-800 flex flex-col p-6">
            <div className="flex">
                <h1 className="w-full text-center text-[50px] font-semibold text-gray-300">Quem sou eu?</h1>
                <Button className="w-[200px] mx-auto mt-6 hover:bg-[#00BFFF] hover:text-slate-900 flex gap-[5px] font-bold">DOWNLOAD CV <IoMdCodeDownload size={25} /></Button>
            </div>
            <div className="flex h-full justify-between">
                <div className="flex flex-col justify-center gap-5 w-1/2">
                    <div className="border-b-[1px] border-[#00BFFF] p-2">
                        <h2 className="text-2xl text-gray-300 flex items-center pb-1">
                            <MdDriveFileRenameOutline className="mr-[5px] text-[#00BFFF]" /> Eu
                        </h2>
                        <p className="text-gray-300 text-xl pt-1">
                            Me chamo Ronald Camargo, tenho 23 anos.
                        </p>
                    </div>
                    <div className="border-b-[1px] border-[#00BFFF] p-2">
                        <h2 className="text-2xl text-gray-300 flex items-center pb-1">
                            <FaGraduationCap className="mr-[5px] text-[#00BFFF]" /> Formação
                        </h2>
                        <p className="text-gray-300 text-xl pt-1">
                            Sou formado em Engenharia da Computação - Bacharelado pela Universidade Federal de Mato Grosso (2018-2023).
                        </p>
                    </div>
                    <div className="border-b-[1px] border-[#00BFFF] p-2">
                        <h2 className="text-2xl text-gray-300 flex items-center pb-1">
                            <FaHouseDamage className="mr-[5px] text-[#00BFFF]" /> Endereço
                        </h2>
                        <p className="text-gray-300 text-xl pt-1">
                            Resido em Planalto da Serra - MT.
                        </p>
                    </div>
                </div>
                <div className="w-[1px] h-full bg-[#00BFFF] mx-6"></div>
                <div className="flex flex-col justify-center gap-5 w-1/2">
                    <div className="border-b-[1px] border-[#00BFFF] p-2">
                        <h2 className="text-2xl text-gray-300 flex items-center border-b-[1px] border-[#00BFFF] pb-1">
                            <MdDriveFileRenameOutline className="mr-[5px] text-[#00BFFF]" /> Experiência
                        </h2>
                        <p className="text-gray-300 text-xl pt-1">
                            Desenvolvedor Full Stack Júnior (2022 - Atual)
                        </p>
                        <h3 className="text-xl text-[#00BFFF] mt-2">Atividades:</h3>
                        <ul>
                            <li className="text-gray-300 text-xl">Desenvolvimento de aplicações web.</li>
                            <li className="text-gray-300 text-xl">Manutenção de aplicações web.</li>
                            <li className="text-gray-300 text-xl">Desenvolvimento de APIs.</li>
                            <li className="text-gray-300 text-xl">Desenvolvimento de banco de dados SQL e NoSQL.</li>
                            <li className="text-gray-300 text-xl">Desenvolvimento em arquitetura MVC.</li>
                        </ul>
                        <h3 className="text-xl text-[#00BFFF] mt-2">Stacks:</h3>
                        <p className="text-gray-300 text-xl">HTML, CSS, JavaScript, TypeScript, React, Node.js, SQL, MongoDB, MySQL, Git, GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
