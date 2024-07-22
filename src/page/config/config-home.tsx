import { Input } from "@/components/ui/input"
import { FormHome } from "@/form/form-home"
import { useRef, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { FaCamera } from "react-icons/fa"

interface HomeData {
    image: File | null
    title: string
    role: string
    description: string
}

export default function ConfigHome() {
    const [imagePreview, setImagePreview] = useState('https://avatars.githubusercontent.com/u/104284345?v=4')
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [_, setSelectedFile] = useState<File | null>(null)

    const formMethods = useForm<HomeData>({
        defaultValues: {
            image: null,
            title: '',
            role: '',
            description: ''
        }
    })

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const imageURL = URL.createObjectURL(file)
            setImagePreview(imageURL)
            setSelectedFile(file)
            formMethods.setValue('image', file)
        }
    }

    const handleCameraClick = () => {
        fileInputRef?.current?.click()
    }

    const onSubmit = (data: HomeData) => {
        const formData = new FormData()
        formData.append('image', data.image!)
        formData.append('title', data.title)
        formData.append('role', data.role)
        formData.append('description', data.description)

        // Enviar formData para o backend (Exemplo com fetch)
        fetch('/api/home', {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                console.log('Formulário enviado com sucesso')
            } else {
                console.error('Erro ao enviar o formulário')
            }
        })
    }

    return (
        <FormProvider {...formMethods}>
            <div className="min-h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center border-[1px] border-[#00BFFF] pt-[20px] pb-[20px] rounded-[10px] w-[600px]">
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
                        <FormHome onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
        </FormProvider>
    )
}