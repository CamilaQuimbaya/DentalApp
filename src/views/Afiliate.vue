<template>
    <div class="container contenedor2">
        <section class="h-100 bg-light">
            <div class="container cont">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col">
                        <div class="card card-registration my-2 bg-light">
                            <div class="row g-0">
                                <div class="col-xl-6 d-none d-xl-block">
                                    <img src="../assets/dentist.png" class="rounded img-fluid" alt=""
                                        style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                                </div>
                                <div class="col-xl-6">
                                    <div class="card-body p-md-5 text-muted">
                                        <h3 class="mb-2 text-uppercase">ingresa tus datos</h3>

                                        <div class="row">
                                            <div class="mb-1">
                                                <div class="form-outline">
                                                    <input type="text" id="nombre"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example1m">Nombre
                                                        Completo</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-outline mb-1">
                                            <input type="text" id="documento"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example8">Número de Documento</label>
                                        </div>

                                        <div class="form-outline mb-1">
                                            <input type="text" id="telefono"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example9">Telefono</label>
                                        </div>

                                        <div class="form-outline mb-1">
                                            <input type="text" id="direccion"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example90">Dirección</label>
                                        </div>

                                        <div class="form-outline mb-1">
                                            <input type="text" id="centroMedico"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example99">Centro Medico</label>
                                        </div>

                                        <div class="form-outline mb-1">
                                            <input type="email" id="correo"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example99">Correo Electronico</label>
                                        </div>

                                        <div class="form-outline mb-2">
                                            <input type="password" id="clave"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example97">Contraseña</label>
                                        </div>

                                        <div class="d-flex justify-content-end pt-3">
                                            <button type="button" @click="creaPaciente"
                                                class="btn btn-warning btn-lg ms-2">Crear Usuario</button>
                                        </div>

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
            paciente: "",
            correo: "",
            clave: "",
            name: "",
            dir: "",
            tel: "",
            centro: "",
            email: "",
            pass: "",
            mensaje: "hola loquita"
        }
    },
    methods: {
        creaPaciente() {
            this.name=document.getElementById('nombre').value
            this.doc=document.getElementById('documento').value
            this.tel=document.getElementById('telefono').value
            this.dir=document.getElementById('direccion').value
            this.centro=document.getElementById('centroMedico').value
            this.email=document.getElementById('correo').value
            this.pass=document.getElementById('clave').value

            const opciones = {
                method: 'POST',
                headers: {
                    'Content-Type': "Application/json",
                    'Cache-Control': 'no-cache',
                    'Authorization': ""
                },
                body: JSON.stringify({
                    id:this.doc,
                    nombre:this.name,
                    documento:this.doc,
                    telefono:this.tel,
                    direccion:this.dir,
                    centroMedico:this.centro,
                    correo: this.email,
                    clave: this.pass    
                })
            };
            if(this.doc.length===0 || this.name.length===0|| this.tel.length===0 || 
            this.dir.length===0 || this.centro.length===0 || this.email.length===0
            || this.pass===0){
                alert('Llene todos los campos')
            }else{
                const url2='http://150.136.92.127:8080/dentalapp/api/pacientes'
                fetch(url2, opciones).then(async (response) => {
                    if (response.ok) {
                        this.paciente = await response.json()
                        console.log(this.paciente)
                        window.location.href = "/";
                        alert('Usuario Creado correctamente')
                    } else {
                        const error = new Error(response.statusText);
                        error.json = response.json()
                        console.log(error.message)
                        throw error
                    }
                })
            }            
        }
    }
};
</script>
  
<style>

</style>