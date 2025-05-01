import { axiosWithToken } from "../api/api"

export const userService = {
    async getUser(){
        const response = await axiosWithToken.get('auth/me')
        return response
    }
}