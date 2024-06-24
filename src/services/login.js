import axios from "@/utils/axios.config"
import {LOGIN} from '@/utils/api-constants'
import {saveLocalStorage} from "@/utils/functions"

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL

export const loginService = async (formData) => {
    return axios.post(BACKEND_URL + LOGIN.LOGIN, formData).then((response) => {
        saveLocalStorage(response.data)
        
        return response
    }).catch((response) => {
        return response
    })
}