<script setup>
import {defineProps, inject} from 'vue'

const props = defineProps({
  imgUrl: ({
    type: String
  }),
  filter: ({
    type: String
  })
})

const emitter = inject('emitter')

const selectFilter = () => {
  emitter.emit('filterSelect', props.filter)
}

</script>

<template>
  <div
      @click="selectFilter"
      :class="filter"
      :style="{ backgroundImage : `url(${props.imgUrl})`}"
      class="filter-item">{{ filter }}
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