<template>
  <div class="container container3 text-center">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="card1">
          <span class="spant">
            <h3>Ingreso Pacientes</h3>
          </span>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="card2">
          <span class="spant">
            <h3>Ingreso Médicos</h3>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data (){
    return {}
  },
};
</script>

<style>
h3 {
  color: aliceblue;
  font-weight: bold;
}
.container3 {
  margin-top: 6%;
  padding-bottom: 5%;
}
.card1 {
  border-radius: 80px;
  width: 100%;
  height: 400px;
  background: rgb(46, 44, 44);
  transition: all 300ms;
  background-image: url("https://i.pinimg.com/564x/54/01/56/540156f2629b701f3142cebc3be80bf8.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
}

.card2 {
  border-radius: 80px;
  width: 100%;
  height: 400px;
  background: rgb(46, 44, 44);
  transition: all 300ms;
  background-image: url("https://i.pinimg.com/564x/da/dd/47/dadd47f88c7f5a9d02ac0356e1b501b7.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
}
.card1:hover {
  transform: scale(1.1);
}
.card2:hover {
  transform: scale(1.1);
}
.spant {
  background: rgba(0, 164, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(0, 164, 255, 0.49);
  padding: 5%;
}
</style>