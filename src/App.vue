<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <AddTodo />
    </header>
    <section class="main">
      <AllCompleted />
      <TodoList />
    </section>
    <AppFooter />
  </section>
</template>

<script setup>
import AddTodo from '@/components/AddTodo.vue'
import AllCompleted from '@/components/AllCompleted.vue'
import TodoList from '@/components/TodoList.vue'
import AppFooter from './components/AppFooter.vue'
</script>
