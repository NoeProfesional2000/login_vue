<template>
    <div class="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 class="text-2xl font-bold mb-6 text-zinc-800 dark:text-white text-center">Register</h2>
        <form>
            <div class="mb-4">
                <label for="name"
                    class="block text-zinc-700 dark:text-zinc-200 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" placeholder="Example: Juan"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 leading-tight focus:outline-none focus:shadow-outline"
                     v-model="form.name">
            </div>
            <div class="mb-4">
                <label for="last_name"
                    class="block text-zinc-700 dark:text-zinc-200 text-sm font-bold mb-2">Last Name</label>
                <input type="text" id="last_name" placeholder="Example: Perez"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 leading-tight focus:outline-none focus:shadow-outline"
                     v-model="form.last_name">
            </div>
            <div class="mb-4">
                <label for="email"
                    class="block text-zinc-700 dark:text-zinc-200 text-sm font-bold mb-2">Email</label>
                <input type="text" id="email" placeholder="Example: juanperez@gmail.com"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 leading-tight focus:outline-none focus:shadow-outline"
                     v-model="form.email">
            </div>
            <div class="form-group mb-6">
                <label for="password"
                    class="block text-zinc-700 dark:text-zinc-200 text-sm font-bold mb-2">Password</label>
                <div class="input-group">
                    <input type="password" id="password" placeholder="*********"
                        class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 leading-tight focus:outline-none focus:shadow-outline"
                         v-model="form.password">
                    <span class="input-group-text" @click="clickPassword">
                        <span id="iconPassword" class="fa fa-eye-slash"></span>
                    </span>
                </div>
            </div>
            <div class="mb-6">
                <button type="button"
                    class="w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    @click="register">Register</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import { storeUserService } from '@/services/user'
import { responseAxios } from '@/Helper'
import { useRouter } from 'vue-router';
import {clickPassword, saveLocalStorage} from '@/utils/functions'

//Constants
const form = reactive({
    name: '',
    last_name: '',
    email: '',
    password: ''
})
const router = useRouter()

//Methods
const register = async () => {
    try {
        let formData = new FormData()
        formData.append('name', form.name)
        formData.append('last_name', form.last_name)
        formData.append('email', form.email)
        formData.append('password', form.password)
        
        const response = await storeUserService(formData)
 
        responseAxios(response)

        if (response.status == 200 || response.status == 201) {
            saveLocalStorage(response.data)
            router.push({ name: 'home' })
        }

    } catch (error) {
        responseAxios(error)
    }
}
</script>
<style scoped>

svg {
    fill: white;
}

p{
    color: blue;
    cursor: pointer;
}
</style>