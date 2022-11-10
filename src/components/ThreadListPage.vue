<template>
    <div class="col-full">
        <div class="thread-list">
            <h2 class="list-title">threads</h2>
            <div v-for="thread in threads" :key="thread.id" class="thread">
                <div>
                    <p>
                        <router-link :to="{ name: 'threadShow', params: { id: thread.id } }">{{ thread.title }}
                        </router-link>
                    </p>
                    <p class="text-faded text-xsmall">
                        By <a href="">{{ userById(thread.userId).name }}</a>,
                        <AppTimeStamps :timestamps='thread.publishedAt' />
                    </p>
                </div>
                <div class="activity">
                    <p class="replies-count">{{ thread.posts.length }} replies</p>
                    <img :src="userById(thread.userId).avatar" alt="user avatar" class="avatar-medium" />
                    <div>
                        <p class="text-xsmall">
                            By <a href="#">{{ userById(thread.userId).name }}</a>
                        </p>
                        <AppTimeStamps :timestamps='thread.publishedAt' />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import data from "../assets/data.json";

export default {

    props: {
        threads: {
            type: Array,
            required: true
        }
    },
    setup() {
        let dataSource = reactive(data)

        let { users } = toRefs(dataSource)

        let userById = (userId) => {
            return users.value.find((u) => u.id === userId);
        }

        return {
            users,
            userById,
        }
    }
};
</script>

<style>

</style>