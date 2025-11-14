<template>
  <div :class="{ 'gallery-container-service': mode == '2', 'gallery-container': mode == '1' }">
    <div class="left">
      <button class="chevron left-one" @click="prevImage" aria-label="Previous image"></button>
    </div>

    <div class="image-container">
      <img
        v-if="images && images.length"
        :src="Gateway.baseUrl + images[currentIndex]"
        :alt="generateAlt(images[currentIndex])"
        class="gallery-image"
        loading="lazy"
      />
    </div>

    <div class="right">
      <button class="chevron right-one" @click="nextImage" aria-label="Next image"></button>
    </div>

    <div class="counter">
      {{ currentIndex + 1 }} / {{ images?.length }}
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, onBeforeUnmount, watch } from 'vue'
import Gateway from '../../Gateway'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  mode: {
    type: String,
    required: false,
    validator: (value) => value !== undefined,
  },
})

const currentIndex = ref(0)

// ✅ Generate alt text from file name
function generateAlt(url) {
  if (!url) return ''
  // Extract filename (after last "/" and before extension)
  const fileName = url.split('/').pop().split('.')[0]
  // Replace hyphens/underscores with spaces and capitalize
  const readable = fileName.replace(/[-_]+/g, ' ')
  // Optional: capitalize first letter
  return readable.charAt(0).toUpperCase() + readable.slice(1)
}

function nextImage() {
  if (!props.images?.length) return
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prevImage() {
  if (!props.images?.length) return
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function handleKeydown(e) {
  if (e.key === 'ArrowRight') nextImage()
  else if (e.key === 'ArrowLeft') prevImage()
}

function preloadImages(urls) {
  if (!urls || !urls.length) return
  urls.forEach((url) => {
    const img = new Image()
    img.src = Gateway.baseUrl + url
  })
}

watch(
  () => props.images,
  (newImages) => {
    preloadImages(newImages)
    currentIndex.value = 0
  },
  { immediate: true }
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped lang="scss">
.gallery-container {
  position: relative;
  margin-inline: 50px;
  width: calc(100% - 100px);
  height: calc(100vh - 100px);
  overflow: hidden;

  @include mobile {
    width: 100%;
    margin-inline: 0;
    max-height: 350px;
  }
}

.gallery-container-service {
  position: relative;
  margin-inline: 200px;
  width: calc(100% - 400px);
  height: calc(100vh - 300px);
  overflow: hidden;

  @include mobile {
    width: 100%;
    margin-inline: 0;
    max-height: 350px;
  }
}

.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
  user-select: none;
}

.chevron {
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: relative;
  height: 10px;
  width: 40px;
}

.chevron::before,
.chevron::after {
  position: absolute;
  content: '';
  border-radius: 10px;
  background-color: white;
  width: 20px;
  height: 5px;
}

.left {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.right {
  position: absolute;
  top: calc(50% + 11px);
  right: 20px;
  transform: translateY(-50%);
  @include desktop {
    top: calc(50% + 5px);
  }
}

.chevron.left-one::after {
  transform: rotate(45deg) translateX(8px) translateY(8px);
}
.chevron.left-one::before {
  transform: rotate(135deg);
}
.chevron.right-one::after {
  transform: rotate(225deg) translateX(8px) translateY(8px);
}
.chevron.right-one::before {
  transform: rotate(135deg);
}

.counter {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
