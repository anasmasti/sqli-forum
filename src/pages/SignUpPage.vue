<template>
	<div class="h-full flex flex-col items-center justify-center">
		<h1 class="text-3xl font-black">Create an Account</h1>
		<form @submit.prevent="signUp" class="flex flex-col p-5 gap-2">
			<AppInput v-for="signUpInput in signUpInputs" :placeholder="signUpInput.placeholder"
				:type="signUpInput.type" :key="signUpInput.placeholder" :isSent="isSent"
				@input-value="signUpInput.inputValueHandler" />
			<AppButton text="Create" />
		</form>
	</div>
</template>
  
<script>
import { ref } from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useRouter } from 'vue-router'

export default {
	setup() {
		const email = ref('')
		const password = ref('')
		const name = ref('')
		const router = useRouter()
		let isSent = ref(false)

		let handleNameInputValue = (value) => {
			name.value = value
		}

		let handleEmailInputValue = (value) => {
			email.value = value
		}

		let handlePasswordInputValue = (value) => {
			password.value = value
		}

		let signUpInputs = [
			{
				type: 'text',
				placeholder: 'Full Name',
				inputValueHandler: handleNameInputValue
			},
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
						userId: userData.user._delegate.uid,
						createdAt: Math.floor(Date.now() / 1000)
					}

					// Add user to firestore
					await usersRef.add(user)

					// Redirect to home page
					router.push('/sign-in')
				}).catch(error => {
					console.log(error.message);
				});
		}

		return {
			email,
			password,
			name,
			signUp,
			signUpInputs,
			isSent
		}
	}
}


</script>
  