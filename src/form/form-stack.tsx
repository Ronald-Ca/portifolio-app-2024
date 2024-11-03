import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormProvider, useForm } from "react-hook-form"

interface Stack {
    name: string
    icon: string
    color: string
}

interface StackFormProps {
    selectedStack: Stack | null
    handleSave: (stack: Stack) => void
}

export default function FormStack({ selectedStack, handleSave }: StackFormProps) {
    const form = useForm<Stack>({
        defaultValues: {
            name: selectedStack?.name || '',
            icon: selectedStack?.icon || '',
            color: selectedStack?.color || '',
        }
    })

    const onSubmit = (data: Stack) => {
        handleSave(data)
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-300">Nome</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Nome da stack"
                                    className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="icon"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-300">Ícone</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="ícone stack"
                                    className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-300">Cor</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Cor do ícone"
                                    className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="bg-[#00BFFF] text-slate-950 hover:text-[#00BFFF] hover:bg-[#1c222b] hover:border-[#00BFFF]"
                >
                    Salvar
                </Button>
            </form>
        </FormProvider>
    )
}