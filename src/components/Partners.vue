<template>
  <section class="container-fluid main" id="partners">
    <div class="title">
      <h1>Партнери</h1>
    </div>
    <div class="d-flex row">
      <div class="partner-image col">
        <img src="../components/icons/AthenesSchoolIcon.png" alt="Школа Афіни" class="smaller">
      </div>
      <div class="partner-image col smaller">
        <img src="../components/icons/IATIcon.png" alt="International Academy Of Tutoring" class="smaller">
      </div>

      <div class="partner-image col">
        <img src="../components/icons/GameAcademy.jpg" alt="Тренінгова Компанія Академія Гри" class="smaller">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:"Partners"
}
</script>

<style scoped>
.main{
  padding: 3rem;
}
.title{
  text-align: center;
  padding-bottom: 3rem;
}
.title h1 {
  font-family: var(--ma);
  font-weight: 400;
  font-size: 60px;
}
.partner-image{
  justify-content: center;
  display: flex;
}
.smaller{
  object-fit: contain;
  max-height: 90px; /* Контроль висоти зображень */
  width: auto;
}
.partner-logo{
  object-fit: contain;
  max-height: 120px; /* Контроль висоти зображень */
  width: auto;
}

/* Адаптивні стилі для мобільних пристроїв */
@media (max-width: 768px) {
  .partner-logo {
    max-height: 100px; /* Зменшення висоти зображень на планшетах */
  }
}

@media (max-width: 480px) {
  .title h1 {
    font-size: 30px; /* Зменшення розміру заголовка на маленьких екранах */
  }

  .partner-logo {
    max-height: 80px; /* Зменшення висоти зображень на мобільних */
  }

  .main {
    padding: 1.5rem; /* Зменшення відступів */
  }

  .partner-image {
    flex-basis: 100%; /* Відображення зображень один під одним */
    margin-bottom: 1rem;
  }
}
</style>
