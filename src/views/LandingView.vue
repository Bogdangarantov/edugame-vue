<template>
  <nav-bar-component/>
  <info-component/>
  <about-info-component/>
  <divider1/>
  <divider2/>
  <image-carousel :images="slider1" :direction="'left'" :id="'photos-1'"/>
  <partners/>
  <divider-image/>
  <divider3/>
  <image-carousel :images="slider2" :direction="'right'" :id="'photos-2'"/>
  <contacts/>
  <copyright/>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import InfoComponent from "@/components/InfoComponent.vue";
import AboutInfoComponent from "@/components/AboutInfoComponent.vue";
import Divider1 from "@/components/Divider1.vue";
import Divider2 from "@/components/Divider2.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import Partners from "@/components/Partners.vue";
import DividerImage from "@/components/Divider Image.vue";
import Divider3 from "@/components/Divider3.vue";
import Contacts from "@/components/Contacts.vue";
import Copyright from "@/components/Copyright.vue";

export default {
  name: "LandingView",
  components: {
    Copyright,
    Contacts,
    Divider3,
    DividerImage,
    Partners, ImageCarousel, Divider2, Divider1, AboutInfoComponent, InfoComponent, NavBarComponent
  },
  data(){
    return{
      slider1 : [
        {
          id: 1,
          url: new URL('../../src/components/icons/photo1.png', import.meta.url).href
        },
        {
          id: 2,
          url: new URL('../../src/components/icons/photo2.png', import.meta.url).href
        },
        {
          id: 3,
          url: new URL('../../src/components/icons/photo3.png', import.meta.url).href
        },
        {
          id: 4,
          url: new URL('../../src/components/icons/photo4.png', import.meta.url).href
        },
        {
          id: 5,
          url: new URL('../../src/components/icons/photo5.png', import.meta.url).href
        },
        {
          id: 6,
          url: new URL('../../src/components/icons/photo6.png', import.meta.url).href
        },
      ],
      slider2:[
        {
          id: 1,
          url: new URL('../../src/components/icons/slider2_1.png', import.meta.url).href
        },
        {
          id: 2,
          url: new URL('../../src/components/icons/slider2_2.png', import.meta.url).href
        },
        {
          id: 3,
          url: new URL('../../src/components/icons/slider2_3.png', import.meta.url).href
        },
        {
          id: 4,
          url: new URL('../../src/components/icons/slider2_4.png', import.meta.url).href
        },
        {
          id: 5,
          url: new URL('../../src/components/icons/slider2_5.png', import.meta.url).href
        },
        {
          id: 6,
          url: new URL('../../src/components/icons/slider2_6.png', import.meta.url).href
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>