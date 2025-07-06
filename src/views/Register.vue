<template>
  <div>
    <h1>ユーザー登録</h1>
    <input v-model="email" placeholder="メールアドレス" />
    <input v-model="password" placeholder="パスワード" type="password" />
    <button @click="register">登録</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    router.push('/') // 登録後にタスク一覧ページへ
  } catch (error) {
    alert('登録に失敗しました')
    console.error(error)
  }
}
</script>
