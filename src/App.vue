<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step === 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step++" v-if="step === 1">Next</li>
      <li @click="publish" v-if="step === 2">publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo"/>
  </div>

  <ContainerBox
      :post="post"
      :step="step"
      :imgUrl="imgUrl"
      @write="write = $event"
      :selectedFilter="selectedFilter"
  />

  <div class="footer">
    <button @click="morePost" v-if="step === 0">더보기</button>
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script setup>
import postData from './assets/postData'
import ContainerBox from "@/components/ContainerBox.vue";
import axios from 'axios'
import {ref, onMounted, inject, onUnmounted} from 'vue'

const step = ref(0)
const amount = ref(0)
const post = ref(postData)
const imgUrl = ref('')
const write = ref('')
const selectedFilter = ref('')
const emitter = inject('emitter')

const handleFilterSelect = (filter) => {
  selectedFilter.value = filter
  console.log("선택된 필터: ", filter)
}

onMounted(() => {
  emitter.on('filterSelect', handleFilterSelect)
})

onUnmounted(() => {
  emitter.off('filterSelect', handleFilterSelect)
})

const morePost = () => {
  axios
      .get(`https://codingapple1.github.io/vue/more${amount.value}.json`)
      .then((res) => {
        post.value.push(res.data)
        console.log(res.data)
        amount.value++
      })
      .catch('data 추가 실패')
}

const upload = (e) => {
  let file = e.target.files
  let url = URL.createObjectURL(file[0])
  console.log(url)
  imgUrl.value = url
  step.value++
}

const publish = () => {
  const myPost = {
    name: "Kim Hyun",
    userImage: "https://picsum.photos/100?random=3",
    postImage: imgUrl.value,
    likes: 36,
    date: "May 15",
    liked: false,
    content: write.value,
    filter: selectedFilter.value
  }
  post.value.unshift(myPost)
  step.value = 0
}

</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
