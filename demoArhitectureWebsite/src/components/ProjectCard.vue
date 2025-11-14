<template>
  <div class="card-container">

    <div
      class="image-container"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img :src="Gateway.baseUrl+info.image" :alt="info.projectInfo" class="responsive-image" loading="lazy"/>
      <div class="overlay" :class="{ visible: hover }"></div>
      <div class="text" :class="{ visible: hover }">
        <h2>{{ info.projectInfo }}</h2>
        <p>{{ monthAndYear }}</p>
      </div>
    </div>
    <h3 class="title">{{ info.projectInfo }}<br>{{ monthAndYear }}</h3>
  </div>
  </template>
  
  <script setup>
  import { ref, defineProps,computed,onActivated  } from 'vue';
import Gateway from '../../Gateway';
  const props = defineProps({
    info: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          value.image !== undefined &&
          value.projectName !== undefined &&
          value.projectInfo !== undefined &&
          value.projectDate !== undefined
        );
      },
    },
  });
  
  const hover = ref(false);
  onActivated(() => {
  hover.value = false
})
  const monthNames = [
    'Siječanj',
    'Veljača',
    'Ožujak',
    'Travanj',
    'Svibanj',
    'Lipanj',
    'Srpanj',
    'Kolovoz',
    'Rujan',
    'Listopad',
    'Studeni',
    'Prosinac'
  ];
  const monthAndYear = computed(() => {
  if (!props.info.projectDate) return ''

  // normalize any separator to a dot (so we can handle ".", "-", or "/")
  const normalized = props.info.projectDate.replace(/[-/]/g, '.')
  const parts = normalized.match(/^(\d{2})\.(\d{2})\.(\d{4})$/)
  if (!parts) return ''

  const month = parseInt(parts[2], 10)
  const year = parts[3]
  const monthName = monthNames[month - 1]

  return monthName ? `${monthName}, ${year}` : ''
})




  </script>
  
  <style scoped lang="scss">
  .card-container{
    width: 100%;
    height: 100%;
    padding: 10px;
    @include mobile{
      margin-inline: 10px;
    }
  }
  a{
    text-decoration: none;
  }
  .image-container {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .responsive-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image fills the container while maintaining aspect ratio */
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 1);
    opacity: 0;
    transition: opacity 0.3s ease;
    height: 100%;
  }
  
  .overlay.visible {
    opacity: 0.5; /* Changes opacity on hover */
  }
  
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    opacity: 0; /* Start hidden */
    transition: opacity 0.3s ease;
    text-align: center; /* Center-align text */
  }
  
  .text.visible {
    opacity: 1; /* Full opacity on hover */
  }
  .title{
    font-size: 18px;
    color: black;
    text-transform: uppercase;
    text-decoration: none !important;
    @include desktop{
      display: none;
    }
  }
  h2{
    @include mobile{
      font-size: 18px;
    }
  }
  </style>
  