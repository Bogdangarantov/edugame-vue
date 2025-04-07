<template>
  <section class="container-fluid main">
    <div class="text">
      <div>
        <h1 class="text1">
          Ключова тема цьогорічної конференції — <br>
          “Ігрові технології та AI: як поєднати навчання, мотивацію та
          адаптацію.”
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Divider1"
}
</script>

<style scoped>
.main {
  background-color: #294168;
  padding: 3rem;
  padding-left: 0;
}

.text {
  padding-left: 10rem;
  color: white;
  align-items: center;
}

.text1 {
  font-family: var(--m);
  font-weight: 600;
  font-size: 30px;
  line-height: 140%;
  text-transform: uppercase;
  text-align: left;
}

/* Адаптивні стилі для планшетів та мобільних пристроїв */
@media (max-width: 768px) {
  .main {
    padding: 2rem;
  }

  .text {
    padding: 0 1rem;
    text-align: left;
  }

  .text1, .text2 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .text {
    padding: 0 0.5rem;
    text-align: left;

  }

  .text1, .text2 {
    font-size: 18px;
  }
}
</style>
