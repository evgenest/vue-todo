<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      autofocus="autofocus"
      autocomplete="off"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo"
      v-model="newTodo"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'

const newTodo = ref('')
const todos = useTodosStore()

function addTodo() {
  const title = newTodo.value.trim()
  newTodo.value = ''
  if (!title) return
  todos.addTodo(title)
}
</script>
