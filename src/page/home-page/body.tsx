import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Body() {
    return (
        <div className="w-full h-screen bg-slate-800 flex p-2">
            <div className="flex flex-col justify-center p-6">
                <h1 className="font-medium text-5xl text-gray-200">Olá, eu me chamo Ronald!</h1>
                <span className="text-gray-600 text-lg">Desenvolvedor Full Stack Júnior</span>
                <p className="text-xl text-gray-200 w-[50ch] mt-[20px]">Dedicado a melhorar continuamente minhas habilidades e conhecimentos.</p>
                <Button className="w-[200px] h-[50px] mt-[20px] flex items-center justify-center gap-[10px] border border-gray-600 transition-transform duration-300 hover:text-[#00BFFF] hover:bg-[#1c222b] hover:border-[#00BFFF]">
                    Entrar em contato
                    <IoIosArrowDroprightCircle size={30} color="#00BFFF" />
                </Button>
            </div>
            <div className="w-full flex flex-row justify-center items-center p-6">
                <div className="border-4 border-[#00BFFF] p-2 rounded-full shadow-lg">
                    <Avatar className="w-[500px] h-[500px]">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/104284345?v=4" alt="Foto de perfil" className="rounded-full" />
                    </Avatar>
                </div>
            </div>
        </div>
    );
}