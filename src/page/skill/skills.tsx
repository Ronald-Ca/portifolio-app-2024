import { FaHtml5, FaCss3Alt, FaStar, FaNodeJs, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiPersistent } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { RiSpeakLine, RiFocus3Fill } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";

export default function Skills() {
    return (
        <div className="flex-grow bg-slate-800 flex flex-col p-6">
            <div className="flex">
                <h1 className="w-full text-center text-[50px] font-semibold text-gray-300">Habilidades</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4 border-[1px] rounded-[10px] border-[#00BFFF] p-[50px]">
                {skills.map((skill, index) => (
                    <div key={index} className="w-[200px] border-[1px] rounded-[10px] border-[#00BFFF] p-[20px] text-center flex flex-col items-center">
                        <h2 className="text-gray-300 text-2xl font-semibold mb-4">{skill.name}</h2>
                        <skill.icon size={60} className={`mb-4 ${skill.color}`} />
                        <div className="flex justify-center">
                            {Array(skill.stars).fill(0).map((_, i) => (
                                <FaStar key={i} className="text-[#00BFFF] mr-1" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex">
                <h1 className="w-full text-center text-[50px] font-semibold text-gray-300">Competências</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4 border-[1px] rounded-[10px] border-[#00BFFF] p-[50px]">
                {competences.map((competence, index) => (
                    <div key={index} className="w-[200px] border-[1px] rounded-[10px] border-[#00BFFF] p-[20px] text-center flex flex-col items-center">
                        <h2 className="text-gray-300 text-2xl font-semibold mb-4">{competence.name}</h2>
                        <competence.icon size={60} className={`mb-4 ${competence.color}`} />
                        <div className="flex justify-center">
                            {Array(competence.stars).fill(0).map((_, i) => (
                                <FaStar key={i} className="text-[#00BFFF] mr-1" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-[#FF4500]", stars: 3 },
    { name: "CSS", icon: FaCss3Alt, color: "text-[#00BFFF]", stars: 3 },
    { name: "JavaScript", icon: IoLogoJavascript, color: "text-[#FFFF00]", stars: 3 },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#007ACC]", stars: 3 },
    { name: "NodeJS", icon: FaNodeJs, color: "text-[#68A063]", stars: 3 },
    { name: "MongoDB", icon: DiMongodb, color: "text-[#4DB33D]", stars: 3 },
    { name: "SQL", icon: BsFiletypeSql, color: "text-[#FFD700]", stars: 3 },
    { name: "Docker", icon: FaDocker, color: "text-[#0DB7ED]", stars: 3 },
    { name: "Git", icon: FaGitAlt, color: "text-[#F05032]", stars: 3 },
    { name: "Github", icon: FaGithub, color: "text-[#171515]", stars: 3 },
];

const competences = [
    { name: "Comunicação", icon: RiSpeakLine, color: "text-[#00BFFF]", stars: 3 },
    { name: "Trabalho em equipe", icon: MdGroups2, color: "text-[#00BFFF]", stars: 3 },
    { name: "Foco", icon: RiFocus3Fill, color: "text-[#00BFFF]", stars: 3 },
    { name: "Persistência", icon: SiPersistent, color: "text-[#00BFFF]", stars: 3 },
];
