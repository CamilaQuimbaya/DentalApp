<template>
<div class="container cont">
   <h3 class="tittle">Nuestros Médicos</h3>
  <div>
  </div>
</div>
<DentistCard />
</template>

<script>
 import DentistCard from '../components/DentistCard.vue'

export default {
  data (){
    return {mensaje:"hola loquita"}
  },
  components: {
    DentistCard,
  },
};
</script>

<style>
.tittle{
  color: #696969;
}
.cont{
  margin-top: 5%;
}
</style>