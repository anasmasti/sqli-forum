<template>
	<h1>Login to Your Account</h1>
	<p><input type="text" placeholder="Email" v-model="email" /></p>
	<p><input type="password" placeholder="Password" v-model="password" /></p>
	<p><button @click="signIn">Submit</button></p>
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
		const errMsg = ref('')
		const router = useRouter()
		const store = useStore()

		const signIn = () => {
			let usersRef = firebase.firestore().collection('/users')

			firebase
				.auth()
				.signInWithEmailAndPassword(email.value, password.value)
				.then(async (userData) => {
					await usersRef
						.where("uid", "==", userData.user._delegate.uid)
						.get()
						.then((querySnapshot) => {
							querySnapshot.forEach((doc) => {
								document.cookie = `isLoggedIn= ${true}`
								document.cookie = `user= ${JSON.stringify(doc.data())}`
								store.dispatch('toggleLoggedIn', { isLoggedIn: true })
								store.dispatch('addAuthUser', { user: doc.data() })
								router.push('/')
							});
						})
				}).catch(error => {
					switch (error.code) {
						case 'auth/invalid-email':
							errMsg.value = 'Invalid email'
							break
						case 'auth/user-not-found':
							errMsg.value = 'No account with that email was found'
							break
						case 'auth/wrong-password':
							errMsg.value = 'Incorrect password'
							break
						default:
							errMsg.value = 'Email or password was incorrect'
							break
					}
				});
		}

		return {
			signIn,
			email,
			password,
			errMsg
		}
	}
}


</script>
  