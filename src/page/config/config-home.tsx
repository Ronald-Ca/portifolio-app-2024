import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa";

export default function ConfigHome() {
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
    function handleSubmit() {
        const form = useForm()
        const onSubmit = (data: any) => {
            console.log(data)
        }

        return (
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center gap-[10px]'>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-50'>Título:</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Título" className="border-[1px] border-gray-50 w-[500px] bg-slate-950 text-gray-50" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-50'>Cargo:</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Cargo" className="border-[1px] border-gray-50 w-[500px] bg-slate-950 text-gray-50" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-50'>Descrição:</FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder="Descrição" className="border-[1px] border-gray-50 w-[500px] bg-slate-950 text-gray-50" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </form>
            </FormProvider>
        )
    }

    return (
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
                    {handleSubmit()}
                </div>
            </div>
        </div>
    )
}