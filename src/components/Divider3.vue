<template>
  <div class="container-fluid main">
    <div class="text">
      <div class="text-wrapper">
        <h1 class="fw-medium text2">
          <strong>«EduGame. Ігри в освіті»</strong> - це не просто конференція. <br>
          Це простір, де гра стає мовою навчання, розвитку, підтримки та <br>
          натхнення.
        </h1>
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
  padding-left: 10rem;
}

.text {
  color: white;
  align-items: center;
}

.text-wrapper {
  max-width: 100%;
}

.text2 {
  font-family: var(--m);
  font-weight: 400;
  font-size: 30px;
  line-height: 140%;
  text-transform: uppercase;
  text-align: left;
}

@media (max-width: 768px) {
  .main {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .text2 {
    font-size: 24px;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .text2 {
    font-size: 20px;
    text-align: left;
  }
}
</style>