import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import fundo from "../../assets/background/office.png"

export default function Body() {
    return (
        <div className="relative w-full min-h-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${fundo})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center gap-[300px]">
                <div className="flex flex-col justify-center ml-[50px]">
                    <h1 className="font-medium text-5xl text-gray-200">Olá, eu me chamo Ronald!</h1>
                    <span className="text-[#00BFFF] text-lg">Desenvolvedor Full Stack Júnior</span>
                    <p className="text-xl text-gray-200 w-[50ch] mt-[20px]">Dedicado a melhorar continuamente minhas habilidades e conhecimentos.</p>
                    <Button
                        onClick={() => { window.location.href = "/contact" }}
                        className="w-[200px] h-[50px] mt-[20px] flex items-center justify-center gap-[10px] border border-gray-600 transition-transform duration-300 hover:text-[#00BFFF] hover:bg-[#1c222b] hover:border-[#00BFFF]">
                        Entrar em contato
                        <IoIosArrowDroprightCircle size={30} color="#00BFFF" />
                    </Button>
                </div>
                <div className="w-full flex flex-row justify-center items-center p-6">
                    <div className="p-2 rounded-full shadow-lg animate-rotateBorder" style={{ borderWidth: '4px', borderColor: '#00BFFF', borderStyle: 'solid' }}>
                        <Avatar className="w-[500px] h-[500px]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/104284345?v=4" alt="Foto de perfil" className="rounded-full" />
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    )
}