import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FormProvider, useForm } from "react-hook-form"

interface Experience {
    company: string
    period: string
    role: string
    activities: string[]
    stacks: string[]
}

interface ExperienceFormProps {
    selectedExperience?: Experience
    handleSave: (experience: Experience) => void
}

export function FormExperience({ selectedExperience, handleSave }: ExperienceFormProps) {
    const form = useForm()

    const onSubmit = (data: any) => {
        const newExperience = {
            company: data.company,
            period: data.period,
            role: data.role,
            activities: data.activities.split(','),
            stacks: data.stacks.split(','),
        }
        handleSave(newExperience)
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="company"
                    defaultValue={selectedExperience?.company || ''}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-50">Organização:</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Organização" className="p-2 rounded bg-slate-800 text-gray-100" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="period"
                    defaultValue={selectedExperience?.period || ''}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-50">Tempo:</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Tempo" className="p-2 rounded bg-slate-800 text-gray-100" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    defaultValue={selectedExperience?.role || ''}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-50">Função:</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Função" className="p-2 rounded bg-slate-800 text-gray-100" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="activities"
                    defaultValue={selectedExperience?.activities.join(', ') || ''}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-50">Atividades:</FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder="Atividades (separadas por vírgula)" className="p-2 rounded bg-slate-800 text-gray-100" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="stacks"
                    defaultValue={selectedExperience?.stacks.join(', ') || ''}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-50">Stacks:</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Stacks (separadas por vírgula)" className="p-2 rounded bg-slate-800 text-gray-100" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="bg-[#00BFFF] text-slate-950 hover:text-[#00BFFF] hover:bg-[#1c222b] hover:border-[#00BFFF]">
                    Salvar
                </Button>
            </form>
        </FormProvider>
    )
}