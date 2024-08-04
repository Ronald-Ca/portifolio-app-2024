import { DefaultReturnType } from "@/services/base-service";
import HomeService, { HomeType } from "@/services/home-service";
import { useMutation, useQuery } from "react-query";

const home = new HomeService()

type PropsTypeObject = {
    onSuccess?: (data: DefaultReturnType<HomeType>) => void
    onError?: (error: any) => void
}

const useGetHomeQuery = (options: PropsTypeObject) => {
    return useQuery(['get-home'], async () => await home.getHome(), {
        onSuccess: options?.onSuccess,
        onError: options?.onError
    })
}

const useCreateHomeMutation = (options: PropsTypeObject) => {
    return useMutation(async (data: HomeType) => await home.createHome(data), {
        onSuccess: options?.onSuccess,
        onError: options?.onError
    })
}

const useUpdateHomeMutation = (options: PropsTypeObject) => {
    return useMutation(async (data: HomeType) => await home.updateHome(data), {
        onSuccess: options?.onSuccess,
        onError: options?.onError
    })
}

export { useGetHomeQuery, useCreateHomeMutation, useUpdateHomeMutation }