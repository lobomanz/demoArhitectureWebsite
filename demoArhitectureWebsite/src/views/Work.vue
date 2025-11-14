<script setup>
defineOptions({ name: 'work' })
import Footer from '../components/Footer.vue'
import ProjectList from '../components/ProjectList.vue'
import { ref, onMounted,onUnmounted,onActivated } from 'vue'
import Gateway from '../../Gateway'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Work - Our Projects',
  meta: [
    {
      name: 'description',
      content: 'Look at a more detailed version of each of our projects'
    }
  ]
})

const projectList = ref([
]);

onMounted(async () => {
  try {
    const response = await Gateway.getAllProjectsShortInfo();
    // Make sure to map and format the response to match your local structure
    projectList.value = response.map((item) => ({
      id: item.id,
      projectDate: item.date,
      projectInfo: item.title,
      projectName: item.location,
      image: item.image, // Adjust if your field names are different
    }));
  } catch (error) {
    console.error('Failed to fetch projects, using fallback data:', error);
  }
});
</script>
<template>
  <ProjectList :projectList=projectList>

  </ProjectList>
  <Footer></Footer>

</template>