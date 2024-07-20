import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRef, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"

interface ProjectFormProps {
    selectedProject?: Project
    handleSave: (project: Project) => void
}

interface Project {
    name: string
    previewImage: string
    video: string
    description: string
    link: string
    stacks?: string[]
}

export function FormProject({ selectedProject, handleSave }: ProjectFormProps) {
    const form = useForm({
        defaultValues: {
            name: selectedProject?.name || "",
            previewImage: selectedProject?.previewImage || "",
            video: selectedProject?.video || "",
            description: selectedProject?.description || "",
            link: selectedProject?.link || "",
            stacks: selectedProject?.stacks?.join(", ") || "",
        }
    })

    const [imagePreview, setImagePreview] = useState(selectedProject?.previewImage || null)
    const [videoPreview, setVideoPreview] = useState(selectedProject?.video || null)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const videoInputRef = useRef<HTMLInputElement>(null)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const imageURL = URL.createObjectURL(file)
            setImagePreview(imageURL)
            form.setValue("previewImage", imageURL)
        }
    }

    const handleCameraClick = () => {
        fileInputRef?.current?.click()
    }

    const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const videoURL = URL.createObjectURL(file)
            setVideoPreview(videoURL)
            form.setValue("video", videoURL)
        }
    }

    const handleCameraClickVideo = () => {
        videoInputRef?.current?.click()
    }

    const onSubmit = (data: any) => {
        const newProject = {
            name: data.name,
            previewImage: data.previewImage,
            video: data.video,
            description: data.description,
            link: data.link,
            stacks: data.stacks.split(","),
        }
        handleSave(newProject)
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-300">Nome</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Nome do projeto" className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-300">Descrição</FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder="Descrição do projeto" className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="link"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-300">Link</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Link do projeto" className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="stacks"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-300">Stacks</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Stacks (separadas por vírgula)" className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormItem>
                    <FormLabel className="text-gray-300">Imagem</FormLabel>
                    <FormControl>
                        <div onClick={handleCameraClick} className="h-[200px] cursor-pointer flex items-center justify-center border-[1px] border-dashed p-[8px] rounded-[10px]">
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-[100%] h-[100%] object-cover rounded-[10px]"
                                />
                            ) : (<p className="text-gray-50">Adicione uma imagem para pré-vizualização</p>)}
                            <Input
                                type="file"
                                className="hidden"
                                onChange={handleImageChange}
                                ref={fileInputRef}
                            />
                        </div>
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel className="text-gray-300">Video</FormLabel>
                    <FormControl>
                        <div onClick={handleCameraClickVideo} className="h-[200px] cursor-pointer flex items-center justify-center border-[1px] border-dashed p-[8px] rounded-[10px]">
                            {videoPreview ? (
                                <video
                                    src={videoPreview}
                                    className="w-[100%] h-[100%] object-cover rounded-[10px]"
                                    controls
                                />
                            ) : (<p className="text-gray-50">Adicione um vídeo para pré-vizualização</p>)}
                            <Input
                                type="file"
                                className="hidden"
                                onChange={handleVideoChange}
                                ref={videoInputRef}
                            />
                        </div>
                    </FormControl>
                </FormItem>
                <Button type="submit" className="bg-[#00BFFF] text-slate-950 hover:text-[#00BFFF] hover:bg-[#1c222b] hover:border-[#00BFFF]">
                    Salvar
                </Button>
            </form>
        </FormProvider>
    )
}