<template>
    <div>
        <div class="flex justify-end ">
            <AppButton text="Edit profile" @click="openModal" />
        </div>
        <UserProfileCard :user="user" />

        <app-modal>
            <form @submit.prevent="updateProfile" class="flex gap-2">
                <AppInput placeholder="Full name" :isSent="isSent" @input-value="handleNameInputValue" />
                <AppButton text="Save profile" />
            </form>
        </app-modal>
    </div>
</template>

<script>
import UserProfileCard from '@/components/user/UserProfileCard.vue';
import { close, open } from '@/helper/toggleModal';
import { useStore } from 'vuex';
import { ref } from '@vue/reactivity';
import firebase from 'firebase/compat/app'

export default {
    props: {
        id: {
            type: String
        },
    },
    setup() {
        let store = useStore();
        let user = store.getters.authUser;
        let name = ref('')
        let isSent = ref(false)

        let openModal = () => {
            open()
        }

        let updateProfile = async () => {
            let usersRef = firebase.firestore().collection('users')

            isSent.value = true

            await usersRef.doc("uid", "==", user.uid).update({
                name: name.value
            })

            user.name = name.value

            setTimeout(() => {
                isSent.value = false
                close()
            }, 100);
        }

        let handleNameInputValue = (value) => {
            name.value = value
        }
        return {
            user,
            openModal,
            handleNameInputValue,
            updateProfile
        };
    },
    components: { UserProfileCard }
}
</script>

<style>

</style>