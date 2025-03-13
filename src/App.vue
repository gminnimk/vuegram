<script setup>
import ContainerBox from "@/components/ContainerBox.vue"
import postData from "@/postdata.js"
import {ref} from "vue"
import axios from "axios"

const post = ref(postData)

const amount = ref(0)

const step = ref(0)

const imgUrl = ref(null)

const writeText = ref("")

const morePost = () => {
  axios
      .get(`https://codingapple1.github.io/vue/more${amount.value}.json`)
      .then(res => {
        post.value.push(res.data);
        amount.value++;
      })
}

const upload = (e) => {
  let file = e.target.files;
  console.log(file[0].type)
  let url = URL.createObjectURL(file[0]);
  console.log(url);
  imgUrl.value = url;
  step.value++;
}

const publish = () => {
  // 유저가 입력한 내용을 data 에 push 해야함
  const userData = {
    name: "Kim Hyun",
    userImage: "https://picsum.photos/100?random=3",
    postImage: imgUrl.value,
    likes: 36,
    date: "May 15",
    liked: false,
    content: writeText.value,
    filter: "perpetua"
  };
  post.value.unshift(userData);
  step.value = 0;
  console.log(userData);
}

</script>

<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish()">upload</li>
    </ul>
  </div>

  <ContainerBox
      :post="post"
      :step="step"
      :imgUrl="imgUrl"
      @write="writeText = $event"
  />
  <button @click="morePost">+</button>


  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<style scoped>
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
