<template>
	<h1>Create an Account</h1>
	<p><input type="text" placeholder="Name" v-model="name" /></p>
	<p><input type="text" placeholder="Email" v-model="email" /></p>
	<p><input type="password" placeholder="Password" v-model="password" /></p>
	<p><button @click="signUp">Create</button></p>
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
  