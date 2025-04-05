<template>
  <section class="container-fluid main">
    <div class="text">
      <div>
        <h1 class="text1">Ключова тема цьогорічної конференції — </h1>
        <h1 class="text2">“Ігрові технології та AI: як поєднати навчання, мотивацію та <br>адаптацію”.</h1>
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
}

.text {
  justify-content: center;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
}

.text1 {
  font-family: var(--m);
  font-weight: 600;
  font-size: 30px;
  line-height: 140%;
  text-transform: uppercase;
  text-align: center;
}

.text2 {
  font-family: var(--m);
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  text-transform: uppercase;
  text-align: center;
}

/* Адаптивні стилі для мобільних пристроїв */
@media (max-width: 768px) {
  .main {
    padding: 2rem;
  }

  .text1, .text2 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .text1, .text2 {
    font-size: 18px;
  }
}
</style>
