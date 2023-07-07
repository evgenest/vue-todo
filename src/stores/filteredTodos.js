import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref } from 'vue'
import { filter } from 'lodash'
import { useTodosStore } from '@/stores/todos'

export const useFilteredTodosStore = defineStore('filteredTodos', () => {
  const todosStore = useTodosStore()
  const todos = computed(() => todosStore.todos)
  const visibility = ref('all')

  const filters = {
    all() {
      return todos.value
    },
    active() {
      return filter(todos.value, (t) => !t.completed)
    },
    completed() {
      return filter(todos.value, (t) => t.completed)
    }
  }

  const filteredTodos = computed(() => {
    return filters[visibility.value]()
  })

  return {
    filters,
    filteredTodos
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFilteredTodosStore, import.meta.hot))
}
