<template>
  <div class="project-wrapper">
    <div class="project-card" v-for="project in projectList">
      <router-link :to="{ name: 'project', params: { id: project.id }, query: { title: project.projectInfo } }" class="card-link">
        <ProjectCard :info="project"></ProjectCard>
      </router-link>

    </div>
  </div>


</template>
<script setup>
import { ref, defineProps } from 'vue';
import ProjectCard from './ProjectCard.vue'
const props = defineProps({
  projectList: {
    type: Array,
    required: true,
    validator: (value) => {
      return (
        value !== undefined
      );
    },
  },
});

const hover = ref(false);
</script>
<style scoped lang="scss">
.project-wrapper {
  max-width: calc(93vw + 60px);
  width: 100%;
  margin-inline: auto;

  @include desktop {
    padding: 20px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }

  .project-card {

    width: 31vw;

    @include mobile {
      padding-inline: 15px;
      padding-top: 10px;
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    a {
      text-decoration: none;
      @include mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>