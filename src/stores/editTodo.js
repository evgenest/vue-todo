import { clone } from 'lodash'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'

export const useEditTodoStore = defineStore('editTodo', () => {
  const todosStore = useTodosStore()

  const cachedTodo = ref(null)
  function editTodo(todo) {
    cachedTodo.value = clone(todo)
  }

  function doneEdit(todo) {
    // @blur fires after @keyup.esc
    if (!cachedTodo.value) return

    cachedTodo.value = null
    todo.title = todo.title.trim()
    if (!todo.title) todosStore.removeTodo(todo)
  }

  function cancelEdit(todo) {
    todo.title = cachedTodo.value.title
    cachedTodo.value = null
  }
  return {
    cachedTodo,
    editTodo,
    doneEdit,
    cancelEdit
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEditTodoStore, import.meta.hot))
}
