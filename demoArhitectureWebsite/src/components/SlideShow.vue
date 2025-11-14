<template>
  <div class="slideshow" :class="{ 'active' : slideShowActive  }">
    <div v-for="(project, index) in projects" :key="project.id">
      <router-link
        :to="{
          name: 'project',
          params: { id: project.id },
          query: { title: project.projectInfo },
        }"
      >
        <img
          :src="Gateway.baseUrl + project.image"
          class="background-image"
          :class="{
            'show-class': index === currentIndex,
            'hide-class': index !== currentIndex,
          }"
          :alt="project.projectInfo"
        />
      </router-link>
    </div>

    <div class="dots">
      <span
        v-for="(project, index) in projects"
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goToImage(index)"
      ></span>
    </div>
  </div>
  <IntroVideo ref="introVideoRef" />
  
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue"
import Gateway from "../../Gateway"
import IntroVideo from "../components/IntroVideo.vue"
let slideShowActive = ref(false);
const projects = ref([])
const currentIndex = ref(0)
const currentProject = computed(() => projects.value[currentIndex.value])
let intervalId = null

let introVideoRef = ref(null)


const preloadImagesSequentially = async (urls) => {
  for (let i = 0; i < urls.length; i++) {
    await new Promise((resolve) => {
      const img = new Image()
      img.src = Gateway.baseUrl + urls[i]
      img.onload = () => {
        if (i === 0) {
          console.log("First image loaded");
          introVideoRef.value.startExitSequence();
        }
        resolve()
      }
      img.onerror = resolve
    })
  }
}

// 🔹 Slideshow logic with first image lasting longer
const startSlideshow = () => {
  if (intervalId) clearInterval(intervalId)

  let first = true
  const runSlide = () => {
    if (projects.value.length > 0) {
      currentIndex.value = (currentIndex.value + 1) % projects.value.length
    }
    // After the first cycle, switch back to normal 4s
    if (first) {
      first = false
      clearInterval(intervalId)
      intervalId = setInterval(runSlide, 4000)
    }
  }

  // ⏱ First image shows 7 s (4 s + 3 s extra)
  intervalId = setInterval(runSlide, 6000)
}

const restartSlideshow = () => startSlideshow()

const goToImage = (index) => {
  currentIndex.value = index
  restartSlideshow()
}

onMounted(async () => {
  
  try {
    setTimeout(() => {
    slideShowActive.value = true;
  }, 1500);
    const response = await Gateway.getAllProjectsShortInfo()

    // Map data to match Work.vue structure
    projects.value = response.map((item) => ({
      id: item.id,
      projectDate: item.date,
      projectInfo: item.title,
      projectName: item.location,
      image: item.image,
    }))

    // ⏳ Preload sequentially
    await preloadImagesSequentially(projects.value.map((p) => p.image))

    // ▶️ Start slideshow after preload
    startSlideshow()
  } catch (error) {
    console.error("Error fetching projects:", error)
  }
})

onBeforeUnmount(() => clearInterval(intervalId))
</script>


<style scoped lang="scss">
.show-class {
  z-index: 1000;
  opacity: 1;
}
.hide-class {
  opacity: 0;
}
.slideshow {
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.slideshow.active{
  opacity: 1;
  transition: opacity 1s ease-in;
}
.background-image {
  transition: 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
}
.dots {
  z-index: 1001;
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 90px;
  @include mobile {
    gap: 15px;
  }
}
.dot {
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background: white;
  opacity: 0.5;
  cursor: pointer;
  transition: background 0.3s;
}
.dot.active {
  background: white;
  opacity: 1;
}
</style>
