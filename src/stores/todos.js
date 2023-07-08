import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref, watch } from 'vue'
import { filter, each } from 'lodash'
import { map } from 'lodash'

import { todoStorage } from '@/stores/todoStorage'
import { useFilteredTodosStore } from '@/stores/filteredTodos'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref(todoStorage.get())
  watch(todos, (newValue) => todoStorage.set(newValue), { deep: true })

  function addTodo(title) {
    todos.value.splice(0, 0, {
      id: Date.now(),
      title: title,
      completed: false
    })
  }

  function removeTodo(todo) {
    todos.value = filter(todos.value, (t) => t.id !== todo.id)
  }

  function markAllCompleted(completed) {
    todos.value = each(todos.value, (t) => {
      t.completed = completed
    })
  }

  function markAllCompletedUsingMap(completed) {
    todos.value = map(todos.value, (t) => {
      t.completed = completed
      return t
    })
  }

  const filteredTodosStore = useFilteredTodosStore()
  const filters = computed(() => filteredTodosStore.filters)
  function clearCompleted() {
    todos.value = filters.value.active()
  }

  return {
    todos,
    addTodo,
    removeTodo,
    markAllCompleted,
    markAllCompletedUsingMap,
    clearCompleted
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodosStore, import.meta.hot))
}
