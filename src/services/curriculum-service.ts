import api from '@/utils/api'
import BaseService, { DefaultReturnType } from './base-service'

export default class CurriculumService extends BaseService {
	constructor() {
		super('curriculum')
	}
	async getCurriculum(): Promise<CurriculumType> {
		const response = await api.get('/curriculum')
		return response.data.data
	}

	async createCurriculum(data: CurriculumType): Promise<DefaultReturnType<CurriculumType>> {
		const formData = new FormData()
		if (data.curriculum !== null) {
			formData.append('curriculum', data.curriculum)
		}

		const response = await api.post('/curriculum/create', formData, this.getToken())
		return response.data
	}

	async updateCurriculum(data: CurriculumType): Promise<DefaultReturnType<CurriculumType>> {
		const formData = new FormData()
		if (data.curriculum !== null) {
			formData.append('curriculum', data.curriculum)
		}

		const response = await api.put(`/curriculum/update/${data.id}`, formData, this.getToken())
		return response.data
	}

	async downloadCurriculum(id: string): Promise<string> {
		const response = await api.get(`/curriculum/download/${id}`)
		const secureUrl = response.data.data.secure_url
		return secureUrl
	}
}

export type CurriculumType = {
	id?: string
	curriculum: string | File | null
	fileName?: string
	publicId?: string
}
