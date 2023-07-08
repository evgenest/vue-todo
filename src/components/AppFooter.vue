<template>
  <footer class="footer" v-show="todos.length">
    <span class="todo-count">
      <strong>{{ remaining }}</strong>
      {{ pluralize('todo', remaining) + ' left' }}
    </span>
    <AppFilters />
    <button
      class="clear-completed"
      @click="todosStore.clearCompleted"
      v-show="todos.length > remaining"
    >
      Clear completed
    </button>
  </footer>
</template>

<script setup>
import AppFilters from './AppFilters.vue'
import { computed } from 'vue'
import { useFilteredTodosStore } from '@/stores/filteredTodos'
import { useTodosStore } from '@/stores/todos'

const filteredTodosStore = useFilteredTodosStore()
const filters = filteredTodosStore.filters

const todosStore = useTodosStore()
const todos = computed(() => todosStore.todos)

const remaining = computed(() => {
  return filters.active().length
})

function pluralize(word, count) {
  return word + (count === 1 ? '' : 's')
}
</script>
