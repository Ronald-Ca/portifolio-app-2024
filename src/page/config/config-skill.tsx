import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { DialogHeader } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { useState } from "react"
import { FaEdit, FaStar } from "react-icons/fa"
import { IoIosAdd, IoIosClose } from "react-icons/io"

interface Skill {
    name: string
    level: number
    icon: string
    experience: number
    color: string
    tipo: 'skill' | 'competence'
}

const skills: Skill[] = [
    { name: "HTML", icon: "FaHtml5", color: "text-[#FF4500]", level: 3, experience: 3, tipo: 'skill' },
    { name: "CSS", icon: "FaCss3Alt", color: "text-[#00BFFF]", level: 3, experience: 3, tipo: 'skill' },
    { name: "JavaScript", icon: "IoLogoJavascript", color: "text-[#FFFF00]", level: 3, experience: 3, tipo: 'skill' },
    { name: "TypeScript", icon: "SiTypescript", color: "text-[#007ACC]", level: 3, experience: 3, tipo: 'skill' },
    { name: "NodeJS", icon: "FaNodeJs", color: "text-[#68A063]", level: 3, experience: 3, tipo: 'skill' },
    { name: "MongoDB", icon: "DiMongodb", color: "text-[#4DB33D]", level: 3, experience: 3, tipo: 'skill' },
    { name: "SQL", icon: "BsFiletypeSql", color: "text-[#FFD700]", level: 3, experience: 3, tipo: 'skill' },
    { name: "Docker", icon: "FaDocker", color: "text-[#0DB7ED]", level: 3, experience: 3, tipo: 'skill' },
    { name: "Git", icon: "FaGitAlt", color: "text-[#F05032]", level: 3, experience: 3, tipo: 'skill' },
    { name: "Github", icon: "FaGithub", color: "text-[#171515]", level: 3, experience: 3, tipo: 'skill' },
    { name: "Comunicação", icon: "RiSpeakLine", color: "text-[#00BFFF]", level: 3, experience: 3, tipo: 'competence' },
    { name: "Trabalho em equipe", icon: "MdGroups2", color: "text-[#00BFFF]", level: 3, experience: 3, tipo: 'competence' },
    { name: "Foco", icon: "RiFocus3Fill", color: "text-[#00BFFF]", level: 3, experience: 3, tipo: 'competence' },
    { name: "Persistência", icon: "SiPersistent", color: "text-[#00BFFF]", level: 3, experience: 3, tipo: 'competence' },
]

export default function ConfigSkill() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

    const handleEditClick = (skill: Skill) => {
        setSelectedSkill(skill)
        setIsOpen(true)
    }

    const handleAddClick = () => {
        setSelectedSkill(null)
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex flex-wrap justify-center items-center border-[1px] border-[#00BFFF] pt-[20px] pb-[20px] rounded-[10px] gap-[20px]">
                {skills.map((skill, index) => (
                    <Card key={index} onClick={() => handleEditClick(skill)} className="bg-slate-950 w-[200px] h-[200px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] flex flex-col justify-center items-center relative cursor-pointer transform hover:scale-105 transition-transform duration-300">
                        <FaEdit
                            className="text-[30px] text-slate-950 absolute top-[-5px] right-[-5px] bg-[#00BFFF] p-[3px] rounded-[3px]"
                        />
                        <CardTitle className="text-gray-300 text-2xl font-semibold mb-4">{skill.name}</CardTitle>
                        <CardContent className="flex justify-center">
                            {Array(skill.level).fill(0).map((_, i) => (
                                <FaStar key={i} className="text-[#00BFFF] mr-1" />
                            ))}
                        </CardContent>
                        <CardDescription className="absolute bottom-0 left-0 right-0 p-2 text-gray-300 text-center">
                            <span>{skill.experience} anos de experiência</span>
                        </CardDescription>
                    </Card>
                ))}
                <Card onClick={handleAddClick} className="bg-slate-950 w-[200px] h-[200px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] flex justify-center items-center relative cursor-pointer transform hover:scale-105 transition-transform duration-300">
                    <IoIosAdd className="text-gray-300 text-[100px]" />
                </Card>
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-slate-900 rounded-lg p-6 min-w-[400px] mx-auto relative border-[2px] border-[#00BFFF]" onClick={(e) => e.stopPropagation()}>
                        <DialogClose asChild>
                            <IoIosClose size={35} className="text-[#00BFFF] absolute top-0 right-0 cursor-pointer" onClick={() => setIsOpen(false)} />
                        </DialogClose>
                        <DialogHeader>
                            <DialogTitle className='text-gray-100 text-center font-semibold text-[30px]'>
                                {selectedSkill ? 'Editar habilidade' : 'Adicionar habilidade'}
                            </DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-gray-300">Nome</Label>
                                    <Input type="text" className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-gray-300">Nível</Label>
                                    <Input type="number" className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-gray-300">Experiência</Label>
                                    <Input type="number" className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-gray-300">Ícone</Label>
                                    <Input type="text" className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-gray-300">Cor</Label>
                                    <Input type="text" className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-gray-300">Tipo</Label>
                                    <RadioGroup className="flex gap-4">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="skill" className="text-white w-[10px] h-[10px] bg-white border border-white rounded-full" />
                                            <Label className="text-gray-300">Habilidade</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="competence" className="text-white w-[10px] h-[10px] bg-white border border-white rounded-full" />
                                            <Label className="text-gray-300">Competência</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                        </DialogDescription>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}