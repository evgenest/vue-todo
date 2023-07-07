<template>
  <ul class="todo-list">
    <li
      v-for="todo of filteredTodos"
      :class="{
        todo,
        completed: todo.completed,
        editing: todo.id === cachedTodo?.id
      }"
      :key="todo.id"
    >
      <TodoListItem
        :todo="todo"
        @toggle="(completed) => (todo.completed = completed)"
        @edit="(title) => (todo.title = title)"
      />
    </li>
  </ul>
</template>

<script setup>
import TodoListItem from '@/components/TodoListItem.vue'
import { useFilteredTodosStore } from '@/stores/filteredTodos'
import { useEditTodoStore } from '@/stores/editTodo'
import { computed } from 'vue'

const filteredTodosStore = useFilteredTodosStore()
const filteredTodos = computed(() => filteredTodosStore.filteredTodos)

const editTodoStore = useEditTodoStore()
const cachedTodo = computed(() => editTodoStore.cachedTodo)
</script>
