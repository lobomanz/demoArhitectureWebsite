<template>
  <BigPicture class="big-picture" imageUrl='/images/office_deal.jpg' title="Projektni Tim"></BigPicture>
  <PersonList></PersonList>
  <Footer></Footer>

</template>

<style scoped lang="scss">
.big-picture {
  margin: auto;
  margin-block: 50px;

  @include mobile {
    margin: 0;
  }
}
</style>
<script setup>
defineOptions({ name: 'people' });
import PersonList from '../components/PersonList.vue'
import BigPicture from '../components/BigPicture.vue'
import Footer from '../components/Footer.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'About Us - Our people',
  meta: [
    {
      name: 'description',
      content: 'Learn more about our company and people.'
    }
  ]
})


</script>
