<script setup>
import {defineProps} from 'vue'

defineProps({
  imgUrl: {
    type: String
  },
  filters: {
    type: String
  }
})

</script>

<template>
  <div :class="filters" class="filter-item" :style="`background-image:url(${imgUrl})`"></div>
</template>

<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
