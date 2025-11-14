<template>
  <ServiceCardList :items="cardData" />
  <Footer></Footer>
</template>

<script setup>
defineOptions({ name: 'services' })
import Footer from '../components/Footer.vue'
import ServiceCardList from '../components/ServiceCardList.vue'
import { ref, onMounted } from 'vue'
import Gateway from '../../Gateway'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Services - Our services',
  meta: [
    {
      name: 'description',
      content: 'Learn more about the services we offer.'
    }
  ]
})
const cardData = ref([
]);

onMounted(async () => {
  try {
    const response = await Gateway.getAllServicesShortInfo()
    if (Array.isArray(response)) {
      cardData.value = response
    }
  } catch (error) {
    console.error('Failed to fetch services:', error)
  }
})
</script>
