import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormProvider, useForm } from "react-hook-form"

interface SocialMedia {
    name: string
    link: string
    icon: string
    color: string
}

interface SocialMediaFormProps {
    selectedMedia: SocialMedia | null
    handleSave: (media: SocialMedia) => void
}

export default function FormSocialMedia({ selectedMedia, handleSave }: SocialMediaFormProps) {
    const form = useForm<SocialMedia>({
        defaultValues: {
            name: selectedMedia?.name || '',
            link: selectedMedia?.link || '',
            icon: selectedMedia?.icon || '',
            color: selectedMedia?.color || '',
        }
    })

    const onSubmit = (data: SocialMedia) => {
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
                                    placeholder="Nome da rede social"
                                    className="bg-slate-800 text-gray-300 p-2 rounded-lg border-[1px] border-[#00BFFF]"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="link"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-300">Link</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Link da rede social"
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
                                    placeholder="Nome do ícone da rede"
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