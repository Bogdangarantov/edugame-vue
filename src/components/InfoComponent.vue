<template>
  <div class="container-fluid bg-container">
    <div class="shutdown-timer">
      <div class="date">
        <h2>26 квітня</h2>
      </div>
      <div class="info">
        <div class="row">
          <div class="col edugame-title">
            <div>
              <h2 class="edu-game">EduGame.</h2>
            </div>
            <div>
              <h2 class="info-games-in-knowledge">
                Iгри в освіті
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col text">
            <p>Перша в Україні гейміфікована</p>
            <p>практично =) наукова конференція</p>
          </div>
        </div>
      </div>
      <div class="timer">
        <div class="row">
          <div class="col text-center">
            <div class="wait">
              <h1>Залишилось до EduGame 4.0</h1>
            </div>
            <div class="shutdown">
              <div class="d-flex align-content-center justify-content-center">
                <div class="shutdown-item">
                  <span class="cypher">{{ timeLeft.days }}</span>
                  <span class="label">Дні</span>
                </div>
                <div class="shutdown-item">
                  <span class="cypher">{{ timeLeft.hours }}</span>
                  <span class="label">Години</span>
                </div>
                <div class="shutdown-item">
                  <span class="cypher">{{ timeLeft.minutes }}</span>
                  <span class="label">Хвилини</span>
                </div>
                <div class="shutdown-item">
                  <span class="cypher">{{ timeLeft.seconds }}</span>
                  <span class="label">Секунди</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 flex-wrap d-flex justify-center align-content-center">
            <div class="element">
              <div class="join" v-on:click="redirect">
                Придбати квиток
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {createRouter as $router} from "vue-router";

export default {
  name: "InfoComponent",
  data() {
    return {
      targetDate: new Date("2025-04-26T09:00:00").getTime(),
      timeLeft: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  methods: {
    redirect() {
      window.location.href = "https://forms.gle/UZyqjXoskw5AMNiG6?fbclid=IwY2xjawJdWvZleHRuA2FlbQIxMAABHt5j6SUp6qON-0o4j117pdr6hE1kwxCw9etgGrsRx2Q518sF396lP_xOUtp8_aem_PwUHdy-mAzAh8ECbu6Wxag";
    },
    updateTime() {
      const now = new Date().getTime();
      const difference = this.targetDate - now;

      if (difference > 0) {
        this.timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.timeLeft.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.timeLeft.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        this.timeLeft.seconds = Math.floor((difference % (1000 * 60)) / 1000);
      } else {
        this.timeLeft = {days: 0, hours: 0, minutes: 0, seconds: 0};
        clearInterval(this.timerInterval);
      }
    },
  },
  mounted() {
    this.updateTime();
    this.timerInterval = setInterval(this.updateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timerInterval);
  },
};
</script>

<style scoped>
.container-fluid {
  height: 100%;
  position: relative;
}

.edugame-title {
  display: flex;
}

.bg-container {
  background-image: url('../components/icons/bg1.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.shutdown-timer {
  padding: 10rem;
  position: relative;
  z-index: 10;
  color: white;
}

.date h2 {
  font-size: 30px;
  font-weight: 700 !important;
  font-family: var(--ma);
  color: #001A58;
}

.edu-game {
  font-family: var(--jaro);
  font-size: 70px;
  font-weight: 400;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.info-games-in-knowledge {
  font-size: 70px;
  font-weight: 400;
  font-family: var(--m);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.text {
  font-family: var(--ma);
  font-weight: 400;
  font-size: 35px;
}

.shutdown-item {
  display: inline-grid;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.wait h1 {
  font-size: 30px;
  font-weight: 700;
  font-family: var(--m);
  line-height: 140%;
}

.cypher {
  font-size: 80px;
  font-family: var(--ma);
  font-weight: 700;
  width: 5rem;
}

.label {
  font-size: 20px;
  font-weight: 700;
  font-family: var(--ma);
}

.timer {
  margin-top: 4rem;
}

.join {
  margin-top: 3rem;
  cursor: pointer;
  background-color: #001A58;
  color: white;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-size: 25px;
  font-family: var(--ma);
  font-weight: 600;
  border: transparent 1px solid;

}
.join:hover{
  border: red 1px solid;
}

@media (max-width: 768px) {
  .shutdown-timer {
    padding: 5rem;
  }

  .edu-game, .info-games-in-knowledge {
    font-size: 50px;
  }

  .text {
    font-size: 25px;
  }

  .shutdown-item {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .cypher {
    font-size: 60px;
  }

  .label {
    font-size: 18px;
  }

  .timer {
    margin-top: 2rem;
  }

  .join {
    margin-top: 3rem;
    padding: 1rem 2rem;
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .edugame-title {
    display: block;
  }

  .edu-game, .info-games-in-knowledge {
    font-size: 40px;
  }

  .text {
    font-size: 20px;
  }

  .shutdown-item {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .cypher {
    font-size: 50px;
  }

  .label {
    font-size: 16px;
  }

  .join {
    margin-top: 3rem;
    padding: 0.8rem 1.8rem;
    font-size: 18px;
  }
}
</style>
