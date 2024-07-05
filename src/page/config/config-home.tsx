import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";

export default function ConfigHome() {
    const [imagePreview, setImagePreview] = useState('https://avatars.githubusercontent.com/u/104284345?v=4');
    const fileInputRef = useRef(null)

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImagePreview(imageURL);
        }
    }

    const handleCameraClick = () => {
        fileInputRef.current.click()
    }

    return (
        <div className="flex justify-center gap-[50px]">
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
                <Input type="text" placeholder="Título" />
                <Input type="text" placeholder="Cargo" />
                <Textarea placeholder="Descrição" />
            </div>
        </div>
    )
}