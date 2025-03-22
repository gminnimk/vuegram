<template>
  <div
      @click="selectFilter"
      :class="filter"
      :style="{ backgroundImage : `url(${imgUrl})`}"
      class="filter-item">
    {{ filter }}
  </div>
</template>

<script setup>
import {useMainStore} from '@/store.js'

const props = defineProps({
  filter: {type: String},
  imgUrl: {type: String}
})

const store = useMainStore()

const selectFilter = () => {
  store.setSelectFilter(props.filter)
}
</script>

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