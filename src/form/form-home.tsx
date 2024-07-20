import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FormProvider, useForm } from "react-hook-form"

export function FormConfigHome() {
    const form = useForm()
    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-[10px]">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-50">Título:</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Título" className="border-[1px] border-gray-50 w-[500px] bg-slate-950 text-gray-50" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-50">Cargo:</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Cargo" className="border-[1px] border-gray-50 w-[500px] bg-slate-950 text-gray-50" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-50">Descrição:</FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder="Descrição" className="border-[1px] border-gray-50 w-[500px] bg-slate-950 text-gray-50" />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </FormProvider>
    )
}