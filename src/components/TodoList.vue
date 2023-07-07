<template>
  <ul class="todo-list">
    <li
      v-for="todo of filteredTodos"
      :class="{
        todo,
        completed: todo.completed
      }"
      :key="todo.id"
    >
      <TodoListItem :todo="todo" @toggle="(completed) => (todo.completed = completed)" />
    </li>
  </ul>
</template>

<script setup>
import TodoListItem from '@/components/TodoListItem.vue'
import { useFilteredTodosStore } from '@/stores/filteredTodos'
import { computed } from 'vue'

const filteredTodosStore = useFilteredTodosStore()
const filteredTodos = computed(() => filteredTodosStore.filteredTodos)
</script>
