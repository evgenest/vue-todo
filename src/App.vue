<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <AddTodo />
    </header>
    <section class="main">
      <TodoList />
    </section>
  </section>
</template>

<script setup>
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'
</script>
