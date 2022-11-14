<template>
    <div class="container">
        <div class="flex-grid">
            <UserProfileCard :user="user" />
            <p class="text-small text-faded text-center">Member since june</p>
            <div class="tect-center">
                <hr>
                <a href="" class="btn-green btn-small">Edit profile</a>
            </div>
            <div class="col-7 push-top">
                <div class="profile-header">
                    <span class="text-lead">{{ user.name }} recent activity</span>
                    <a href="">See only threads</a>
                </div>
            </div>
        </div>
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