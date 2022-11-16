<template>
        <div class="bg-red-500">
            <h2 class="list-title">
                <router-link :to="{
                    name: 'forumShow',
                    params: {
                        id: categoryId
                    }
                }">{{ title }}</router-link>
            </h2>
            <div class="forum-listing" v-for="forum in forums" :key="forum.uid">
                <div class="forum-details">
                    <router-link :to="{
                        name: 'forumShow',
                        params: {
                            id: forum.uid
                        }
                    }" v-text="forum.name">
                    </router-link>
                    <p v-text="forum.description"></p>
                </div>
                <div class="threads-count">
                    <p class="count">
                        <span v-text="forum.threads?.length"></span>
                    </p>
                </div>
            </div>

        </div>

</template>

<script>
export default {
    props: {
        categoryId: {
            type: String,
            required: false
        },
        title: {
            type: String,
            default: "Forums"
        },
        forums: {
            type: Array
        }
    }
}
</script>

<style>

</style>