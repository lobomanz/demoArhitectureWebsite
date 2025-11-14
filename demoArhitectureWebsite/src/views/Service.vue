<template>
  <Gallery :images="foundList" mode="2" />
  <BlogText :content="content"></BlogText>
  <Footer></Footer>

</template>


<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import BlogText from '../components/BlogText.vue';
import Gallery from '../components/Gallery.vue';
import Gateway from '../../Gateway';
import Footer from '../components/Footer.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Service - A Specific Service',
  meta: [
    {
      name: 'description',
      content: 'Learn more about a specific service.'
    }
  ]
})

const route = useRoute();
const workId = parseInt(route.params.id);

const imagesList = ref([]);

function getListById(id) {
  const item = imagesList.value.find((image) => image.id === id);
  return item ? item.list : null;
}

const foundList = ref(getListById(workId));

const defaultProjectContent = ``;

const defaultServiceContent = ``;

const content = ref(route.path.includes('service') ? defaultServiceContent : defaultProjectContent);

onMounted(async () => {
  try {
    const [images, text] = await Promise.all([
      Gateway.getServicePictures(workId),
      Gateway.getServiceRichText(workId)
    ]);

    if (images && images.length > 0) {
      foundList.value = images;
    }

    if (text ) {
      content.value = text.richText;
    }
  } catch (error) {
    console.warn('Failed to fetch service data, using hardcoded content.', error);
  }
});
</script>

<style lang="scss">
.wrapper {
  h2 {
    font-size: 32px;
    padding-bottom: 20px;
    padding-top: 10px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
  }
}
</style>