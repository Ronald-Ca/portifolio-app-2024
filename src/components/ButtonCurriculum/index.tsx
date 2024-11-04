import { IoMdCodeDownload } from 'react-icons/io'
import { Button } from '../ui/button'
import CurriculumService from '@/services/curriculum-service'

interface ButtonCurriculumProps {
	id?: string
}

export function ButtonCurriculum({ id }: ButtonCurriculumProps) {
	const curriculumService = new CurriculumService()

	const downloadCurriculum = async () => {
		if (id) {
			const secureUrl = await curriculumService.downloadCurriculum(id)
			window.open(secureUrl)
		}
	}

	return (
		<Button onClick={downloadCurriculum} className='w-[200px] hover:bg-[#00BFFF] hover:text-slate-900 flex gap-[5px] font-bold'>
			DOWNLOAD CV <IoMdCodeDownload size={25} />
		</Button>
	)
}
