import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DialogHeader } from '@/components/ui/dialog';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";

interface Project {
    name: string;
    color: string;
    stars: number;
    previewImage: string;
    description: string;
    link: string;
    stacks?: string[];
}

const projects: Project[] = [
    {
        name: "NLW Explorer",
        color: "text-[#FF4500]",
        stars: 3,
        previewImage: "src/assets/nlw-explorer.png",
        description: "Este é um projeto, bem projetado, cheio de projetos, improjetável.",
        link: "https://ronald-ca.github.io/nlw-site-explorer/",
        stacks: ["HTML", "CSS"],
    },
];

const stackColors: { [key: string]: string } = {
    HTML: "bg-[#FF4500]",
    CSS: "bg-[#00BFFF]",
    JavaScript: "bg-[#FFFF00]",
    TypeScript: "bg-[#007ACC]",
    React: "bg-[#68A063]",
    NodeJS: "bg-[#4DB33D]",
    Python: "bg-[#FFD700]",
    Django: "bg-[#0DB7ED]",
    Git: "bg-[#F05032]",
    GitHub: "bg-[#171515]",
};

export default function Projects() {
    return (
        <div className="flex-grow bg-slate-800 flex flex-col p-6">
            <div className="flex">
                <h1 className="w-full text-center text-[50px] font-semibold text-gray-300">Projetos</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4 border-[1px] rounded-[10px] border-[#00BFFF] p-[50px]">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Card className="bg-slate-950 w-[400px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] text-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
                    <CardHeader>
                        <img src={project.previewImage} alt={`${project.name} preview`} className="mb-4 rounded-[10px] border-[2px] border-[#00BFFF]" />
                        <CardTitle className="text-gray-300 text-2xl font-semibold">{project.name}</CardTitle>
                        <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                </Card>
            </DialogTrigger>
            <DialogContent className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
                <div className="bg-slate-900 rounded-lg p-6 max-w-[800px] mx-auto relative border-[2px] border-[#00BFFF]" onClick={(e) => e.stopPropagation()}>
                    <DialogClose asChild>
                        <Button className='absolute top-0 right-0' onClick={() => setIsOpen(false)}>
                            <IoIosClose size={30} className="text-[#00BFFF]" />
                        </Button>
                    </DialogClose>
                    <DialogHeader>
                        <DialogTitle className='text-gray-100 text-center font-semibold  text-[30px]'>{project.name}</DialogTitle>
                        <video className='w-[100%] h-[350px] rounded-[10px] border-[2px] border-[#00BFFF]' src="src/assets/nlw.mp4" autoPlay controls></video>
                        <DialogTitle className='text-gray-100 font-semibold  text-[20px]'>Descrição:</DialogTitle>
                        <DialogDescription className='text-gray-100 text-[15px] rounded-[10px] border-[2px] border-[#00BFFF] p-[8px]'>{project.description}</DialogDescription>
                        <DialogTitle className='text-gray-100 font-semibold  text-[20px]'>Link:</DialogTitle>
                        <DialogDescription className='text-gray-100 text-[15px] rounded-[10px] border-[2px] border-[#00BFFF] p-[8px]'>
                            <a href="https://ronald-ca.github.io/nlw-site-explorer/" target="_blank" rel="noreferrer" className='transition-colors duration-[3000ms] hover:text-[#00BFFF] underline decoration-solid' >
                                {project.link}
                            </a>
                        </DialogDescription>
                        <DialogTitle className='text-gray-100 font-semibold  text-[20px]'>Stacks:</DialogTitle>
                        <DialogDescription className='text-gray-100 text-[15px] rounded-[10px] border-[2px] border-[#00BFFF] p-[8px]'>
                            {project.stacks?.map((stack, index) => (
                                <span key={index} className={`mr-2 text-slate-900 ${stackColors[stack]} rounded-[4px] pb-[2px] pl-[5px] pr-[5px] font-semibold`}>
                                    {stack}
                                </span>
                            ))}
                        </DialogDescription>
                    </DialogHeader>
                </div>
            </DialogContent>
        </Dialog>
    )
}

