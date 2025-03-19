<script setup>
import {ref, onMounted, computed} from 'vue'
import axios from 'axios'

const follower = ref([])
const keyword = ref('')

onMounted(() => {
  axios.get('/follower.json').then((res) => {
    follower.value = res.data
  })
})

// 검색어에 따라 필터링된 팔로워 목록
const filteredFollowers = computed(() => {
  if (!keyword.value) return follower.value
  return follower.value.filter(a => a.name.includes(keyword.value))
})
</script>

<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="search" v-model="keyword">
    <div class="post-header" v-for="(a, i) in filteredFollowers" :key="i">
      <div class="profile" :style="`background-image:url(${a.image})`"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
