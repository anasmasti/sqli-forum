<template>
	<div class="h-full flex flex-col items-center justify-center">
		<h1 class="text-3xl font-black">Login to Your Account</h1>
		<form @submit.prevent="signIn" class="flex flex-col p-5 gap-2">
			<AppInput v-for="signInInput in signInInputs" :placeholder="signInInput.placeholder"
				:type="signInInput.type" :key="signInInput.placeholder" :isSent="isSent"
				@input-value="signInInput.inputValueHandler" />
			<AppButton text="Login" />
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
		let email = ref('')
		let password = ref('')
		let errMsg = ref('')
		let isSent = ref(false)
		let router = useRouter()
		let store = useStore()


		let handleEmailInputValue = (value) => {
			email.value = value
		}

		let handlePasswordInputValue = (value) => {
			password.value = value
		}

		let signInInputs = [
			{
				type: 'text',
				placeholder: 'Email',
				inputValueHandler: handleEmailInputValue
			},
			{
				type: 'password',
				placeholder: 'Password',
				inputValueHandler: handlePasswordInputValue
			},

		]

		let signIn = () => {
			let usersRef = firebase.firestore().collection('/users')

			firebase
				.auth()
				.signInWithEmailAndPassword(email.value, password.value)
				.then(async (userData) => {
					await usersRef
						.where("userId", "==", userData.user._delegate.uid)
						.get()
						.then((querySnapshot) => {
							querySnapshot.forEach((doc) => {
								let userToInject = {
									name: doc.data().name,
									email: doc.data().email,
									userId: doc.data().userId,
									createdAt: doc.data().createdAt,
									uid: doc.id,
								}
								document.cookie = `isLoggedIn= ${true}`
								document.cookie = `user= ${JSON.stringify(userToInject)}`
								store.dispatch('toggleLoggedIn', { isLoggedIn: true })
								store.dispatch('addAuthUser', { user: userToInject })
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
			errMsg,
			signInInputs,
			handleEmailInputValue,
			handlePasswordInputValue,
			isSent
		}
	}
}


</script>
  