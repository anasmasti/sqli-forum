<template>
    <header class="header" id="header">
        <router-link class="logo" to="/">
            <img src="../assets/logo.png" alt="logo" />
        </router-link>
        <div class="btn-hamburger">
            <div class="top bar"></div>
            <div class="middle bar"></div>
            <div class="bottom bar"></div>
        </div>
        <nav class="navbar">
            <ul>
                <li class="navbar-user" v-if="isLoggedIn">
                    <router-link :to="{
                        name: 'profile'
                    }">
                        <img src="../assets/logo.png" alt="avatar" class="avatar-small" />
                        <span>{{ user.email }}
                            <img src="../assets/logo.png" alt="arrow" class="icon-profile" /></span>
                    </router-link>

                    <button @click="signOut">Logout</button>
                </li>


                <li v-else>
                    <router-link to="/sign-up"> Sing Up </router-link> |
                    <router-link to="/sign-in"> Login </router-link>
                </li>
            </ul>
        </nav>
    </header>
    <div>
        <slot></slot>
    </div>
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
            console.log(user);
            isLoggedIn.value = getters.isLoggedIn
        })

        const signOut = () => {
            firebase.auth().signOut()
            clearCookies()
            store.dispatch('toggleLoggedIn', { isLoggedIn: false })
            store.dispatch('addAuthUser', { user: {} })
            router.push('/')
        }

        return {
            user,
            signOut,
            isLoggedIn
        }
    }
};
</script>
  
<style lang="scss" scoped>

</style>