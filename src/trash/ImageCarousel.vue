<template>
  <div class="container-fluid main">
    <Carousel v-bind="config">
      <Slide v-for="image in images" :key="image.id">
        <img :src="image.url" alt="image"/>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import {Carousel, Slide, Navigation} from 'vue3-carousel'

// const images = Array.from({length: 5}, (_, index) => ({
//   id: index + 1,
//   url: `https://picsum.photos/seed/${Math.random()}/800/600`,
// }))
const images = [
  {
    id: 1,
    url: "../../src/components/icons/photo1.png"
  },
  {
    id: 2,
    url: "../../src/components/icons/photo2.png"
  },
  {
    id: 3,
    url: "../../src/components/icons/photo3.png"
  },
  {
    id: 4,
    url: "../../src/components/icons/photo4.png"
  },
  {
    id: 5,
    url: "../../src/components/icons/photo5.png"
  },
  {
    id: 6,
    url: "../../src/components/icons/photo6.png"
  },
]
const config = {
  height: 200,
  itemsToShow: 3,
  gap: 5,
  wrapAround: true,
  autoplay: 1000, // одразу наступний слайд
  transition: 5
}
</script>
<style scoped>
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
  height: fit-content!important;
}
.carousel__viewport{
  height: fit-content!important;
}
.carousel__track{
  height: fit-content!important;
}
.carousel__slide{
  height: fit-content!important;
}

img {
  border-radius: 8px;
  width: 433px;
  height: 600px;
  object-fit: cover;
}
</style>
