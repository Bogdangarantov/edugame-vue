<template>
  <section class="foot container-fluid" id="footer">
    <p>© 2025. Developed by <strong>from2</strong></p>
  </section>
</template>

<script>
export default {
  name: "Copyright"
}
</script>

<style scoped>
.foot {
  background-color: white;
  text-align: center;
  padding: 1rem;
  font-family: var(--m);
  color: #333;
}

.foot p {
  margin: 0;
  font-size: 16px;
}

.foot strong {
  font-weight: 600;
}

/* Адаптивні стилі */
@media (max-width: 768px) {
  .foot p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .foot p {
    font-size: 12px;
  }
}
</style>
