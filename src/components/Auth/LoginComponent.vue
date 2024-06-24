<template>
    <div class="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 class="text-2xl font-bold mb-6 text-zinc-800 dark:text-white text-center">Login</h2>
        <form>
            <div class="mb-4">
                <label for="username"
                    class="block text-zinc-700 dark:text-zinc-200 text-sm font-bold mb-2">Email</label>
                <input type="text" id="username" placeholder="Example: Juan23"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 leading-tight focus:outline-none focus:shadow-outline"
                     v-model="form.username">
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
                <a href="#"
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-500">Forgot
                    password?</a>
            </div>
            <div class="mb-6">
                <button type="button"
                    class="w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    @click="login">LOGIN</button>
            </div>
            <p class="text-center text-zinc-600 dark:text-zinc-400 text-sm mb-4" @click="router.push({name:'register'})">Or Sign Up Using</p>
           
            <div class="flex items-center justify-between gap-4 mb-6">
                <button type="button"
                    class="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline btnFacebook">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                        viewBox="0 0 50 50">
                        <path
                            d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z">
                        </path>
                    </svg>
                </button>
                <button type="button"
                    class="flex items-center justify-center w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline btnTwitter">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                        viewBox="0 0 50 50">
                        <path
                            d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z">
                        </path>
                    </svg>
                </button>
                <button type="button"
                    class="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline btnGoogle">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                        viewBox="0 0 50 50">
                        <path
                            d="M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z">
                        </path>
                    </svg>
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import { loginService } from '@/services/login'
import { responseAxios } from '@/Helper'
import { useRouter } from 'vue-router';
import {clickPassword} from '@/utils/functions'

//Constants
const form = reactive({
    username: '',
    password: ''
})
const router = useRouter()

//Methods
const login = async () => {
    try {
        let formData = new FormData()
        formData.append('email', form.username)
        formData.append('password', form.password)
        
        const response = await loginService(formData)
 
        responseAxios(response)

        if (response.status == 200 || response.status == 201) {
            router.push({ name: 'home' })
        }

    } catch (error) {
        responseAxios(error)
    }
}
</script>
<style scoped>
.btnFacebook,
.btnTwitter,
.btnGoogle {
    border-radius: 50px !important;
    width: 50px;
    height: 50px;
}

svg {
    fill: white;
}

p{
    color: blue;
    cursor: pointer;
}
</style>