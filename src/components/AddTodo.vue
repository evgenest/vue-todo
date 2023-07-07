<template>
  <input
    class="new-todo"
    autofocus="autofocus"
    autocomplete="off"
    placeholder="What needs to be done?"
    @keyup.enter="addTodo"
    v-model.trim="newTodo"
  />
</template>

<script setup>
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'

const newTodo = ref('')
const todosStore = useTodosStore()

function addTodo() {
  if (!newTodo.value) return
  todosStore.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>
