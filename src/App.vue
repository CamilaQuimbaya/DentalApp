<template>
   <Suspense>
    <template #default>
      <HomeView />
    </template>
    <template #fallback>
      <IntroVue />
    </template>
  </Suspense>
</template>

<script>
import IntroVue from './views/Intro.vue';
import { defineAsyncComponent } from "vue";
import dentist from "./views/Home.vue"

export default {
  data (){
    return {
      mensaje: 'hola mundo',
    }
  },
  components:{
    IntroVue,
    HomeView: defineAsyncComponent(
      () =>
        new Promise((resolve,reject) => {
          setTimeout(() => {
            resolve(dentist);
          }, 3500);
        })
    )
  }
};
</script>

<style scoped>

</style>