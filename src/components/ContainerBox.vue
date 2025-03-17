<template>
  <div>
    <PostBox
        :postData="postData"
    />
  </div>
</template>

<script setup>
import PostBox from "./PostBox.vue"
import {defineProps} from "vue"

defineProps({
  postData: ({
    type: Array
  })
})
</script>

<style scoped>

</style>
