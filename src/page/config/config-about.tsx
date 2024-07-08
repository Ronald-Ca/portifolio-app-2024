import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRef, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { FaCamera } from "react-icons/fa"

export default function ConfigAbout() {
    const [imagePreview, setImagePreview] = useState('https://avatars.githubusercontent.com/u/104284345?v=4')
    const fileInputRef = useRef<HTMLInputElement>(null)
    const handleImageChange = (event: any) => {
        const file = event.target.files[0]
        if (file) {
            const imageURL = URL.createObjectURL(file)
            setImagePreview(imageURL)
        }
    }

    const handleCameraClick = () => {
        fileInputRef?.current?.click()
    }

    function aboutSubmit() {
        const form = useForm()
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
                    <Button type="submit" className="bg-[#00BFFF] text-gray-50 p-[10px] rounded-[10px] hover:bg-[#1c222b]">Salvar</Button>
                </form>
            </FormProvider>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center border-[1px] border-[#00BFFF] pt-[20px] pb-[20px] rounded-[10px]">
            <div className="flex">
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
            </div>
        </div>
    )
}