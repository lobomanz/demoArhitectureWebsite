<template>
  <div>

  
  <div :class="{ 'space-top': mode != 1 && mode != 2 }"></div>
  <header class="fixed-header" :class="{ transparent: mode == 1 || mode == 2 }">
    <div class="inside-header">
      <RouterLink 
        to="/"
        class="logo"
        :class="{ 'color-white': mode == 1 || mode == 2 }"
        >demoArhitectureWebsite</RouterLink 
      >
      <div class="nav-links">
        <RouterLink 
          to="/work"
          class="nav-item"
          :class="{ 'hover-white': mode == 2 }"
          >projekti</RouterLink 
        >
        
        <RouterLink 
          to="/services"
          class="nav-item"
          :class="{ 'hover-white': mode == 2 }"
          >usluge</RouterLink 
        >
        <RouterLink 
          to="/people"
          class="nav-item"
          :class="{ 'hover-white': mode == 2 }"
          >ured</RouterLink 
        >
        <RouterLink 
          to="/refrences"
          class="nav-item"
          :class="{ 'hover-white': mode == 2 }"
          >reference</RouterLink  
        >
        <RouterLink 
          to="/contact"
          class="nav-item"
          :class="{ 'hover-white': mode == 2 }"
          >kontakt</RouterLink  
        >
      </div>
    </div>
  </header>
  <header class="header-mobile">
    <div class="header-wrapper">
      <div class="header-top">
        <RouterLink  to="/" class="logo">GC</RouterLink  >
        <div class="hamburger" :class="{ open: isOpen }" @click="toggleHamburger">
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </div>
      </div>
      <div class="menu" :class="{ open: isOpen }">
        <RouterLink  @click="toggleHamburger" to="/work" class="nav-item">projekti</RouterLink >
          <RouterLink  @click="toggleHamburger" to="/services" class="nav-item">usluge</RouterLink >
            <RouterLink  @click="toggleHamburger" to="/people" class="nav-item">ured</RouterLink >
        <RouterLink  @click="toggleHamburger" to="/refrences" class="nav-item">reference</RouterLink >
        <RouterLink  @click="toggleHamburger" to="/contact" class="nav-item">kontakt</RouterLink >
      </div>
    </div>
  </header>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, defineProps } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const props = defineProps({
  mode: {
    type: Number,
    required: true,
    validator: (value) => {
      return value !== undefined;
    },
  },
});

const isOpen = ref(false);

const toggleHamburger = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped lang="scss">
.space-top {
  margin-top: 100px;
  @include mobile {
    margin-top: 50px;
  }
}
.fixed-header {
  @include mobile {
    display: none !important;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: center;
  .inside-header {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: calc(90vw + 60px);
  }
  .logo {
    text-decoration: none;
    color: inherit;
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 10px;
  }

  .nav-links {
    font-size: 32px;
    display: flex;
    align-items: center;
  }

  .nav-item {
    transition: 0.3s;
    margin: 0 15px; 
    cursor: pointer; 
    text-decoration: none; 
    color: inherit; 
    &:hover {
      color: black;
      opacity: 0.6;
    }
  }
  .hover-white {
    transition: 0.3s;
    color: inherit; 
    &:hover {
      color: white;
      opacity: 0.7;
    }
  }
  .color-white {
    color: #fff;
  }
}

.transparent {
  color: #fff;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
.header-mobile {
  display: none;

  @include mobile {
    z-index: 2000;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 24px 16px -20px;
    height: 50px;
    .header-wrapper {
      width: 100%;
      .header-top {
        display: flex;
        padding: 10px 15px;
        align-items: center;
        justify-content: space-between;
        .logo {
          color: #333;
          text-decoration: none;
          font-size: 26px;
          line-height: 30px;
          font-weight: bold;
        }
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 25px;
          height: 18px;
          cursor: pointer;
          transition: transform 0.3s ease;

          span {
            display: block;
            height: 3px;
            width: 100%;
            background-color: #333;
            transition: all 0.3s ease;
            border-radius: 5px;
          }

          
          &.open {
            .hamburger-top {
              
              transform: rotate(45deg) translate(6px, 5px);
            }

            .hamburger-middle {
              opacity: 0;
            }

            .hamburger-bottom {
              transform: rotate(-45deg) translate(6px, -5px);
            }
          }
        }
      }
      .menu{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        background: white;
        position: fixed;
        width: 100%;
        top: 50px;
        left: -100%;
        transition: 0.3s;
        &.open {
          left: 0%;
        }
        .nav-item{
          padding: 10px;
          text-transform: uppercase;
          color: black;
          font-size: 20px;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
