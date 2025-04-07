<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid d-flex justify-content-between">
      <a class="navbar-brand" href="#">
        <school-icon-small/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-right" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="#about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="#partners">Partners</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" href="#photos" to="#photos-1">Photos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" href="#contacts" to="#contacts">Contacts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import SchoolIconSmall from "@/components/icons/SchoolIconSmall.vue";

export default {
  name: "NavBarComponent",
  components: {SchoolIconSmall},
}
</script>
<style>
.navbar-brand{
  margin-left:10rem
}
.justify-content-right{
  justify-content: right;
  padding-right: 15rem;
}
.nav-item a {
  font-family: var(--ma);
  font-size: 25px;
  font-weight: 400;

}
.nav-item a:hover{
  color: red !important;
}
.nav-item:hover{
  color: red!important;
}
@media (max-width: 480px) {
  .additional-div{
    display: none;
  }
}
</style>