<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus placeholder="What needs to be done?" @keyup.enter="addTodo">
    </header>
    <ul class="todo-list">
      <li v-for="todo of todos" class="todo">{{ todo }}</li>
    </ul>
    <br />
    <footer>
      <ToggleTheme />
    </footer>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ToggleTheme from './views/ToggleTheme.vue'

let todos = ref([1, 2, 3]);
</script>

<style>
/* @import url('https://unpkg.com/todomvc-app-css@2.4.2/index.css'); */
</style>
