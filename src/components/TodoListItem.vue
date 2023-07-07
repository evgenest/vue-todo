<template>
  <div class="view">
    <input type="checkbox" class="toggle" :value="todo.completed" @change="markCompleted($event)" />
    <label>{{ todo.title }}</label>
  </div>
</template>

<script setup>
defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle'])

function markCompleted(event) {
  emit('toggle', event.target.checked)
}
</script>
