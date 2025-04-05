<template>
  <div class="container-fluid main">
    <div class="text">
      <div>
        <div class="d-flex">
          <h1 class="fw-medium text1">«EduGame. Ігри в освіті»</h1>
          <h1 class="text1"> - це не просто конференція.</h1>
        </div>
        <h1 class="text2">Це простір, де гра стає мовою навчання, розвитку, підтримки та <br> натхнення.</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Divider3"
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
  flex-direction: column;
  color: white;
  align-items: center;
}

.text1 {
  font-family: var(--m);
  font-weight: 400;
  font-size: 30px;
  line-height: 140%;
  text-transform: uppercase;
  margin-bottom: 1rem; /* Відстань між абзацами */
}

.text2 {
  font-family: var(--m);
  font-weight: 400;
  font-size: 30px;
  line-height: 140%;
  text-transform: uppercase;
  text-align: center; /* Вирівнює текст по центру */
}

/* Адаптивні стилі */
@media (max-width: 768px) {
  .text1 {
    font-size: 24px; /* Зменшуємо шрифт для планшетів */
  }
  .text2 {
    font-size: 24px; /* Зменшуємо шрифт для планшетів */
  }
}

@media (max-width: 480px) {
  .text1 {
    font-size: 20px; /* Зменшуємо шрифт для мобільних */
  }
  .text2 {
    font-size: 20px; /* Зменшуємо шрифт для мобільних */
  }
}
</style>
