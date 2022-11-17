<template>
    <div>
        <div class="flex justify-end ">
            <AppButton text="Edit profile" />

        </div>
        <UserProfileCard :user="user" />

    </div>
</template>

<script>
import UserProfileCard from '@/components/user/UserProfileCard.vue';
import { useStore } from 'vuex';

export default {
    props: {
        id: {
            type: String
        },
    },
    setup() {
        let store = useStore();
        let user = store.getters.authUser;

        return {
            user
        };
    },
    components: { UserProfileCard }
}
</script>

<style>

</style>