import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";


function LoginForm() {
    const form = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <FormProvider {...form}>
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
                <Button type="submit" className="w-[200px] mt-[30px] hover:bg-[#00BFFF] hover:text-slate-900 flex gap-[5px] font-semibold text-[15px]">Entrar</Button>
            </form>
        </FormProvider>
    )

}

export default function Login() {
    return (
        <div className="bg-gradient-to-r from-slate-950 to-slate-800 h-screen w-full flex justify-center items-center">
            <Card className="w-[400px] h-[400px] bg-slate-950 rounded-[10px] flex flex-col items-center justify-center">
                <a href="/">
                    <img src="src/assets/icon.png" alt="" className=" rounded-[10px] mb-[10px]" />
                </a>
                <h1 className="text-[30px] text-gray-50 font-semibold">Login</h1>
                <LoginForm />
            </Card>
        </div>
    )
}