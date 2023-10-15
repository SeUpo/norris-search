import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useJokesStore = defineStore('jokes', () => {
  const jokesQuantity = ref(0)
  const foundJockes = computed(() => {
    return jokesQuantity.value
  })
  const jokes = ref([])
  const searchText = ref('')
  const searchJockes = computed(() => {
    return `https://api.chucknorris.io/jokes/search?query=${searchText.value}`
  })
  const search = async () => {
    try {
      const res = await fetch(searchJockes.value)
      if (res.ok) {
        const data = await res.json()
        jokesQuantity.value = data.result.length
        jokes.value = data.result.slice(0, 8)
      }
    } catch (error) {
      console.error('err', error)
    }
  }
  return { foundJockes, jokes, searchText, searchJockes, search }
})
