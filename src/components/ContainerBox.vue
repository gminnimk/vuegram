<template>
  <!-- 첫 번째 화면 (기존 게시물) -->
  <PostBox
      v-if="step === 0"
      :post="post"
  />

  <!-- 두 번째 화면 (필터 선택) -->
  <div v-if="step === 1">
    <div :class="selectedFilter" class="upload-image" :style="{ backgroundImage: `url(${imgUrl})`}"></div>
    <div class="filters">
      <FilterBox v-for="filter in filters" :key="filter"
                 :filter="filter" :imgUrl="imgUrl"/>
    </div>
  </div>

  <!-- 세 번째 화면 (글 작성) -->
  <div v-if="step === 2">
    <div :class="selectedFilter" class="upload-image" :style="{backgroundImage: `url(${imgUrl})`}"></div>
    <div class="write">
      <textarea @input="store.setWriteContent($event.target.value)" class="write-box" placeholder="write!"></textarea>
    </div>
  </div>

  <div v-if="step === 3">
    <MyPage/>
  </div>
</template>

<script setup>
import PostBox from "./PostBox.vue"
import FilterBox from "@/components/FilterBox.vue"
import MyPage from "@/components/MyPage.vue"
import {useMainStore} from '@/store.js'

defineProps({
  post: {type: Array},
  step: {type: Number},
  imgUrl: {type: String},
  selectedFilter: {type: String}
})

const store = useMainStore()

const filters = ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
  "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
  "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
</script>

<style scoped>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}

.filters {
  overflow-x: scroll;
  white-space: nowrap;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
