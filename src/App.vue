<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="store.cancel">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="store.increaseStep()" v-if="step === 1">Next</li>
      <li @click="publishPost" v-if="step === 2">publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" alt=""/>
  </div>

  <ContainerBox
      :post="post"
      :step="step"
      :imgUrl="imgUrl"
      :selectedFilter="selectedFilter"
  />

  <div class="footer">
    <button @click="morePost" v-if="step === 0">더보기</button>
    <ul class="footer-button-plus">
      <input @change="store.uploadImage" type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script setup>
import ContainerBox from "@/components/ContainerBox.vue"
import {useMainStore} from '@/store.js'
import {storeToRefs} from 'pinia'

const store = useMainStore()

const {step, post, selectedFilter, imgUrl} = storeToRefs(store)

const publishPost = store.publish
const morePost = store.more
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
  margin-right: 15px;
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
