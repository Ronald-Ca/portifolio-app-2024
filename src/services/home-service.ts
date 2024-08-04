import api from "@/utils/api";
import BaseService, { DefaultReturnType } from "./base-service";

export default class HomeService extends BaseService {
    constructor() {
        super('/home')
    }

    async getHome(): Promise<HomeType> {
        const response = await api.get('/home/get')
        return response.data
    }

    async createHome(data: HomeType): Promise<DefaultReturnType<HomeType>> {
        const response = await api.post('/home/create', { data }, this.getToken())
        return response.data
    }

    async updateHome(data: HomeType): Promise<DefaultReturnType<HomeType>> {
        const response = await api.post('/home/create', { data }, this.getToken())
        return response.data
    }
}

export type HomeType = {
    title: string
    role: string
    description: string
    image: string
}