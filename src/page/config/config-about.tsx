import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { DialogHeader } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { FormAbout } from "@/form/form-about"
import { FormExperience } from "@/form/form-experience"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { Separator } from "@radix-ui/react-separator"
import { useRef, useState } from "react"
import { FaCamera, FaEdit } from "react-icons/fa"
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

export default function ConfigAbout() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedExperience, setSelectedExperience] = useState<Experience>()
    const [imagePreview, setImagePreview] = useState('https://avatars.githubusercontent.com/u/104284345?v=4')
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const imageURL = URL.createObjectURL(file)
            setImagePreview(imageURL)
        }
    }

    const handleCameraClick = () => {
        fileInputRef.current?.click()
    }

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
            <div className="flex gap-[50px] items-center">
                <div className="flex flex-col items-center gap-[10px] relative">
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-[250px] h-[250px] object-cover rounded-full"
                        />
                    )}
                    <div className="cursor-pointer absolute bottom-[10px] right-[50px] transform translate-x-1/2 translate-y-1/2 hover:scale-110 transition-transform duration-300 bg-slate-950 p-[10px] rounded-full">
                        <FaCamera
                            className="text-[#00BFFF] text-[30px]"
                            onClick={handleCameraClick}
                        />
                    </div>
                    <Input
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                    />
                </div>
                <div className="flex flex-col gap-[10px]">
                    <FormAbout />
                </div>
                <Button type="submit" className="bg-[#00BFFF] text-slate-950 border-[1px] border-slate-950 hover:text-[#00BFFF] hover:bg-[#1c222b] hover:border-[#00BFFF] absolute top-[120px] right-[40px] w-[100px]">
                    Salvar
                </Button>
            </div>
            <Separator className="w-[95%] h-[1px] bg-[#00BFFF]" orientation="horizontal" />
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