<template>
    <div class="col-3 push-top">
        <div class="profile-card">
            <p class="text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile">
            </p>
        </div>
        <h1 class="title" v-text="user.username"></h1>
        <p class="text-lead" v-text="user.name"></p>
        <p class="text-justify" v-text="user.bio"></p>
        <span class="online" v-text="user.username"></span>
        <div class="stats">
            <span>{{ user.postsCount }} posts</span> -
            <span>{{ user.threads?.length }} threads</span>
        </div>
        <hr>
        <p class="text-large text-center">
            <i class="fa fa-globe"></i>
            <a :href="user.website" class="btn-green btn-small">{{ user.website }}</a>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        user: Object
    }
}
</script>

<style>

</style>