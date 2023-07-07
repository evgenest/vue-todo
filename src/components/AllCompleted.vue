<template>
  <input id="toggle-all" type="checkbox" class="toggle-all" v-model="allCompleted" />
  <label for="toggle-all">Mark all as complete</label>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTodosStore } from '@/stores/todos'

const todosStore = useTodosStore()
const allCompleted = ref('false')
watch(allCompleted, (newValue) => {
  todosStore.markAllCompleted(newValue)
})
</script>
