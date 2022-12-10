<template>
    <div class="container cont">
        <h3 class="tittle">Selecciona la opción</h3>
        <div>
        </div>
    </div>
    <PatientCard />
</template>
    
<script>
import PatientCard from '../components/PatientCard.vue'

export default {
    props: [],
    data: function () {
        return {
            mensaje: "hola loquita",
            msg: ''
        }
    },
    components: {
        PatientCard,
    }
};
</script>
    
<style>
.tittle {
    color: #696969;
}

.cont {
    margin-top: 5%;
}
</style>