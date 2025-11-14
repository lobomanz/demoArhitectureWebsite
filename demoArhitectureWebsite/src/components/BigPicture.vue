<template>
    <div class="image-container">
      <div class="image-wrapper">
        <img v-if="imageUrl" :src="imageUrl" :alt="title" class="full-image" />
        <div class="overlay"></div>
        <div v-if="imageUrl" class="title">{{ title }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Your Title Here',
    },
  });
  </script>
  
  <style scoped lang="scss">
  .image-container {
    width: calc(100% - 210px);
    height: calc(100vh - 200px);
    position: relative;
    overflow: hidden;
    @include mobile{
      width: 100%;
      max-height:200px ;
    }
  }
  
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .full-image {
    width: 100%;
    height: auto; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
  }
  
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    white-space: nowrap; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
    font-size: 90px; 
    @include mobile{
      font-size: 50px;
    }
  }
  </style>
  