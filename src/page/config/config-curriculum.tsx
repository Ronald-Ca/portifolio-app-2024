import { useState, useRef, useEffect } from 'react'
import { Button } from '../../components/ui/button'
import { TiUploadOutline } from 'react-icons/ti'
import { useCreateCurriculumMutation, useGetCurriculumQuery } from '../../queries/curriculum'
import { useAlert } from '../../components/common/alert'
import { useQueryClient } from 'react-query'

export default function ConfigCurriculum() {
	const { setAlert } = useAlert()
	const queryClient = useQueryClient()
	const [file, setFile] = useState<File | null>(null)
	const [fileName, setFileName] = useState<string | null>(null)
	const [localPreviewUrl, setLocalPreviewUrl] = useState<string | null>(null)
	const fileInputRef = useRef<HTMLInputElement | null>(null)

	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setFile(file)
			setFileName(file.name)
			const previewUrl = URL.createObjectURL(file)
			setLocalPreviewUrl(previewUrl)
		}
	}

	const handleUploadClick = () => {
		fileInputRef.current?.click()
	}

	const { data: curriculum } = useGetCurriculumQuery()

	const createCurriculum = useCreateCurriculumMutation({
		onSuccess: () => {
			queryClient.invalidateQueries('get-curriculum')
			setAlert({ title: 'Sucesso!', message: 'Currículo criado com sucesso!', type: 'success' })
			if (localPreviewUrl) {
				URL.revokeObjectURL(localPreviewUrl)
				setLocalPreviewUrl(null)
			}
		},
		onError: () => {
			setAlert({ title: 'Erro ao criar currículo!', message: 'Erro ao criar o currículo!', type: 'error' })
		},
	})

	const updateCurriculum = useCreateCurriculumMutation({
		onSuccess: () => {
			queryClient.invalidateQueries('get-curriculum')
			setAlert({ title: 'Sucesso!', message: 'Currículo atualizado com sucesso!', type: 'success' })
			if (localPreviewUrl) {
				URL.revokeObjectURL(localPreviewUrl)
				setLocalPreviewUrl(null)
			}
		},
		onError: () => {
			setAlert({ title: 'Erro ao atualizar currículo!', message: 'Erro ao atualizar o currículo!', type: 'error' })
		},
	})

	const handleSave = () => {
		if (curriculum?.curriculum) {
			updateCurriculum.mutate({ curriculum: file as File, fileName: fileName as string, id: curriculum.id })
		} else {
			createCurriculum.mutate({ curriculum: file as File, fileName: fileName as string })
		}
	}

	useEffect(() => {
		if (curriculum?.curriculum) {
			setFileName(curriculum.fileName as string)

			if (typeof curriculum.curriculum === 'string') {
				setLocalPreviewUrl(curriculum.curriculum)
			}
		}
	}, [curriculum])

	return (
		<div className='flex flex-col items-center gap-4 w-full justify-center text-white'>
			<h1 className='font-semibold text-2xl'>Carregar Currículo</h1>

			<div className='flex flex-col items-center gap-4'>
				<div className='flex gap-[10px]'>
					<Button className='flex items-center gap-2' onClick={handleUploadClick}>
						Upload <TiUploadOutline />
					</Button>

					<Button
						onClick={handleSave}
						className='bg-[#00BFFF] text-slate-950 border-[1px] border-slate-950 hover:text-[#00BFFF] hover:bg-[#1c222b] hover:border-[#00BFFF]'
					>
						Salvar
					</Button>

					<input ref={fileInputRef} type='file' accept='.pdf' className='hidden' onChange={handleFileChange} />
				</div>
				{fileName && <span className='text-slate-400'>{fileName}</span>}
			</div>

			{localPreviewUrl && (
				<div className='w-full max-w-[500px] h-[600px] mt-4'>
					<iframe
						src={localPreviewUrl || undefined}
						className='w-full h-full border border-slate-400'
						title='Pré-visualização do Currículo'
					></iframe>
				</div>
			)}
		</div>
	)
}
