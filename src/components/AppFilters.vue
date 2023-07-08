<template>
  <ul class="filters">
    <li>
      <RouterLink to="/#all" :class="{ selected: visibility === 'all' }">All</RouterLink>
    </li>
    <li>
      <RouterLink to="/#active" :class="{ selected: visibility === 'active' }">Active</RouterLink>
    </li>
    <li>
      <RouterLink to="/#completed" :class="{ selected: visibility === 'completed' }"
        >Completed</RouterLink
      >
    </li>
  </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useFilteredTodosStore } from '@/stores/filteredTodos'
import { computed } from 'vue'

const filteredTodosStore = useFilteredTodosStore()
const visibility = computed(() => filteredTodosStore.visibility)
</script>
