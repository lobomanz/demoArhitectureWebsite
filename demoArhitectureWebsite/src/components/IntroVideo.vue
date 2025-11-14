<template>
    <div class="intro-video-container" :class="{'removed': removeIntro}" v-if="visible">
        <div class="image-container">

            <img src="../../public/images/modernSimple.png" alt="modern simple background" ref="introImage" />
        </div>
        <div class="intro-text">
            <div class="display-flex">
                <div class="letter">g</div>
                <div class="letter">l</div>
                <div class="o-container">
                    <div :class="{ 'active-up': isActive }" class="letter-o"></div>
                </div>
                <div class="letter">b</div>
                <div class="letter">a</div>
                <div class="letter">l</div>
            </div>
            <div class="display-flex">
                <div class="letter"></div>
                <div class="letter">c</div>
                <div class="o-container">
                    <div :class="{ 'active-down': isActive }" class="letter-o"></div>
                </div>
                <div class="letter">n</div>
                <div class="letter">n</div>
                <div class="letter">e</div>
                <div class="letter">c</div>
                <div class="letter">t</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(true)
const isActive = ref(false)
const removeIntro = ref(false)
const introImage = ref(null)

const startExitSequence = () => {
//   isActive.value = true
  setTimeout(() => {
    removeIntro.value = true
    setTimeout(() => {
      visible.value = false
    }, 3000)
  }, 2500)
}

defineExpose({ startExitSequence })

onMounted(() => {
  const img = introImage.value
  if (img) {
    // If already cached (e.g. fast refresh)
    if (img.complete) {
      isActive.value = true
    } else {
      // Wait until image fully loads
      img.addEventListener('load', () => {
        isActive.value = true
      })
    }
  }
})
</script>


<style scoped lang="scss">
.intro-video-container {
    opacity: 1;

    &.removed {
        opacity: 0;
        transition: opacity 0.7s;
    }


    .intro-text {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 50px;
        font-weight: bold;
        z-index: 10000;
        pointer-events: none;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;

        .display-flex {
            display: flex;
            align-items: center;
            position: relative;
        }

        .letter,
        .o-container {
            width: 35px;
            height: 50px;
        }

        .o-container {
            position: relative;

            .letter-o {
                position: absolute;
                top: 32px;
                left: -10px;
                display: inline-block;
                background-color: white;
                border-radius: 50%;
                margin: 0 5px;
                box-sizing: border-box;
                width: 30px;
                height: 30px;
                transition: 1.5s ease;

                &.active-up {
                    top: 52px;
                }

                &.active-down {
                    top: -1px;
                }
            }
        }

        // Desktop styles
        @include desktop {
            font-size: 75px;

            .letter,
            .o-container {
                width: 50px;
                height: 60px;
            }

            .o-container {
                .letter-o {
                    top: 40px;
                    left: -10px;
                    width: 45px;
                    height: 45px;

                    &.active-up {
                        top: 77px;
                    }

                    &.active-down {
                        top: 13px;
                    }
                }
            }
        }
    }
}
.desktop-only {
    display: none;
    @include desktop {
        display: block;
    }
}
.mobile-only {
    display: block;
    @include desktop {
        display: none;
    }
}
.image-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 9988;
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: translate(-50%, -50%);
    }
}
</style>

