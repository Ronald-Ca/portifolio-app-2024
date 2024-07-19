import { FaStar } from "react-icons/fa";
import { ReactElement, useEffect, useState } from "react";
import { loadIcon } from "@/utils/dynamic-imports";

interface Skill {
    name: string
    iconName: string
    color: string
    stars: number
    tipo: 'skill' | 'competence'
}

const skills: Skill[] = [
    { name: "HTML", iconName: "FaHtml5", color: "#FF4500", stars: 5, tipo: 'skill' },
    { name: "CSS", iconName: "FaCss3Alt", color: "#00BFFF", stars: 5, tipo: 'skill' },
    { name: "JavaScript", iconName: "IoLogoJavascript", color: "#FFFF00", stars: 4, tipo: 'skill' },
    { name: "TypeScript", iconName: "SiTypescript", color: "#007ACC", stars: 4, tipo: 'skill' },
    { name: "NodeJS", iconName: "FaNodeJs", color: "#68A063", stars: 4, tipo: 'skill' },
    { name: "MongoDB", iconName: "DiMongodb", color: "#4DB33D", stars: 4, tipo: 'skill' },
    { name: "SQL", iconName: "BsFiletypeSql", color: "#FFD700", stars: 3, tipo: 'skill' },
    { name: "Docker", iconName: "FaDocker", color: "#0DB7ED", stars: 2, tipo: 'skill' },
    { name: "Git", iconName: "FaGitAlt", color: "#F05032", stars: 4, tipo: 'skill' },
    { name: "Github", iconName: "FaGithub", color: "#171515", stars: 4, tipo: 'skill' },
    { name: "Comunicação", iconName: "RiSpeakLine", color: "#00BFFF", stars: 3, tipo: 'competence' },
    { name: "Trabalho em equipe", iconName: "MdGroups2", color: "#00BFFF", stars: 3, tipo: 'competence' },
    { name: "Foco", iconName: "RiFocus3Fill", color: "#00BFFF", stars: 3, tipo: 'competence' },
    { name: "Persistência", iconName: "SiPersistent", color: "#00BFFF", stars: 3, tipo: 'competence' },
]

export default function Skills() {
    const [loadedSkills, setLoadedSkills] = useState<(Skill & { icon: ReactElement })[]>([])

    useEffect(() => {
        async function loadSkillsAndCompetences() {
            const skillsWithIcons = await Promise.all(
                skills.map(async (skill) => {
                    const icon = await loadIcon(skill.iconName, skill.color)
                    return { ...skill, icon }
                })
            )
            setLoadedSkills(skillsWithIcons)
        }
        loadSkillsAndCompetences()
    }, [])

    const renderSkillsOrCompetences = (tipo: 'skill' | 'competence') => (
        <div className="flex flex-wrap justify-center gap-4 border-[1px] rounded-[10px] border-[#00BFFF] p-[50px]">
            {loadedSkills.filter(skill => skill.tipo === tipo).map((skill, index) => (
                <div key={index} className="w-[200px] border-[1px] rounded-[10px] border-[#00BFFF] p-[20px] text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-gray-300 text-2xl font-semibold mb-4">{skill.name}</h2>
                    {skill.icon}
                    <div className="flex justify-center mt-[10px]">
                        {Array(skill.stars).fill(0).map((_, i) => (
                            <FaStar key={i} className="text-[#00BFFF] mr-1" />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )

    return (
        <div className="flex-grow flex flex-col p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 animate-gradient-move">
            <div className="flex mb-6">
                <h1 className="w-full text-center text-[50px] font-semibold text-gray-300">Habilidades</h1>
            </div>
            {renderSkillsOrCompetences('skill')}
            <div className="flex justify-center items-center gap-[10px] mb-6 mt-6">
                <hr className="border-[2px] border-[#00BFFF] w-[50%] rounded-[10px]" />
                <h1 className="text-center text-[50px] font-semibold text-gray-300">Competências</h1>
                <hr className="border-[2px] border-[#00BFFF] w-[50%] rounded-[10px]" />
            </div>
            {renderSkillsOrCompetences('competence')}
        </div>
    )
}
