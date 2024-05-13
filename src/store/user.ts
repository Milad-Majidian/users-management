import { create } from 'zustand'

export interface UserStore {
    setToken: (jwt: string) => void
    getToken: () => string | null
    logout: () => void
}

export const useUserStore = create<UserStore>((set) => ({
    setToken: (jwt: string) => {
        localStorage.setItem('token', jwt)
    },
    getToken: () => {
        return localStorage.getItem('token') || null
    },
    logout: () => {
        localStorage.removeItem('token')
    }
}))
