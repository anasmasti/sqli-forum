<template>
    <div class="thread-list">
        <h2 class="list-title text-xl font-bold mb-3">Threads List</h2>
        <div v-for="thread in threads" :key="thread.uid" class="flex justify-between bg-gray-50 p-3 mt-3 rounded-xl">
            <div>
                <p class="capitalize text-xl text-blue-500 font-black hover:text-gray-500">
                    <router-link :to="{ name: 'threadShow', params: { id: thread.uid } }">
                        {{ thread.title }}
                    </router-link>
                </p>
                <p class="text-sm">
                    By
                    <span class="text-blue-500 capitalize">
                        {{ userById(thread.userId)?.name ? userById(thread.userId)?.name : '--' }}
                    </span>
                    <AppTimeStamps :timestamps='thread.publishedAt' />
                </p>
            </div>
            <div class="activity">
                <img class="w-7" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user avatar" />
                <div>
                    <p class="text-sm">
                        By
                        <span class="text-blue-500 capitalize">
                            {{ userById(thread.userId)?.name ? userById(thread.userId)?.name : '--' }}
                        </span>
                    </p>
                    <AppTimeStamps :timestamps='thread.publishedAt' />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    props: {
        threads: {
            type: Array,
            required: true
        }
    },
    setup() {
        let store = useStore()
        let userById = store.getters.getUserById

        return {
            userById
        }
    }
};
</script>

<style>

</style>