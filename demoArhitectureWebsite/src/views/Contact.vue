<template>
  <ContactPage></ContactPage>
  <Footer></Footer>
</template>
<script setup>
defineOptions({ name: 'contact' });
import ContactPage from '../components/ContactPage.vue'
import Footer from '../components/Footer.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Contact - Get in Touch',
  meta: [
    {
      name: 'description',
      content: 'Learn more about our company e-mails and contact.'
    }
  ]
})
</script>