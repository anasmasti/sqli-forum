<template>
	<h1>Create an Account</h1>
	<p><input type="text" placeholder="Email" v-model="email" /></p>
	<p><input type="password" placeholder="Password" v-model="password" /></p>
	<p><button @click="signUp">Submit</button></p>
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
		const router = useRouter()
		const store = useStore()

		const signUp = () => {
			firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(({ user }) => {
				document.cookie = `isLoggedIn= ${true}`
				document.cookie = `user= ${JSON.stringify(user._delegate)}}` 
				store.dispatch('toggleLoggedIn', { isLoggedIn: true })
				store.dispatch('addAuthUser', { user: user._delegate })
				router.push('/')
			}).catch(error => {
				console.log(error.code)
				alert(error.message);
			});
		}
		return {
			email,
			password,
			signUp
		}
	}
}


</script>
  