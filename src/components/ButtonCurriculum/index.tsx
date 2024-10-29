import { IoMdCodeDownload } from "react-icons/io";
import { Button } from "../ui/button";

interface ButtonCurriculumProps {
	onClick?: () => void;
}
export function ButtonCurriculum() {
	return (
		<Button className="w-[200px] hover:bg-[#00BFFF] hover:text-slate-900 flex gap-[5px] font-bold">
			DOWNLOAD CV <IoMdCodeDownload size={25} />
		</Button>
	)
}