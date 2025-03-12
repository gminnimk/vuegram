<script setup>
import PostComponent from "@/components/PostComponent.vue"
import {defineProps, ref} from 'vue'

defineProps({
  post: {
    type: Array
  }
})

</script>

<template>
  <div>
    <PostComponent
        :post="post"
    />
  </div>
</template>

<style scoped>

</style>