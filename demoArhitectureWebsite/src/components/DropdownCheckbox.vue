<template>
  <div class="dropdown" :class="{ 'open': isOpen }">
    <div class="dropdown-container" :class="{ 'opened': isOpen }">
      <button @click="$emit('toggle-dropdown')" class="dropdown-button">
        <span class="dropdown-title">{{ title }}</span>
        <span class="chevron" :class="{ 'right': isOpen, 'down': !isOpen }"></span>
      </button>
      <div class="dropdown-menu" >
        <label v-for="item in items" :key="item" class="dropdown-item">
          <input 
            type="checkbox" 
            :value="item" 
            v-model="checkedItems" 
            @change="handleCheckboxChange(item)"
          />
          <span class="custom-checkbox">
            <span class="checkmark" v-if="checkedItems.includes(item)">✔</span>
          </span>
          <span class="item-text">{{ item }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String,
  items: Array,
  isOpen: Boolean,
});

const emits = defineEmits(['toggle-dropdown', 'checkbox-changed']);

const checkedItems = ref([]);

const handleCheckboxChange = (item) => {
  emits('checkbox-changed', item);
};
</script>

<style lang="scss" scoped>
.dropdown {
  margin-inline: 10px;
  position: relative;
  @include desktop{
    width: 200px; 
    margin: 10px; 

  }

  &.open {
    .dropdown-container {
      border-bottom: none; 
      @include desktop{
        box-shadow: 0 1px 4px rgba(0, 0, 0, .2); 
      }
    }

    .dropdown-menu {
      @include desktop{
        box-shadow: 0 6px 6px rgba(0, 0, 0, .2); 
      }
    }

    .dropdown-button {
      @include desktop{
        box-shadow: 0 1px 4px rgba(0, 0, 0, .2); 
      }
    }
  }

  .dropdown-container {
    width: 100%; 
    @include desktop{
      max-width: 200px; 
      }

    .dropdown-button {
      
      transition: 0.3s;
      border: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 10px 12px; // Padding when closed
      background-color: transparent; // Clear background
      
      cursor: pointer;
      width: 100%; // Full width

      @include desktop{
        border-bottom: 3px solid black; 
      }

      .dropdown-title {
        font-size: 18px; // Title font size
        font-weight: bold; // Bold title
      }

      .chevron {
        width: 12px;
        height: 12px;
        border-left: 2px solid black;
        border-bottom: 2px solid black;
        transform: rotate(225deg); 
        transition: transform 0.3s; 

        &.right {
          transform: rotate(45deg); 
        }

        &.down {
          transform: rotate(225deg); 
        }
      }
    }
  }
  .opened {
    .dropdown-button {
      border-color:transparent ;
    }
    .dropdown-menu{
      max-height: 400px; 
      overflow-y: auto;
    }
  }

  .dropdown-menu {
    
    top: 100%; 
    left: 0; 
    background: white;
    overflow-y: hidden; 
    max-height: 0; 
    width: 100%; 
    transition: max-height 0.3s ease, box-shadow 0.3s ease; 
    z-index: 1000; 

    // &.open {
    //   max-height: 400px; // Max height when open
    //   overflow-y: scroll;
    // }
    @include desktop{
      position: absolute; 
      }
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    padding: 5px 10px; // Padding for items
    width: 100%; // Ensure items take full width
    background-color: transparent; // Clear background

    input[type="checkbox"] {
      display: none;
    }

    .custom-checkbox {
      width: 20px;
      height: 20px;
      border: 1px solid #ccc;
      background-color: black;
      border-radius: 5px;
      position: relative;
      margin-right: 10px;
      cursor: pointer;

      .checkmark {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        display: none;
      }
    }

    input[type="checkbox"]:checked + .custom-checkbox .checkmark {
      display: block;
    }

    .item-text {
      font-size: 16px; // Item font size
      color: #555; // Darker gray for item color
      font-weight: normal; // Normal weight for items
    }

    &:hover {
      background-color: #f0f0f0; // Optional hover effect
    }
  }
}
</style>
