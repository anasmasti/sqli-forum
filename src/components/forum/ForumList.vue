<template>
        <div class="mt-10">
            <h2 class="text-3xl font-black">
                <router-link :to="{
                    name: 'Category',
                    params: {
                        id: categoryId
                    }
                }">{{ title }}</router-link>
            </h2>
            <div v-for="forum in forums" :key="forum.uid">
                <div class="bg-gray-50 rounded-lg p-5 mt-2">
                    <router-link :to="{
                        name: 'forumShow',
                        params: {
                            id: forum.uid
                        }
                    }" v-text="forum.name" class="text-xl font-bold hover:text-blue-500">
                    </router-link>
                    <p class="text-sm" v-text="forum.description"></p>
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