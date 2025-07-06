<template>
    <div>
        <h1>ログイン</h1>
        <input v-model="email" placeholder="Email">
        <input v-model="password" placeholder="Password" type="password" />
        <button @click="login">ログイン</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        router.push('/')
    } catch {
        alert('ログイン失敗')
    }
}
</script>