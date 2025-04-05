<template>
  <section :id="id" class="slider-container" :class="directionClass">
    <div class="slider-track">
      <div class="slide" v-for="(image, index) in repeatedImages" :key="image.id + '-' + index">
        <img :src="image.url" alt="image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ImageCarousel",
  props: {
    images: {
      type: Array,
      required: true
    },
    direction: {
      type: String,
      default: "left", // або "right"
      validator: value => ["left", "right"].includes(value)
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      repeatedImages: []
    };
  },
  computed: {
    directionClass() {
      return this.direction === "left" ? "scroll-left" : "scroll-right";
    }
  },
  mounted() {
    this.repeatedImages = [...this.images, ...this.images];
  }
};
</script>

<style scoped>
.slider-container {
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
}

.slider-track {
  display: flex;
  width: max-content;
  animation-duration: 40s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.slider-container.scroll-left .slider-track {
  animation-name: scroll-left;
}

.slider-container.scroll-right .slider-track {
  animation-name: scroll-right;
}

.slider-container:hover .slider-track {
  animation-play-state: paused;
}

.slide {
  flex: 0 0 auto;
  margin-right: 40px;
}

.slide img {
  width: 433px;
  height: 600px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}

/* Ліво */
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Право */
@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Адаптивні стилі для мобільних пристроїв */
@media (max-width: 768px) {
  .slide img {
    width: 300px; /* Зменшення ширини зображень */
    height: 400px; /* Зменшення висоти зображень */
  }

  .slider-container {
    padding: 10px 0;
  }

  .slider-track {
    animation-duration: 20s; /* Швидше прокручування на мобільних */
  }

  .slide {
    margin-right: 20px; /* Зменшення проміжку між слайдами */
  }
}

@media (max-width: 480px) {
  .slide img {
    width: 250px; /* Ще більше зменшення ширини для маленьких екранів */
    height: 350px; /* І висоти */
  }

  .slider-track {
    animation-duration: 15s; /* Швидше прокручування для дуже малих екранів */
  }

  .slider-container {
    padding: 5px 0;
  }
}
</style>
