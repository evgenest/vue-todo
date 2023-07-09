import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref, watch } from 'vue'
import { filter, includes } from 'lodash'
import { useTodosStore } from '@/stores/todos'
import { useRoute } from 'vue-router'
import { routes } from '@/router'

export const useFilteredTodosStore = defineStore('filteredTodos', () => {
  const todosStore = useTodosStore()
  const todos = computed(() => todosStore.todos)
  const visibility = ref('all')
  const route = useRoute()
  watch(route, (newValue) => {
    const hash = newValue.hash.slice(1)
    if (includes(routes, hash)) visibility.value = hash
  })

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
    visibility,
    filters,
    filteredTodos
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFilteredTodosStore, import.meta.hot))
}
