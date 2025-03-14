<script setup>
import {defineProps, inject} from 'vue'

const props = defineProps({
  imgUrl: {
    type: String
  },
  filter: {
    type: String
  }
})

const emitter = inject('emitter')

const selectFilter = () => {
  emitter.emit('filterSelected', props.filter)
  console.log(`필터 선택됨: ${props.filter}`)
}

</script>

<template>
  <div
      @click="selectFilter"
      :class="filter"
      class="filter-item"
      :style="`background-image:url(${imgUrl})`">
    <p>{{ filter }}</p>
  </div>
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
