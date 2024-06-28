import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DialogHeader } from '@/components/ui/dialog';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { IoIosClose } from "react-icons/io";

interface Project {
    name: string;
    color: string;
    stars: number;
    previewImage: string;
    description: string;
}

const projects: Project[] = [
    {
        name: "NLW Explorer",
        color: "text-[#FF4500]",
        stars: 3,
        previewImage: "src/assets/nlw-explorer.png",
        description: "Este é um projeto, bem projetado, cheio de projetos, improjetável.",
    },
];

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
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="bg-slate-950 w-[400px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] text-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
                    <CardHeader>
                        <img src={project.previewImage} alt={`${project.name} preview`} className="mb-4 rounded-[10px] border-[2px] border-[#00BFFF]" />
                        <CardTitle className="text-gray-300 text-2xl font-semibold">{project.name}</CardTitle>
                        <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                </Card>
            </DialogTrigger>
            <DialogContent className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
                <div className="bg-slate-900 rounded-lg p-6 max-w-lg mx-auto relative border-[2px] border-[#00BFFF]">
                    <DialogClose asChild>
                        <Button className='absolute top-4 right-4'>
                            <IoIosClose size={30} className="text-[#00BFFF]" />
                        </Button>
                    </DialogClose>
                    <DialogHeader>
                        <DialogTitle>{project.name}</DialogTitle>
                        <DialogDescription>{project.description}</DialogDescription>
                    </DialogHeader>
                    {/* <ProjectDetails project={project} /> */}
                </div>
            </DialogContent>
        </Dialog>
    )
}

// interface ProjectDetailsProps {
//     project: Project;
// }

// const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
//     return (
//         <div className="p-4">
//             <div className="flex justify-center">
//             </div>
//         </div>
//     )
// }
