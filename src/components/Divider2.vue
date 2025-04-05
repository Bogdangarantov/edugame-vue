<template>
  <div class="container-fluid main">
    <div class="text">
      <div>
        <h1 class="text2">Конференція буде проходити у ігровому форматі.</h1>
        <h1 class="text2">Наскрізною грою цього року стане гра “Політея” - авторська розробка <br> школи “Афіни”. </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Divider2"
}
</script>

<style scoped>
.main {
  padding: 3rem;
}

.text {
  justify-content: center;
  display: flex;
  color: black;
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
  font-weight: 500;
  font-size: 30px;
  line-height: 100%;
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
