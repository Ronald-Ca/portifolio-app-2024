import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FormProvider, useForm } from "react-hook-form"

export function FormAbout() {
    const form = useForm()
    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-[10px]">
                <FormField
                    control={form.control}
                    name="iam"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-50">Eu:</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Quem sou eu?" className="border-[1px] border-gray-50 w-[500px] bg-slate-950 text-gray-50" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-50">Endereço:</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Qual seu endereço?" className="border-[1px] border-gray-50 w-[500px] bg-slate-950 text-gray-50" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="formation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-50">Formação:</FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder="Qual sua formação?" className="border-[1px] border-gray-50 w-[500px] h-[200px] bg-slate-950 text-gray-50" />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </FormProvider>
    )
}