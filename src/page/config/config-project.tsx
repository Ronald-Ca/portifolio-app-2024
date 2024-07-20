import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { DialogHeader } from "@/components/ui/dialog"
import { FormProject } from "@/form/form-project"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { useState } from "react"
import { FaEdit } from "react-icons/fa"
import { IoIosAdd, IoIosClose } from "react-icons/io"

interface Project {
    name: string
    previewImage: string
    video: string
    description: string
    link: string
    stacks?: string[]
}

const projects: Project[] = [
    {
        name: "NLW Explorer",
        previewImage: "src/assets/nlw-explorer.png",
        video: "src/assets/nlw-explorer.mp4",
        description: "Este é um projeto, bem projetado, cheio de projetos, improjetável.",
        link: "https://ronald-ca.github.io/nlw-site-explorer/",
        stacks: ["HTML", "CSS"],
    },
]

export default function ConfigProject() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined)

    const handleEditClick = (project: Project) => {
        setSelectedProject(project)
        setIsOpen(true)
    }

    const handleAddClick = () => {
        setSelectedProject(undefined)
        setIsOpen(true)
    }

    const handleSave = (newProject: Project) => {
        console.log(newProject)
        setIsOpen(false)
    }

    return (
        <>
            <div className="flex flex-wrap justify-center items-center border-[1px] border-[#00BFFF] pt-[20px] pb-[20px] rounded-[10px] gap-[20px]">
                {projects.map((project, index) => (
                    <Card key={index} onClick={() => handleEditClick(project)} className="bg-slate-950 w-[300px] h-[300px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] flex flex-col justify-center items-center relative cursor-pointer transform hover:scale-105 transition-transform duration-300">
                        <FaEdit className="text-[30px] text-slate-950 absolute top-[-5px] right-[-5px] bg-[#00BFFF] p-[3px] rounded-[3px]" />
                        <CardContent className="flex justify-center">
                            <img src={project.previewImage} alt={`${project.name} preview`} className="mb-4 rounded-[10px]" />
                        </CardContent>
                        <CardTitle className="text-gray-300 text-2xl font-semibold mb-4">{project.name}</CardTitle>
                    </Card>
                ))}
                <Card onClick={handleAddClick} className="bg-slate-950 w-[300px] h-[300px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] flex justify-center items-center relative cursor-pointer transform hover:scale-105 transition-transform duration-300">
                    <IoIosAdd className="text-gray-300 text-[100px]" />
                </Card>
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-slate-900 rounded-lg p-6 min-w-[500px] max-h-[800px] relative border-[2px] border-[#00BFFF]" onClick={(e) => e.stopPropagation()}>
                        <DialogClose asChild>
                            <IoIosClose size={35} className="text-[#00BFFF] absolute top-0 right-0 cursor-pointer" onClick={() => setIsOpen(false)} />
                        </DialogClose>
                        <DialogHeader>
                            <DialogTitle className='text-gray-100 text-center font-semibold text-[30px]'>
                                {selectedProject ? 'Editar Projeto' : 'Adicionar Projeto'}
                            </DialogTitle>
                        </DialogHeader>
                        <DialogDescription className="max-h-[600px] overflow-y-auto p-[8px]">
                            <FormProject selectedProject={selectedProject} handleSave={handleSave} />
                        </DialogDescription>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}