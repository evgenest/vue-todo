<template>
  <input
    class="new-todo"
    autofocus="autofocus"
    autocomplete="off"
    placeholder="What needs to be done?"
    @keyup.enter="addTodo"
    v-model="newTodo"
  />
</template>

<script setup>
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'

const newTodo = ref('')
const todosStore = useTodosStore()

function addTodo() {
  const title = newTodo.value.trim()
  newTodo.value = ''
  if (!title) return
  todosStore.addTodo(title)
}
</script>
