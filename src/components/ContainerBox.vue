<template>
  <div>
    <PostBox
        :post="post"
    />
  </div>
</template>

<script setup>
import PostBox from "./PostBox.vue"
import {defineProps} from "vue"

defineProps({
  post: ({
    type: Array
  })
})
</script>

<style scoped>

</style>
