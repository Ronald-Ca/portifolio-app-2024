import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TiUploadOutline } from "react-icons/ti";

export default function ConfigCurriculum() {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center gap-[10px] w-full justify-center text-white">
      <h1 className="font-[600] text-[30px]">Carregar Currículo</h1>

      <div className="flex flex-col items-center gap-[10px]">
        <Button
          className="flex items-center gap-[10px]"
          onClick={handleUploadClick}
        >
          Upload <TiUploadOutline />
        </Button>

        {fileName && (
          <span className="text-slate-400">{fileName}</span>
        )}

        <Button className="flex items-center gap-[10px] bg-[#00BFFF] text-slate-950 w-[100px]">
          Salvar
        </Button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
