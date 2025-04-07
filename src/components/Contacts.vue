<template>
  <section class="container-fluid contacts" id="contacts">
    <div class="row">
      <div class="col text-col">
        <div>
          <div class="title">
            <h1>Основна інформація:</h1>
          </div>
          <div class="regular-text">
            <p>
              Дата конференції: 26 квітня 2025 року <br>Місце проведення: Приватна школа "Афіни", Київ <br>Час: 09:00 –
              17:00
            </p>
          </div>
          <div class="title">
            <h1>Контакти організаторів:</h1>
          </div>
          <div class="regular-text">
            <p>
              Загальні питання <br>
              Реєстрація та квитки <br>
              Співпраця та партнерство <br>
              Віолета Зінов’єва – організаторка конференції <br>
              Телефон: <a href="tel:+380631468730">+38 063 146 87 30 </a><br>
              Email: <a href="mailto:zinovieva@athens.kiev.ua">zinovieva@athens.kiev.ua</a>
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <!-- Google Map iframe -->
        <div class="map-container">
          <iframe
              class="map-frame"
              loading="lazy"
              allowfullscreen
              src="https://maps.google.com/maps?q=%D1%88%D0%BA%D0%BE%D0%BB%D0%B0+%D0%90%D1%84%D1%96%D0%BD%D0%B8&output=embed"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- Соціальні мережі -->
    <div class="row social-media">
      <div class="col">
        <div class="contacts-title">
          <h1>Соціальні мережі:</h1>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col media-container">
        <a href="https://www.instagram.com/athens_school_official/?hl=ru" class="media">
          <div class="icon">
            <instagram-icon/>
          </div>
          <p class="media-label">Instagram</p>
        </a>
        <a href="https://www.facebook.com/share/1Brucn1ibk/" class="media">
          <div class="icon">
            <facebook-icon/>
          </div>
          <p class="media-label">Facebook</p>
        </a>
        <a href="https://www.youtube.com/@AthensSchoolTube" class="media">
          <div class="icon">
            <youtube-icon/>
          </div>
          <p class="media-label">Youtube</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";

export default {
  name: "Contacts",
  components: {FacebookIcon, YoutubeIcon, TelegramIcon, InstagramIcon }
};
</script>

<style scoped>
.contacts {
  background-color: #294168BF;
  padding: 6rem 3rem 3rem 3rem;
}

.text-col {
  display: flex;
  justify-content: flex-end;
}

.title h1 {
  font-family: var(--ma);
  font-weight: 400;
  font-size: 40px;
  line-height: 140%;
  color: white;
}

.regular-text p {
  font-family: var(--m);
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: white;
}

.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.map-frame {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 4 / 3;
  border: 0;
  border-radius: 8px;
}

.social-media {
  padding-top: 2rem;
}

.contacts-title {
  font-family: var(--ma);
  font-weight: 400;
  font-size: 40px;
  line-height: 140%;
  text-align: center;
  color: white;
}

.media-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding-top: 1rem;
}

.icon {
  display: flex;
  justify-content: center;
}

.media:hover .media-label {
  color: red;
}
.media p {
  text-align: center;
  font-family: var(--m);
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: white;
}

a {
  color: white;
  text-decoration: none;
}

a:visited {
  color: white;
}

a:active,
a:focus {
  color: white;
  text-decoration: none;
}
a:hover{
  color: red;
  text-decoration: none;
  fill: red;
}

.media-label{
  padding-top: 1rem;
}

/* Адаптивні стилі */
@media (max-width: 768px) {
  .contacts {
    padding: 3rem 2rem;
  }

  .title h1 {
    font-size: 32px;
  }

  .regular-text p {
    font-size: 18px;
  }

  .map-frame {
    max-width: 400px;
  }

  .social-media .media-container {
    gap: 1.5rem;
  }

  .media p {
    font-size: 18px;
  }

  /* Оновлений порядок елементів */
  .row {
    flex-direction: column-reverse;
  }
}

@media (max-width: 480px) {
  .title h1 {
    font-size: 28px;
  }

  .regular-text p {
    font-size: 16px;
  }

  .map-frame {
    max-width: 320px;
  }

  .media p {
    font-size: 16px;
  }
}
</style>
