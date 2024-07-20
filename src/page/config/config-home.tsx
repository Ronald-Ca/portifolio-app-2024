import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormHome } from "@/form/form-home"
import { useRef, useState } from "react"
import { FaCamera } from "react-icons/fa"

export default function ConfigHome() {
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
        fileInputRef?.current?.click()
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
                    <Button className="w-[100px] flex gap-[5px] bg-[#00BFFF] text-slate-950 border-[1px] border-slate-950 hover:text-[#00BFFF] hover:bg-[#1c222b] hover:border-[#00BFFF] absolute top-[-10px] right-[-160px]">
                        Salvar
                    </Button>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <FormHome />
                </div>
            </div>
        </div>
    )
}