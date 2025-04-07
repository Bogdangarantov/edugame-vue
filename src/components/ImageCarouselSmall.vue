<template>
  <div class="container-fluid main">
    <Carousel v-bind="config">
      <Slide v-for="image in images" :key="image.id">
        <img  :src="image.url" alt="image"/>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import 'vue3-carousel/carousel.css'
import {Carousel, Slide, Navigation} from 'vue3-carousel'
export default {
  name:"ImageCarouselSmall",
  components: {Navigation, Slide, Carousel},
  props:["images"],
  data(){
    return{
      config : {
        height: 200,
        itemsToShow: 3, // Кількість елементів, які відображаються на великих екранах
        gap: 5,
        wrapAround: true,
        autoplay: 2000, // одразу наступний слайд
        transition: 5
      }
    }
  }
}
</script>

<style scoped>
.main{
  padding-top: 3rem;
  padding-bottom: 3rem;
}

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
  width: 350px;
  height: 350px; /* Зробимо зображення квадратними */
  object-fit: contain; /* зберігаємо пропорції зображення */
}

/* Медіа-запити для мобільних пристроїв */
@media (max-width: 768px) {
  .carousel {
    padding-left: 0;
    padding-right: 0;
  }

  .main {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  /* Налаштування для мобільних пристроїв */
  .carousel__slide {
    width: 100%;
  }

  /* Зменшення кількості елементів на мобільних пристроях */
  .carousel__viewport {
    display: block;
  }

  .config {
    itemsToShow: 1;
  }
}

@media (max-width: 480px) {
  img {
    height: 200px; /* зображення залишатиметься квадратним на маленьких екранах */
    width: 200px; /* зображення залишатиметься квадратним на маленьких екранах */
  }
}
</style>
