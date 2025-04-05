<template>
  <section class="image-container">
    <img src="../components/icons/ConferenceHall.png" alt="Виступ" class="divider-image">
  </section>
</template>

<script>
export default {
  name: "DividerImage"
}
</script>

<style scoped>
.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.divider-image {
  width: 100%;
  height: auto; /* Зберігає пропорції зображення */
  object-fit: cover; /* Обрізає зображення по висоті та ширині */
}

/* Адаптивні стилі */
@media (max-width: 768px) {
  .divider-image {
    width: 90%; /* Для планшетів, щоб не обтяжувати відображення */
  }
}

@media (max-width: 480px) {
  .divider-image {
    width: 100%; /* Для мобільних телефонів — максимально велике зображення */
  }
}
</style>
