import { BsFiletypeSql } from "react-icons/bs"
import { DiMongodb } from "react-icons/di"
import { FaCss3Alt, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaStar } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io"
import { SiTypescript } from "react-icons/si"

export default function Projects() {
    return (
        <div className="flex-grow bg-slate-800 flex flex-col p-6">
            <div className="flex">
                <h1 className="w-full text-center text-[50px] font-semibold text-gray-300">Projetos</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4 border-[1px] rounded-[10px] border-[#00BFFF] p-[50px]">
                {projects.map((project, index) => (
                    <div key={index} className="w-[200px] border-[1px] rounded-[10px] border-[#00BFFF] p-[20px] text-center flex flex-col items-center">
                        <h2 className="text-gray-300 text-2xl font-semibold mb-4">{project.name}</h2>
                        <project.icon size={60} className={`mb-4 ${project.color}`} />
                        <div className="flex justify-center">
                            {Array(project.stars).fill(0).map((_, i) => (
                                <FaStar key={i} className="text-[#00BFFF] mr-1" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const projects = [
    { name: "Projeto 1", icon: FaHtml5, color: "text-[#FF4500]", stars: 3 },
    { name: "Projeto 2", icon: FaCss3Alt, color: "text-[#00BFFF]", stars: 3 },
    { name: "Projeto 3", icon: IoLogoJavascript, color: "text-[#FFFF00]", stars: 3 },
    { name: "Projeto 4", icon: SiTypescript, color: "text-[#007ACC]", stars: 3 },
    { name: "Projeto 5", icon: FaNodeJs, color: "text-[#68A063]", stars: 3 },
    { name: "Projeto 6", icon: DiMongodb, color: "text-[#4DB33D]", stars: 3 },
    { name: "Projeto 7", icon: BsFiletypeSql, color: "text-[#FFD700]", stars: 3 },
    { name: "Projeto 8", icon: FaDocker, color: "text-[#0DB7ED]", stars: 3 },
    { name: "Projeto 9", icon: FaGitAlt, color: "text-[#F05032]", stars: 3 },
    { name: "Projeto 10", icon: FaGithub, color: "text-[#171515]", stars: 3 },
]