<template>
  <SlideShow/>
</template>

<script setup>
defineOptions({ name: 'preview' })
import { useHead } from '@unhead/vue'
import SlideShow from '../components/SlideShow.vue'

useHead({
  title: 'Home - demoArhitectureWebsite',
  meta: [
    { name: 'description', content: 'See all of our projects' }
  ]
})
</script>
