<template>
  <section class="container-fluid main">
    <div class="text">
      <div>
        <h1 class="text2">Конференція буде проходити у ігровому форматі.</h1>
        <h1 class="text2">Наскрізною грою цього року стане гра “Політея” - авторська розробка <br>школи “Афіни”. </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Divider2"
}
</script>

<style scoped>

.main {
  padding: 3rem;
  padding-left: 10rem;
}

.text {
  color: black;
  align-items: center;
}

.text2 {
  font-family: var(--m);
  font-weight: 500;
  font-size: 30px;
  line-height: 140%;
  text-transform: uppercase;
  text-align: left;
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
