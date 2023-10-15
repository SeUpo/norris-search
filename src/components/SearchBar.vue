<template>
  <div class="search">
    <div class="search-bar">
      <input
        class="search-input"
        type="text"
        placeholder="Search jockes..."
        v-model="searchText"
        @input="handleInput"
        autofocus
      />
    </div>
    <h4 class="quantity">Found jockes: {{ foundJockes }}</h4>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useJokesStore } from '@/stores/jokes'
const store = useJokesStore()
const { search } = store

const { searchText, foundJockes } = storeToRefs(store)
const handleInput = () => {
  if (searchText.value.length > 3) {
    search()
  }
}
</script>

<style lang="scss" scoped>
.search {
  padding-top: 2rem;
  display: grid;
  justify-content: center;
  justify-items: start;
  .search-bar {
    width: 626px;
    height: 64px;
    padding: 19px 0 21px 36px;
    box-shadow: 0px 7px 12px 0px #64646f33;

    .search-input {
      font-size: 20px;
      color: #656ec2;
      background-color: transparent;
      outline: none;
      border: none;
    }
    .search-input::placeholder {
      size: 22px;
      color: #656ec2;
    }
  }
  .quantity {
    font-size: 16px;
    line-height: 20px;
    margin-top: 20px;
    margin-left: 36px;
  }
}
@media (max-width: 1240px) {
  .search {
    width: -webkit-fill-available;
  }
}

@media (max-width: 660px) {
  .search {
    padding: 0;
    margin: 15px;
    .quantity {
      font-size: 20px;
    }
  }
}
</style>
