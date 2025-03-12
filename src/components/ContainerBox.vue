<script setup>
import PostComponent from "@/components/PostComponent.vue";
import {defineProps} from 'vue';

defineProps({
  postData: {
    type: Array
  }
})

</script>

<template>
  <div>
    <PostComponent
        :postData="postData"
    />
  </div>
</template>

<style scoped>

</style>