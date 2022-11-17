<template>
    <header>
        <nav class="bg-blue-500 border-gray-200 px-2 sm:px-4 py-2.5">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <router-link to="/" class="flex items-center">
                    <AppLogo size="text-2xl" color="text-white" />
                </router-link>
                <div class="flex items-center md:order-2">
                    <div v-if="isLoggedIn" class="flex justify-end">
                        <router-link :to="{
                            name: 'profile'
                        }" class="flex items-center gap-2 mr-3 text-sm md:mr-0">
                            <img class="w-9 h-9 rounded-full border border-solid border-white"
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user photo">
                            <div>
                                <p class="text-white capitalize font-bold flex items-start gap-1">
                                    <span>{{ user.name }} </span>

                                    <span class="font-black text-green-300">•</span>
                                </p>
                                <p class="text-blue-50 text-xs">
                                    {{ user.email }}
                                </p>
                            </div>

                        </router-link>
                        <button @click="signOut" class="text-gray-50 hover:text-gray-800 ml-3 md:ml-5 lg:ml-8">
                            <font-awesome-icon icon="sign-out" />
                        </button>
                    </div>
                    <div v-else class="flex text-white">
                        <router-link to="/sign-up"> Sing Up </router-link>
                        <span class="mx-3">|</span>
                        <router-link to="/sign-in" class="font-bold"> Login </router-link>
                    </div>

                </div>

            </div>
        </nav>
    </header>
</template>

<script>
import { useStore } from 'vuex';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue';
import clearCookies from '@/helper/cookie/clearCookies';

export default {
    setup() {
        let store = useStore();
        let router = useRouter()
        let user = reactive(store.getters.authUser);
        let isLoggedIn = ref(store.getters.isLoggedIn);

        store.watch((_, getters) => {
            Object.assign(user, getters.authUser)
            isLoggedIn.value = getters.isLoggedIn
        })

        const signOut = () => {
            firebase.auth().signOut()
            clearCookies()
            store.dispatch('toggleLoggedIn', { isLoggedIn: false })
            store.dispatch('addAuthUser', { user: {} })
            router.push('/sign-in')
        }

        return {
            user,
            signOut,
            isLoggedIn
        }
    }
}
</script>

<style>

</style>