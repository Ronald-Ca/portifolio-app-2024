import { Card, CardTitle } from "@/components/ui/card"
import { DialogHeader } from "@/components/ui/dialog"
import FormStack from "@/form/form-stack"
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import { useState } from "react"
import { FaEdit } from "react-icons/fa"
import { IoIosAdd, IoIosClose } from "react-icons/io"

interface Stack {
    name: string
    icon: string
    color: string
}

const stacks: Stack[] = [
    {
        name: "Github",
        icon: "github",
        color: "#181717"
    },
    {
        name: "Linkedin",
        icon: "linkedin",
        color: "#0077B5"
    },
    {
        name: "Instagram",
        icon: "instagram",
        color: "#E4405F"
    },
    {
        name: "Twitter",
        icon: "twitter",
        color: "#1DA1F2"
    },
]

export default function ConfigStack() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedStack, setSelectedStack] = useState<Stack | null>(null)

    const handleEditClick = (stack: Stack) => {
        setSelectedStack(stack)
        setIsOpen(true)
    }

    const handleAddClick = () => {
        setSelectedStack(null)
        setIsOpen(true)
    }

    const handleSave = (newStack: Stack) => {
        console.log(newStack)
        setIsOpen(false)
    }

    return (
        <div className="flex flex-col justify-center items-center border-[1px] border-[#00BFFF] pt-[20px] pb-[20px] rounded-[10px] gap-[20px]">
            <div className="flex flex-wrap justify-center items-center gap-[20px]">
                {stacks.map((stack, index) => (
                    <Card
                        key={index}
                        onClick={() => handleEditClick(stack)}
                        className="bg-slate-950 w-[200px] h-[200px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] flex flex-col justify-center items-center relative cursor-pointer transform hover:scale-105 transition-transform duration-300"
                    >
                        <FaEdit
                            className="text-[30px] text-slate-950 absolute top-[-5px] right-[-5px] bg-[#00BFFF] p-[3px] rounded-[3px]"
                        />
                        <CardTitle className="text-gray-300 text-2xl font-semibold mb-4">{stack.name}</CardTitle>
                    </Card>
                ))}
                <Card
                    onClick={handleAddClick}
                    className="bg-slate-950 w-[200px] h-[200px] border-[2px] rounded-[10px] border-[#00BFFF] p-[20px] flex justify-center items-center relative cursor-pointer transform hover:scale-105 transition-transform duration-300"
                >
                    <IoIosAdd className="text-gray-300 text-[100px]" />
                </Card>
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div
                        className="bg-slate-900 rounded-lg p-6 min-w-[400px] mx-auto relative border-[2px] border-[#00BFFF]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <DialogClose asChild>
                            <IoIosClose size={35} className="text-[#00BFFF] absolute top-0 right-0 cursor-pointer" onClick={() => setIsOpen(false)} />
                        </DialogClose>
                        <DialogHeader>
                            <DialogTitle className="text-gray-100 text-center font-semibold text-[30px]">
                                {selectedStack ? "Editar Habilidade" : "Adicionar Habilidade"}
                            </DialogTitle>
                        </DialogHeader>
                        <FormStack selectedStack={selectedStack} handleSave={handleSave} />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}