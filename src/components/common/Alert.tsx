import { useEffect, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { FaWindowClose } from "react-icons/fa"

type AlertProps = {
    title: string
    message: string
    type: 'success' | 'error'
    duration?: number
}

export default function CustomAlert({ title, message, type, duration = 10000 }: AlertProps) {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
        }, duration)

        return () => clearTimeout(timer)
    }, [duration])

    if (!visible) return null

    return (
        <Alert className={`max-w-[400px] fixed top-5 right-[10px] z-50 p-2 rounded shadow bg-slate-900 ${type === 'error' ? 'border-red-500' : 'border-green-500'} border-[1px]`}>
            <div className="flex items-center gap-[10px]">
                <FaWindowClose size={20} color="red" />
                <div>
                    <AlertTitle className={'text-[#fff]'}>{title}</AlertTitle>
                    <AlertDescription className={'text-[#fff]'}>{message}</AlertDescription>
                </div>
            </div>
        </Alert>
    )
}
