<template>
  <section class="container-fluid main" id="about">
    <div class="row">
      <div class="col">
        <div class="text">
          <div>
            <h1 class="title">
              Про подію
            </h1>
            <p class="regular-text">
              26 квітня 2025 року Приватна школа «Афіни» м. Києва вже<br>вчетверте організовує
            </p>

            <p class="regular-text">
              Практично наукову =) конференцію «EduGame. Ігри в освіті».
            </p>
            <p class="regular-text big-p">
              Гейміфікація навчального процесу, <br>
              ігропрактика у blended learning та сучасні освітні <br>
              інструменти ― головні традиційні теми конференції. <br>
              Наша мета — обмін досвідом у застосуванні <br>
              едьютейменту (ігрового навчання) між сферами бізнесу, <br>
              формальної та неформальної освіти.
            </p>
          </div>
        </div>
      </div>
      <div class="col about-image-div">
        <img class="about-image" src="../../src/components/icons/about-info.png" alt="EduGame Conf">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutInfoComponent"
}
</script>

<style scoped>
.main {
  padding-top: 6rem;
  padding-bottom: 5rem;
  height: fit-content;
}

.big-p {
  word-break: keep-all;
}

.about-image-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image {
  width: 26rem !important;
}

.text {
  justify-content: right;
  display: flex;
}

.title {
  font-family: var(--ma);
  font-size: 60px;
  font-weight: 400;
}

.regular-text {
  font-family: var(--m);
  font-size: 20px;
  font-weight: 500;
}

/* Адаптивні стилі для мобільних пристроїв */
@media (max-width: 768px) {
  .main {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .text {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-size: 40px;
  }

  .regular-text {
    font-size: 16px;
  }

  .big-p {
    font-size: 18px;
  }

  .about-image-div {
    margin-top: 2rem;
  }

  .about-image {
    width: 20rem !important;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 32px;
  }

  .regular-text {
    font-size: 14px;
  }

  .big-p {
    font-size: 16px;
  }

  .about-image {
    width: 18rem !important;
  }
}
</style>
