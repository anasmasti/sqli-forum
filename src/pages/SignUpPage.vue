<template>
	<div class="h-full flex flex-col items-center justify-center p-9">
		<h1 class="text-3xl font-black">Create an Account</h1>
		<form @submit.prevent="signUp" class="flex flex-col p-5 gap-2">
			<input class="p-2 bg-gray-50 rounded-lg border border-gray-200" type="text" placeholder="Name"
				v-model="name" />
			<input class="p-2 bg-gray-50 rounded-lg border border-gray-200" type="text" placeholder="Email"
				v-model="email" />
			<input class="p-2 bg-gray-50 rounded-lg border border-gray-200" type="password" placeholder="Password"
				v-model="password" />
			<AppButton text="Create" />
		</form>
	</div>
</template>
  
<script>
import { ref } from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';

export default {
	setup() {
		const email = ref('')
		const password = ref('')
		const name = ref('')
		const router = useRouter()
		const store = useStore()

		const signUp = async () => {
			let usersRef = firebase.firestore().collection('users')

			// Sign up with email and password
			await firebase
				.auth()
				.createUserWithEmailAndPassword(email.value, password.value)
				.then(async (userData) => {
					// Create user
					let user = {
						name: name.value,
						email: userData.user._delegate.email,
						uid: userData.user._delegate.uid,
						createdAt: Math.floor(Date.now() / 1000)
					}

					// Put user info to cookies
					document.cookie = `isLoggedIn= ${true}`
					document.cookie = `user= ${JSON.stringify(user)}}`

					// Put user info to yhe store
					store.dispatch('toggleLoggedIn', { isLoggedIn: true })
					store.dispatch('addAuthUser', { user: user })

					// Add user to firestore
					await usersRef.add(user)

					// Redirect to home page
					router.push('/')
				}).catch(error => {
					console.log(error.message);
				});
		}
		return {
			email,
			password,
			name,
			signUp
		}
	}
}


</script>
  