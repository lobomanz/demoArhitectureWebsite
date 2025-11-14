<template>
  <div class="profile-card">
    <img
      v-if="profile.image"
      :src="Gateway.baseUrl + profile.image"
      :alt="profile.name"
      class="profile-image"
      loading="lazy"
    />
    <p v-if="profile.name" class="profile-name">{{ profile.name }}</p>
    <p v-if="profile.title" class="profile-title" v-html="profile.title"></p>

    <p v-if="profile.departments?.length" class="profile-other">
      <span v-for="(role, index) in profile.departments" :key="index">
        <span v-html="role"></span><span v-if="index < profile.departments.length - 1">, </span>
      </span>
    </p>

    <p v-if="profile.description" class="profile-other" v-html="profile.description"></p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Gateway from '../../Gateway';

const props = defineProps({
  profile: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        typeof value.image === 'string' &&
        typeof value.name === 'string' &&
        typeof value.title === 'string' &&
        Array.isArray(value.departments) &&
        typeof value.description === 'string'
      );
    },
  },
});
</script>

<style scoped lang="scss">
.profile-card {
  padding: 10px;
  max-width: 100%;
  text-align: left;
  @include mobile {
    padding-inline: 30px;
  }
}

.profile-image {
  padding-top: 15px;
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  filter: grayscale(100%);
  @include mobile {
    max-height: max-content;
  }
}

.profile-name {
  font-weight: bold;
  font-size: 18px;
  margin: 0;
}

.profile-title,
.profile-other {
  font-weight: normal;
  margin: 0;
  display: block;
}
</style>
