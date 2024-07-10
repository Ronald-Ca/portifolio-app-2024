import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { DialogHeader } from "@/components/ui/dialog"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { Separator } from "@radix-ui/react-separator"
import { useRef, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { FaCamera, FaEdit } from "react-icons/fa"
import { IoIosAdd, IoIosClose } from "react-icons/io";

interface Experience {
    organization: string
    time: string
    role: string
    activities: string[]
    stacks: string[]
}

const experiences: Experience[] = [
    {
        organization: "BSN Solution",
        time: "2021 - Atual",
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
    const form = useForm()

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

    const aboutSubmit = () => {
        const onSubmit = (data: any) => {
            console.log(data)
        }

        return (
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center gap-[10px]'>
                    <FormField
                        control={form.control}
                        name="iam"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-50'>Eu:</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Quem sou eu?" className="border-[1px] border-gray-50 w-[500px] bg-slate-950 text-gray-50" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-50'>Endereço:</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Qual seu endereço?" className="border-[1px] border-gray-50 w-[500px] bg-slate-950 text-gray-50" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="formation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-50'>Formação:</FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder="Qual sua formação?" className="border-[1px] border-gray-50 w-[500px] h-[200px] bg-slate-950 text-gray-50" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </form>
            </FormProvider>
        )
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
                    {aboutSubmit()}
                </div>
                <Button type="submit" className="bg-[#00BFFF] text-gray-50 absolute top-[120px] right-[40px] w-[100px]">Salvar</Button>
            </div>
            <Separator className="w-[95%] h-[1px] bg-[#00BFFF]" orientation="horizontal" />
            <div className="flex gap-[20px]">
                {experiences.map((experience, index) => (
                    <Card key={index} onClick={() => handleEditClick(experience)} className="bg-slate-950 w-[300px] h-[300px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] flex justify-center items-center relative cursor-pointer transform hover:scale-105 transition-transform duration-300">
                        <FaEdit
                            className="text-[30px] text-slate-950 absolute top-[-5px] right-[-5px] bg-[#00BFFF] p-[3px] rounded-[3px]"
                        />
                        <CardTitle className="text-gray-300 text-2xl font-semibold">{experience.organization}</CardTitle>
                    </Card>
                ))}
                <Card className="bg-slate-950 w-[300px] h-[300px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] flex justify-center items-center relative cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={handleAddClick}>
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
                            <DialogTitle className='text-gray-100 text-center font-semibold text-[30px]'>
                                {selectedExperience ? "Editar Experiência" : "Adicionar Experiência"}
                            </DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            <form onSubmit={(e: any) => {
                                e.preventDefault()
                                const newExperience = {
                                    organization: e.target.organization.value,
                                    time: e.target.time.value,
                                    role: e.target.role.value,
                                    activities: e.target.activities.value.split(','),
                                    stacks: e.target.stacks.value.split(',')
                                }
                                handleSave(newExperience)
                            }}>
                                <div className="flex flex-col gap-4">
                                    <input type="text" name="organization" placeholder="Organização" defaultValue={selectedExperience?.organization || ''} className="p-2 rounded bg-slate-800 text-gray-100" />
                                    <input type="text" name="time" placeholder="Tempo" defaultValue={selectedExperience?.time || ''} className="p-2 rounded bg-slate-800 text-gray-100" />
                                    <input type="text" name="role" placeholder="Função" defaultValue={selectedExperience?.role || ''} className="p-2 rounded bg-slate-800 text-gray-100" />
                                    <textarea name="activities" placeholder="Atividades (separadas por vírgula)" defaultValue={selectedExperience?.activities.join(', ') || ''} className="p-2 rounded bg-slate-800 text-gray-100"></textarea>
                                    <input type="text" name="stacks" placeholder="Stacks (separadas por vírgula)" defaultValue={selectedExperience?.stacks.join(', ') || ''} className="p-2 rounded bg-slate-800 text-gray-100" />
                                    <button type="submit" className="bg-[#00BFFF] text-gray-100 p-2 rounded">Salvar</button>
                                </div>
                            </form>
                        </DialogDescription>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}