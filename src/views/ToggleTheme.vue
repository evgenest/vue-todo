<template>
  <button @click.prevent="toggleTheme">toggle theme</button>
</template>

<script setup>
import { onMounted } from 'vue';

const useDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
useDark.addEventListener('change', (e) => setupTheme(e))

const rootClass = document.documentElement.classList

onMounted(() => {
  // setupTheme(useDark)

  // always light theme by default
  setupTheme(false)
})

function setupTheme(matchMedia) {
  rootClass.remove('light')
  rootClass.remove('dark')
  if (matchMedia.matches)
    rootClass.add('dark')
  else
    rootClass.add('light')

  addTransition()
}

function addTransition() {
  let body = document.body
  let transition = getComputedStyle(body).getPropertyValue('transition')
  if (transition.includes('all 0s'))
    body.style.setProperty('transition', 'color 0.5s, background-color 0.5s')
}

function toggleTheme() {
  addTransition()

  if (rootClass.contains('light')) {
    rootClass.remove('light')
    rootClass.add('dark')
    return
  }

  if (rootClass.contains('dark')) {
    rootClass.remove('dark')
    rootClass.add('light')
    return
  }
}
</script>