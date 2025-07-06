<template>
  <div>
    <h1>課題一覧</h1>
    <button @click="logout">ログアウト</button>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <strong>{{ task.title }}</strong> - {{ task.status }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db, auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

type Task = {
  id: string
  title: string
  status: string
}

const tasks = ref<Task[]>([])
const router = useRouter()

const fetchTasks = async () => {
  try {
    const uid = auth.currentUser?.uid
    if (!uid) return

    const querySnapshot = await getDocs(collection(db, `users/${uid}/tasks`))
    tasks.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Task[]
  } catch (error) {
    console.error('課題取得失敗:', error)
  }
}

const logout = async () => {
  await signOut(auth)
  router.push('/login')
}

onMounted(fetchTasks)
</script>
