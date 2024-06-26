import { Button } from "@/components/ui/button";
import { FaGraduationCap, FaHouseDamage } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoMdCodeDownload } from "react-icons/io";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function About() {
    return (
        <div className="min-h-screen bg-slate-800 flex flex-col p-6">
            <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="w-full text-center text-[50px] font-semibold text-gray-300">Quem sou eu?</h1>
                    <Button className="w-[200px] hover:bg-[#00BFFF] hover:text-slate-900 flex gap-[5px] font-bold">
                        DOWNLOAD CV <IoMdCodeDownload size={25} />
                    </Button>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-[100px] border-[1px] rounded-[10px] border-[#00BFFF] p-[50px]">
                    <div className="border-4 border-[#00BFFF] p-2 rounded-full shadow-lg">
                        <Avatar className="w-[500px] h-[50px]">
                            <AvatarImage src="src/assets/goku.jpeg" alt="Foto de perfil" className="rounded-full h-[400px]" />
                        </Avatar>
                    </div>
                    <div className="flex flex-col gap-5 w-full lg:w-1/2">
                        <div className="border-b-[1px] border-[#00BFFF] p-4">
                            <h2 className="text-2xl text-gray-300 flex items-center pb-2">
                                <MdDriveFileRenameOutline className="mr-[5px] text-[#00BFFF]" /> Eu
                            </h2>
                            <p className="text-gray-300 text-xl">
                                Me chamo Ronald Camargo, tenho 23 anos.
                            </p>
                        </div>
                        <div className="border-b-[1px] border-[#00BFFF] p-4">
                            <h2 className="text-2xl text-gray-300 flex items-center pb-2">
                                <FaGraduationCap className="mr-[5px] text-[#00BFFF]" /> Formação
                            </h2>
                            <p className="text-gray-300 text-xl">
                                Sou formado em Engenharia da Computação - Bacharelado pela Universidade Federal de Mato Grosso (2018-2023).
                            </p>
                        </div>
                        <div className="border-b-[1px] border-[#00BFFF] p-4">
                            <h2 className="text-2xl text-gray-300 flex items-center pb-2">
                                <FaHouseDamage className="mr-[5px] text-[#00BFFF]" /> Endereço
                            </h2>
                            <p className="text-gray-300 text-xl">
                                Resido em Planalto da Serra - MT.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-center mb-6">
                    <h1 className="text-center text-[50px] font-semibold text-gray-300">Experiências</h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col gap-5 w-full lg:w-1/2">
                        <div className="border-[1px] rounded-[10px] border-[#00BFFF] p-4">
                            <h2 className="text-2xl text-gray-300 flex items-center pb-2 border-b-[1px] border-[#00BFFF]">
                                <MdDriveFileRenameOutline className="mr-[5px] text-[#00BFFF]" /> BSN SOLUTIONS
                            </h2>
                            <p className="text-gray-300 text-xl mt-2">
                                Desenvolvedor Full Stack Júnior (2022 - Atual)
                            </p>
                            <h3 className="text-xl text-[#00BFFF] mt-2">Atividades:</h3>
                            <ul className="list-disc list-inside">
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
        </div>
    );
}
