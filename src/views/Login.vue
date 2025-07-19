<template>
    <div>
        <h1>ログイン</h1>
        <form @submit.prevent="handleLogin">
            <input v-model="email" placeholder="Email" type="email" required />
            <input v-model="password" placeholder="Password" type="password" required />
            <button type="submit">ログイン</button>
        </form>
        <p v-if="error">{{ error }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
    error.value = '';
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        router.push('/')
    } catch (err: any) {
        error.value = err.message;
    }
}
</script>