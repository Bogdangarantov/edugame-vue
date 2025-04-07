<template>
  <section class="container-fluid main" id="about">
    <div class="row flex-wrap">
      <div class="col-12 col-md-6">
        <div class="text">
          <div class="text-wrapper">
            <h1 class="title">Про подію</h1>
            <p class="regular-text">
              26 квітня 2025 року Приватна школа «Афіни» м. Києва вже<br>
              вчетверте організовує Практично наукову =) конференцію «EduGame. Ігри в освіті».
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
      <div class="col-12 col-md-6 about-image-div">
        <img class="about-image" src="../../src/components/icons/about-info.jpg" alt="EduGame Conf" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutInfoComponent"
};
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
  max-width: 100%;
}


.text {
  display: flex;
  justify-content: center;
  padding-left: 10rem;
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
  line-height: 140%;
}

@media (max-width: 768px) {
  .main {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .text {
    flex-direction: column;
    align-items: center;
    text-align: left;
    padding-left: 0rem;

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
  .text{
    padding-left: 0rem;
    text-align: left;

  }
  .about-image {
    width: 18rem !important;
  }
}
</style>