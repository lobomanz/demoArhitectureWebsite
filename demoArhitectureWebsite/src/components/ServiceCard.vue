<template>
    <div class="image-card">
      <img :src="Gateway.baseUrl+data.image" :alt="data.title" class="image" />
      <h2 class="title">{{ data.title }}</h2>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import Gateway from '../../Gateway';
  const props = defineProps({
    data: {
      type: Object,
      required: true,
      validator: (value) => {
        return 'image' in value && 'title' in value;
      },
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .image-card {
    margin: 15px;
    overflow: hidden;
    @include desktop{
      width: 100%;
    }
  
    .image {
      width: 20vw;
      height: 20vw;
      object-fit: cover;
      transition: transform 0.3s ease;
      @include mobile{
        width: 80vw;
        height: 80vw;
      }
      &:hover {
        transform: scale(1.05);
      }
    }
  
    .title {
        text-align: left;
      font-size: 20px;
      text-transform: uppercase;
      margin: 10px 0 0;
    }
  }
  </style>
  