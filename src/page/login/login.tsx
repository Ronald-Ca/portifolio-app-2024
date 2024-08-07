import CustomAlert from "@/components/common/Alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthenticateMutation } from "@/queries/user";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

type AlertType = 'success' | 'error'

function LoginForm() {
    const form = useForm()
    const [alert, setAlert] = useState<{ title: string; message: string; type: AlertType } | null>(null)
    const loginMutation = useAuthenticateMutation({
        onSuccess: (data) => {
            localStorage.setItem('auth', JSON.stringify({ token: data.data.token }))
        },
        onError: () => {
            setAlert({ title: 'Erro ao logar!', message: 'Usuário ou senha incorreta!', type: 'error' })
        }
    })

    const onSubmit = async (data: any) => {
        loginMutation.mutate(data)
    }

    return (
        <FormProvider {...form}>
            {alert && <CustomAlert {...alert} />}
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center gap-[10px]'>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-gray-50'>Email:</FormLabel>
                            <FormControl>
                                <Input {...field} type="email" placeholder="Seu email" className="border-[1px] border-gray-50 w-[350px] bg-slate-950 text-gray-50" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-gray-50'>Senha:</FormLabel>
                            <FormControl>
                                <Input {...field} type="password" placeholder="Sua senha" className="border-[1px] border-gray-50 w-[350px] bg-slate-950 text-gray-50" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="bg-slate-950 w-[200px] mt-[30px] hover:bg-[#00BFFF] hover:text-slate-900 flex gap-[5px] font-semibold text-[15px]">
                    Entrar
                </Button>
            </form>
        </FormProvider>
    )

}

export default function Login() {
    return (
        <div className="bg-gradient-to-r from-slate-950 to-slate-800 h-screen w-full flex justify-center items-center">
            <Card className="w-[400px] h-[400px] bg-slate-900 rounded-[10px] border-[2px] border-[#00BFFF] flex flex-col items-center justify-center">
                <a href="/">
                    <img src="src/assets/icon.png" width={50} height={50} className=" rounded-[10px] mb-[10px]" />
                </a>
                <LoginForm />
            </Card>
        </div>
    )
}