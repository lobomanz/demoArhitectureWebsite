<template>
  <h1>{{ titleFromQuery }}</h1>
  <Gallery :images="foundList" mode="1" />
  <BlogText :content="content"></BlogText>
  <Footer></Footer>


</template>

<script setup>
import { useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import BlogText from '../components/BlogText.vue';
import Gallery from '../components/Gallery.vue';
import { ref, onMounted,computed } from 'vue';
import Gateway from '../../Gateway';
import Footer from '../components/Footer.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Project - A Specific Project',
  meta: [
    {
      name: 'description',
      content: 'Look at a more detailed version of a certain project'
    }
  ]
})

const route = useRoute();
const titleFromQuery = computed(() => route.query.title || 'Untitled Project')
const workId = parseInt(route.params.id);

const imagesList = ref([
  {
    list: [
      '/images/copot_kuca_1.png',
      '/images/copot_kuca_2.png',
      '/images/copot_kuca_3.png',
      '/images/copot_kuca_4.png',
      '/images/copot_kuca_5.png',
    ],
    id: 1
  },
  {
    list: [
      '/images/oc_varazdin_1.png',
      '/images/oc_varazdin_2.png',
      '/images/oc_varazdin_3.png',
      '/images/oc_varazdin_4.png',
      '/images/oc_varazdin_5.png',
      '/images/oc_varazdin_6.png',
      '/images/oc_varazdin_7.png',
      '/images/oc_varazdin_8.png',
    ],
    id: 2
  },
  {
    list: [
      '/images/oc_cakovec_1.png',
      '/images/oc_cakovec_2.png',
      '/images/oc_cakovec_3.png',
      '/images/oc_cakovec_4.png',
      '/images/oc_cakovec_5.png',
      '/images/oc_cakovec_6.png',
    ],
    id: 3
  },
  {
    list: [
      '/images/drustveni_dom_1.jpeg',
      '/images/drustveni_dom_2.jpeg',
      '/images/drustveni_dom_3.jpeg',
      '/images/drustveni_dom_4.jpeg',
      '/images/drustveni_dom_5.jpeg',
      '/images/drustveni_dom_6.jpeg',
      '/images/drustveni_dom_7.jpeg',
      '/images/drustveni_dom_8.jpeg',
      '/images/drustveni_dom_9.jpeg',
    ],
    id: 4
  },
  {
    list: [
      '/images/drustveni_dom_1.jpeg',
      '/images/drustveni_dom_2.jpeg',
      '/images/drustveni_dom_3.jpeg',
      '/images/drustveni_dom_4.jpeg',
      '/images/drustveni_dom_5.jpeg',
      '/images/drustveni_dom_6.jpeg',
      '/images/drustveni_dom_7.jpeg',
      '/images/drustveni_dom_8.jpeg',
      '/images/drustveni_dom_9.jpeg',
    ],
    id: 5
  },
  {
    list: [
      '/images/drustveni_dom_1.jpeg',
      '/images/drustveni_dom_2.jpeg',
      '/images/drustveni_dom_3.jpeg',
      '/images/drustveni_dom_4.jpeg',
      '/images/drustveni_dom_5.jpeg',
      '/images/drustveni_dom_6.jpeg',
      '/images/drustveni_dom_7.jpeg',
      '/images/drustveni_dom_8.jpeg',
      '/images/drustveni_dom_9.jpeg',
    ],
    id: 6
  },
  {
    list: [
      '/images/drustveni_dom_1.jpeg',
      '/images/drustveni_dom_2.jpeg',
      '/images/drustveni_dom_3.jpeg',
      '/images/drustveni_dom_4.jpeg',
      '/images/drustveni_dom_5.jpeg',
      '/images/drustveni_dom_6.jpeg',
      '/images/drustveni_dom_7.jpeg',
      '/images/drustveni_dom_8.jpeg',
      '/images/drustveni_dom_9.jpeg',
    ],
    id: 7
  },
  {
    list: [
      '/images/drustveni_dom_1.jpeg',
      '/images/drustveni_dom_2.jpeg',
      '/images/drustveni_dom_3.jpeg',
      '/images/drustveni_dom_4.jpeg',
      '/images/drustveni_dom_5.jpeg',
      '/images/drustveni_dom_6.jpeg',
      '/images/drustveni_dom_7.jpeg',
      '/images/drustveni_dom_8.jpeg',
      '/images/drustveni_dom_9.jpeg',
    ],
    id: 8
  },
  {
    list: [
      '/images/drustveni_dom_1.jpeg',
      '/images/drustveni_dom_2.jpeg',
      '/images/drustveni_dom_3.jpeg',
      '/images/drustveni_dom_4.jpeg',
      '/images/drustveni_dom_5.jpeg',
      '/images/drustveni_dom_6.jpeg',
      '/images/drustveni_dom_7.jpeg',
      '/images/drustveni_dom_8.jpeg',
      '/images/drustveni_dom_9.jpeg',
    ],
    id: 9
  },
  {
    list: [
      '/images/drustveni_dom_1.jpeg',
      '/images/drustveni_dom_2.jpeg',
      '/images/drustveni_dom_3.jpeg',
      '/images/drustveni_dom_4.jpeg',
      '/images/drustveni_dom_5.jpeg',
      '/images/drustveni_dom_6.jpeg',
      '/images/drustveni_dom_7.jpeg',
      '/images/drustveni_dom_8.jpeg',
      '/images/drustveni_dom_9.jpeg',
    ],
    id: 10
  },
  {
    list: [
      '/images/drustveni_dom_1.jpeg',
      '/images/drustveni_dom_2.jpeg',
      '/images/drustveni_dom_3.jpeg',
      '/images/drustveni_dom_4.jpeg',
      '/images/drustveni_dom_5.jpeg',
      '/images/drustveni_dom_6.jpeg',
      '/images/drustveni_dom_7.jpeg',
      '/images/drustveni_dom_8.jpeg',
      '/images/drustveni_dom_9.jpeg',
    ],
    id: 11
  },
  {
    list: [
      '/images/drustveni_dom_1.jpeg',
      '/images/drustveni_dom_2.jpeg',
      '/images/drustveni_dom_3.jpeg',
      '/images/drustveni_dom_4.jpeg',
      '/images/drustveni_dom_5.jpeg',
      '/images/drustveni_dom_6.jpeg',
      '/images/drustveni_dom_7.jpeg',
      '/images/drustveni_dom_8.jpeg',
      '/images/drustveni_dom_9.jpeg',
    ],
    id: 12
  },
  {
    list: [
      '/images/drustveni_dom_1.jpeg',
      '/images/drustveni_dom_2.jpeg',
      '/images/drustveni_dom_3.jpeg',
      '/images/drustveni_dom_4.jpeg',
      '/images/drustveni_dom_5.jpeg',
      '/images/drustveni_dom_6.jpeg',
      '/images/drustveni_dom_7.jpeg',
      '/images/drustveni_dom_8.jpeg',
      '/images/drustveni_dom_9.jpeg',
    ],
    id: 13
  },
  {
    list: [
      '/images/drustveni_dom_1.jpeg',
      '/images/drustveni_dom_2.jpeg',
      '/images/drustveni_dom_3.jpeg',
      '/images/drustveni_dom_4.jpeg',
      '/images/drustveni_dom_5.jpeg',
      '/images/drustveni_dom_6.jpeg',
      '/images/drustveni_dom_7.jpeg',
      '/images/drustveni_dom_8.jpeg',
      '/images/drustveni_dom_9.jpeg',
    ],
    id: 14
  },
]);

function getListById(id) {
  const item = imagesList.value.find(image => image.id === id);
  return item ? item.list : null;
}

const foundList = ref(getListById(workId));

const defaultContent = `
  
`;

const defaultServiceContent = `
  
`;

const content = ref(route.path.includes('service') ? defaultServiceContent : defaultContent);

// Fetch and override if successful
onMounted(async () => {
  try {
    const images = await Gateway.getProjectPictures(workId);
    if (images && images.length) {
      foundList.value = images;
    }

    let textResponse = await Gateway.getProjectRichText(workId);
    textResponse = textResponse.richText;
    if (textResponse) {
      content.value = textResponse;
    }
  } catch (err) {
    console.warn('Using fallback content and images due to fetch error:', err);
  }
});
</script>

<style lang="scss">
h1{
  margin-left: 50px;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: left;
  @include mobile{
    margin-left: 10px;
    font-size: 28px;
  }
}
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