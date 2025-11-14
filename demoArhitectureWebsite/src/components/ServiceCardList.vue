<template>
    <div class="image-card-list">
      <div class="row" v-for="(row, rowIndex) in rows" :key="rowIndex">
        <router-link
          v-for="item in row"
          :to="{ name: 'service', params: { id: item.id } }"
          :key="item.id"
          class="card-link"
        >
          <ServiceCard :data="item" />
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  import ServiceCard from './ServiceCard.vue';
  
  const props = defineProps({
    items: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(item => 'image' in item && 'title' in item && 'id' in item);
      },
    },
  });
  
  // Compute rows of items (4 items per row)
  const rows = computed(() => {
    const rowsArray = [];
    for (let i = 0; i < props.items.length; i += 4) {
      rowsArray.push(props.items.slice(i, i + 4));
    }
    return rowsArray;
  });
  </script>
  
  <style lang="scss" scoped>
  .image-card-list {    
    padding: 20px;
    @include desktop{
      display: flex;
      flex-direction: column;
    }
  
    .row {
      margin-bottom: 20px;
      @include desktop{
        display: flex;
        justify-content: space-between;
      }
  
      .card-link {
        width: 25% ;
        color: black;
        flex: 1;
        margin-right: 10px; // Add some spacing between items
        text-decoration: none;
  
        &:last-child {
          margin-right: 0; // Remove margin for the last item
        }
      }
    }
  }
  </style>
  