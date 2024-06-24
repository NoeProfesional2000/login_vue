import axios from "../utils/axios.config"
import {USER} from '@/utils/api-constants.js'

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL

export const storeUserService = async (formData) => {
    return axios.post(BACKEND_URL + USER.REGISTER, formData).then((response) => {
        return response
    }).catch((response) => {
        return response
    })
}

export const getAllUserService = async () => {
    return axios.get(BACKEND_URL + USER.GET_ALL, formData).then((response) => {
        return response
    }).catch((response) => {
        return response
    })
}

export const getOneUserService = async (id, formData) => {
    return axios.get(BACKEND_URL + USER.GET_ONE.replace(':id', id), formData).then((response) => {
        return response
    }).catch((response) => {
        return response
    })
}

export const editUserService = async (id, formData) => {
    return axios.put(BACKEND_URL + USER.UPDATE.replace(':id', id), formData).then((response) => {
        return response
    }).catch((response) => {
        return response
    })
}

export const updateUserService = async (id, formData) => {
    return axios.put(BACKEND_URL + USER.CHANGE_STATUS.replace(':id', id), formData).then((response) => {
        return response
    }).catch((response) => {
        return response
    })
}