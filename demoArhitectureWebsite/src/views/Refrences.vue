<template>
  <ReferenceList :items="referenceData" />
  <Footer></Footer>

</template>

<script setup>
defineOptions({ name: 'refrences' });
import ReferenceList from '../components/ReferenceList.vue'
import { ref, onMounted } from 'vue'
import Gateway from '../../Gateway'
import Footer from '../components/Footer.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Refrences - All Our Projects',
  meta: [
    {
      name: 'description',
      content: 'List of everything you need to know about our projects'
    }
  ]
})

// Start with hardcoded fallback data
const referenceData = ref([
])

// Fetch and override if successful
onMounted(async () => {
  try {
    const response = await Gateway.getReferences()
    if (Array.isArray(response)) {
      referenceData.value = response
    }
  } catch (error) {
    console.error('Failed to fetch references:', error)
    // Leave the hardcoded data in place
  }
})
</script>