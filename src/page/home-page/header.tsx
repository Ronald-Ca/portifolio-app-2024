import { GiCoffeeCup } from "react-icons/gi";

export default function Header() {
    return (
        <div className="w-full flex justify-between bg-gray-200 p-4">
            <div className="flex flex-col justify-center items-center border border-black p-4 bg-yellow-400 rounded-lg shadow-lg">
                <GiCoffeeCup size={30} color="black" />
            </div>
            <div>
                <a href="">Sobre</a>
                <a href="">Skills</a>
                <a href="">Projetos</a>
            </div>
            <div>
                <a href="">Contato</a>
                <a href="">Login</a>
            </div>
        </div>
    )
}