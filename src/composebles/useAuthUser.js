import { ref } from 'vue'
import useSupabase from 'boot/supabase'

const user = ref(null)

export default function useAuthUser () {
    const { supabase } = useSupabase()

    const login = async ({ email, password }) => {
        const { user, error } = await supabase.auth.signIn({ email, password })

        if (error) throw error
        return user
    }

    const loginWithSociaProvider = async (provider) => {
        const { user, error } = await supabase.auth.update(provider)

        if (error) throw error
        return user
    }

    const logout = async () => {
        const { error } = await supabase.auth.signOut()

        if (error) throw error
    }

    const isLoggedIn = async () => {
        return !!user.value
    }

    const register = async ({ email, password, ...meta }) => {
        const { user, error } = await supabase.auth.signUp(
            { email, password },
            {
                data: meta,
                redirectTo: `${window.location.origin}/login`
            }
        )
        if (error) throw error
        return user
    }

    const updated = async (data) => {
        const { user, error } = await supabase.auth.update(data)

        if (error) throw error
        return user
    }

    const sendPasswordRestEmail = async (email) => {
        const { user, error } = await supabase.auth.api.resetPasswordForEmail(email)

        if (error) throw error
        return user
    }

    const resetPassword = async (accessToken, newPassword) => {
        const { user, error } = await supabase.auth.api.updateUser(accessToken, { password: newPassword })
        if (error) throw error
        return user
    }

    return {
        user,
        login,
        loginWithSociaProvider,
        logout,
        isLoggedIn,
        register,
        updated,
        sendPasswordRestEmail,
        resetPassword
    }
}
