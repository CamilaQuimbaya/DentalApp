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


export default {
  texto:'Prueba',
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
            resolve(import("./views/Home.vue"));
          }, 3500);
        })
    )
  }
};
</script>

<style scoped>

</style>