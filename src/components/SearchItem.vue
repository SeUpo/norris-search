<template>
  <div class="result-item">
    <a :href="joke.url">
      <p class="text">
        {{ joke.value }}
      </p>
    </a>
    <h4 class="id">
      {{ joke.id }}
    </h4>
    <h4 class="date">
      {{ joke.created_at.slice(0, 10) }}
    </h4>
  </div>
</template>

<script setup>
const props = defineProps({
  joke: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.result-item {
  position: relative;
  min-height: 150px;
  box-shadow: 0px 7px 12px 0px #64646f33;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  .text {
    overflow-wrap: break-word;
    color: #000000;
    padding: 40px 40px 72px;
  }
  .id {
    font-size: 14px;
    position: absolute;
    bottom: 25px;
    left: 40px;
  }
  .date {
    font-size: 14px;
    position: absolute;
    bottom: 25px;
    right: 40px;
  }
}
@media (min-width: 1240px) {
  .result-item:nth-child(1),
  .result-item:nth-child(2) {
    font-size: 20px;
    line-height: 30px;
    width: 49%;
    min-height: 262px;
  }
  .result-item {
    width: 32%;
    font-size: 16px;
  }
}
@media (max-width: 1240px) {
  .result-item {
    width: -webkit-fill-available;
  }
}
@media (max-width: 660px) {
  .result-item {
    max-width: 600px;
    font-size: 25px;
    line-height: 1.5;
    .id{
      font-size: 20px;
    }
    .date{
      font-size: 20px;
    }
  }
}
</style>
