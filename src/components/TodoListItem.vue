<template>
  <div class="view">
    <input
      type="checkbox"
      class="toggle"
      :checked="todo.completed"
      @change="markCompleted($event)"
    />
    <label @dblclick="editTodoStore.editTodo(todo)">{{ todo.title }}</label>
    <button class="destroy" @click="todosStore.removeTodo(todo)"></button>
  </div>
  <input
    class="edit"
    type="text"
    :value="todo.title"
    v-focus="todo.id === cachedTodo?.id"
    @input="inputTitle($event)"
    @blur="editTodoStore.doneEdit(todo)"
    @keyup.enter="editTodoStore.doneEdit(todo)"
    @keyup.esc="editTodoStore.cancelEdit(todo)"
  />
</template>

<script setup>
import { useTodosStore } from '@/stores/todos'
import { useEditTodoStore } from '@/stores/editTodo'
import { computed } from 'vue'
const todosStore = useTodosStore()
const editTodoStore = useEditTodoStore()
const cachedTodo = computed(() => editTodoStore.cachedTodo)

defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle', 'edit'])

function markCompleted(event) {
  emit('toggle', event.target.checked)
}

function inputTitle(event) {
  emit('edit', event.target.value)
}
</script>
