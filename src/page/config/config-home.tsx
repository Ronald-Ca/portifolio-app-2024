import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ConfigHome() {
    return (
        <div className="flex justify-center gap-[50px]">
            <div>
                <Input type="file" className="cursor-pointer" />
            </div>
            <div className="flex flex-col gap-[10px]">
                <Input type="text" placeholder="Título" />
                <Input type="text" placeholder="Cargo" />
                <Textarea placeholder="Descrição" />
            </div>
        </div>
    )
}