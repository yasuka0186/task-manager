<template>
  <div>
    <h1>ユーザー登録</h1>
    <form @submit.prevent="handleRegister">
    <input v-model="email" placeholder="メールアドレス" type="email" required />
    <input v-model="password" placeholder="パスワード" type="password" required />
    <button type="submit">登録</button>
    </form>
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleRegister = async () => {
  error.value = '';
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    router.push('/') // 登録後にタスク一覧ページへ
  } catch (e: any) {
    error.value = e.message;
  }
}
</script>
