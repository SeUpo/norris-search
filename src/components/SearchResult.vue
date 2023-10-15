<template>
  <div>
    <div class="search-result">
      <SearchItem 
        v-for="joke in jokes" 
        :key="joke.id" 
        :joke="joke" 
      />
    </div>
  </div>
</template>

<script setup>
import SearchItem from './SearchItem.vue'
import { storeToRefs } from 'pinia'
import { useJokesStore } from '@/stores/jokes'
const store = useJokesStore()

const { jokes } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.search-result {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 2rem;
  gap: 1.25rem;
  justify-content: center;
}
</style>
