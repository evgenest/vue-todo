const storageKey = 'todos-vuejs'
export const todoStorage = {
  get() {
    return JSON.parse(localStorage.getItem(storageKey) || '[]')
  },
  set(todos) {
    localStorage.setItem(storageKey, JSON.stringify(todos))
  }
}
