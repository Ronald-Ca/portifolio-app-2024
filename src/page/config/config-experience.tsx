import { Card, CardTitle } from "@/components/ui/card"
import { DialogHeader } from "@/components/ui/dialog"
import { FormExperience } from "@/form/form-experience"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { useState } from "react"
import { FaEdit } from "react-icons/fa"
import { IoIosAdd, IoIosClose } from "react-icons/io"

interface Experience {
    company: string
    period: string
    role: string
    activities: string[]
    stacks: string[]
}

const experiences: Experience[] = [
    {
        company: "BSN Solution",
        period: "2021 - Atual",
        role: "Desenvolvedor Front-end",
        activities: [
            "Desenvolvimento de aplicações web",
            "Manutenção de aplicações",
            "Criação de interfaces"
        ],
        stacks: ["HTML", "CSS", "JavaScript", "React"]
    }
]

export default function ConfigExperience() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedExperience, setSelectedExperience] = useState<Experience>()

    const handleEditClick = (experience: Experience) => {
        setSelectedExperience(experience)
        setIsOpen(true)
    }

    const handleAddClick = () => {
        setSelectedExperience(undefined)
        setIsOpen(true)
    }

    const handleSave = (newExperience: Experience) => {
        console.log(newExperience)
        setIsOpen(false)
    }

    return (
        <div className="flex flex-col justify-center items-center border-[1px] border-[#00BFFF] pt-[20px] pb-[20px] rounded-[10px] gap-[20px]">
            <div className="flex gap-[20px]">
                {experiences.map((experience, index) => (
                    <Card key={index} onClick={() => handleEditClick(experience)} className="bg-slate-950 w-[300px] h-[300px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] flex justify-center items-center relative cursor-pointer transform hover:scale-105 transition-transform duration-300">
                        <FaEdit
                            className="text-[30px] text-slate-950 absolute top-[-5px] right-[-5px] bg-[#00BFFF] p-[3px] rounded-[3px]"
                        />
                        <CardTitle className="text-gray-300 text-2xl font-semibold">{experience.company}</CardTitle>
                    </Card>
                ))}
                <Card onClick={handleAddClick} className="bg-slate-950 w-[300px] h-[300px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] flex justify-center items-center relative cursor-pointer transform hover:scale-105 transition-transform duration-300" >
                    <IoIosAdd className="text-gray-300 text-[100px]" />
                </Card>
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-slate-900 rounded-lg p-6 min-w-[600px] mx-auto relative border-[2px] border-[#00BFFF]" onClick={(e) => e.stopPropagation()}>
                        <DialogClose asChild>
                            <IoIosClose size={35} className="text-[#00BFFF] absolute top-0 right-0 cursor-pointer" onClick={() => setIsOpen(false)} />
                        </DialogClose>
                        <DialogHeader>
                            <DialogTitle className="text-gray-100 text-center font-semibold text-[30px]">
                                {selectedExperience ? "Editar Experiência" : "Adicionar Experiência"}
                            </DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            <FormExperience selectedExperience={selectedExperience} handleSave={handleSave} />
                        </DialogDescription>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}