<template>
  <div>
    <section class="vh-100" style="background-color: cornflowerblue;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border-radius: 1rem;">
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="../assets/paciente.png" alt="Responsive image" class="img-fluid" />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">

                    <form>

                      <div class="d-flex align-items-center mb-3 pb-1">
                        <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                        <span class="h1 fw-bold mb-0">
                          <img src="../assets/logoPsi-2.png" alt="" class="img-fluid" />
                        </span>
                      </div>

                      <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Inicia sesion en tu cuenta</h5>

                      <div class="form-outline mb-4">
                        <input v-model="correo" type="email" id="form2Example17" class="form-control form-control-lg" />
                        <label class="form-label" for="form2Example17">Correo electronico</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input v-model="clave" type="password" id="form2Example27"
                          class="form-control form-control-lg" />
                        <label class="form-label" for="form2Example27">Contraseña</label>
                      </div>

                      <div class="pt-1 mb-4">
                        <button @click="consultarPaciente" class="btn btn-dark btn-lg btn-block"
                          type="button">Ingresar</button>
                      </div>

                      <a class="small text-muted" href="#!">Forgot password?</a>
                      <p class="mb-5 pb-lg-2" style="color: #393f81;">No tengo cuenta? <a href="#!"
                          style="color: #393f81;">Afiliate aqui</a></p>
                      <a href="#!" class="small text-muted">Terminos y condiciones.</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      titulo: 'Pacientes',
      url: 'http://150.136.92.127:8080/dentalapp/api/pacientes/correo',
      paciente: "",
      correo: "",
      clave: "",
      paciente2: "",
      mensaje: "hola loquita",
      token:''
    }
  },
  methods: {
    consultarPaciente() {
      console.log(this.token)
      const opciones = {
        method: 'GET',
        headers: {
          'Content-Type': "Application/json",
          'Authorization':"Bearer "+this.token
        }
      };
      const url2 = 'http://150.136.92.127:8080/dentalapp/api/pacientes/clave/' + this.correo + '/' + this.clave
      fetch(url2, opciones).then(async (response) => {
        if (response.ok) {
          this.paciente = await response.json()
          console.log(this.paciente)
          if (this.paciente == null) {
            alert("Correo no encontrado")
          } else {
            if (this.paciente.clave == this.clave) {
              console.log(this.paciente)
              alert(this.paciente.nombre)
            } else {
              alert("Clave Incorrecta")
            }
          }
        } else {
          const error = new Error(response.statusText)
          error.json = response.json()
          console.log(error.message)
          alert("Correo o contraseña incorrectos")
        }
      })
    },
    solicitarToken() {
      const opciones = {
        method: 'POST',
        headers: {
          'Content-Type': "Application/json",
          'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({
          id:3,
          nombre:'Luz Yaneth Gomez',
          documento:'1012388310',
          telefono:'3118544184',
          direccion:'Cra 78 #  00-00',
          centroMedico:'Bogota',
          correo: 'correo3@correo.com',
          clave: '12345'
        })
      };
      const urlToken = "http://150.136.92.127:8080/dentalapp/api/pacientes/token"
      fetch(urlToken, opciones).then(async (response) => {
        if (response.ok) {
          this.token = await response.json()
          console.log(this.token)
        } else {
          const error = new Error(response.statusText);
          error.json = response.json()
          console.log(error.message)
          throw error
        }
      })
    }
  },
  beforeMount(){
      this.solicitarToken()
    }
};
</script>

<style>

</style>