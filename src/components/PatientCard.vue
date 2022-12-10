<template>
    <div class="container conti">
        <button @click="consultarAgendas" class="btn btn-1">{{ texto }}</button>
        <div class="card" v-for="cita in citas">
            <div class="card-info">
                <div class="card-avatar"></div>
                <div class="card-title" v-for="medico in medicos">
                    <div v-if="medico.id == cita.medicoId">Medico:{{ medico.nombre }}</div>
                </div>
                <div class="card-subtitle">Documento: {{ cita.documentoPaciente }}</div>
                <div class="card-text">Fecha: {{ cita.fecha }} Hora: {{ cita.hora }}</div>
            </div>
        </div>
    </div>

    <div class="container cont">
        <div class="form-outline mb-1">
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <button @click="crearCita" class="btn btn-1"> Asignar cita </button>
            </div>

            <div class="form-outline mb-1">
                <input v-model="fecha" type="date" id="fecha" class="form-control form-control-lg" />
                <label class="form-label" for="form2Example17">Fecha</label>
            </div>

            <div class="form-outline mb-1">
                <input v-model="hora" class="form-control form-control-lg" type="time" name="time" id="hora" min="00:00"
                    max="23:59" required />
                <label class="form-label" for="form2Example17">Hora</label>
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Medico</label>
                </div>
                <select v-model="medicoSeleccionado" class="custom-select" id="inputGroupSelect01">                    
                    <option v-for="medico in medicos" :value="medico">{{ medico.nombre }}</option>
                </select>
            </div>

            <div class="form-outline mb-4">
                <input v-model="documento" type="number" id="doc" class="form-control form-control-lg" />
                <label class="form-label" for="form2Example17">Documento</label>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ['msg'],
    data() {
        return {
            url: 'http://150.136.92.127:8080/dentalapp/api/medicos',
            citas: [],
            medicos: [],
            medico:'',
            token: '',
            texto: 'Ver citas disponibles',
            medicoSeleccionado:[],
            fecha:'',
            hora:'',
            documento:'',
            agenda:''
        }
    },
    methods: {
        consultarMedicos() {
            const opciones = {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                    //'Authorization': "Bearer " + this.token
                }
            };
            const url = 'http://150.136.92.127:8080/dentalapp/api/medicos';
            fetch(url, opciones).then(async (response) => {
                if (response.ok) {
                    this.medicos = await response.json();
                    console.log(this.medicos);
                } else {
                    const error = new Error(response.statusText);
                    error.json = response.json();
                    console.log(error.message);
                    throw error
                }
            })
        },
        consultarAgendas() {
            this.solicitarToken()
            const opciones = {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "Bearer " + this.token
                }
            };
            const url = 'http://150.136.92.127:8080/dentalapp/api/agendas/nombre/paciente/Laura Camila Quimbaya';
            fetch(url, opciones).then(async (response) => {
                if (response.ok) {
                    this.citas = await response.json();
                    console.log(this.citas);
                    this.texto = 'Sus citas asignadas son'
                } else {
                    const error = new Error(response.statusText);
                    error.json = response.json();
                    console.log(error.message);
                    throw error
                }
            })
            this.consultarMedicos()
        },
        solicitarToken() {
            const opciones = {
                method: 'POST',
                headers: {
                    'Content-Type': "Application/json",
                    'Authorization': ''
                },
                body: JSON.stringify({
                    correo: 'correo3@correo.com',
                    clave: '12345'
                })
            };
            const urlToken = "http://150.136.92.127:8080/dentalapp/api/pacientes/token"
            //const urlToken ='http://localhost:9011/api/pacientes/token'
            fetch(urlToken, opciones).then(async (response) => {
                if (response.ok) {
                    const respuesta = await response.json()
                    this.token = respuesta.token
                    console.log(this.token)
                } else {
                    const error = new Error(response.statusText);
                    error.json = response.json()
                    console.log(error.message)
                    throw error
                }
            })
        },
        crearCita(){
            const opciones = {
                method: 'POST',
                headers: {
                    'Content-Type': "Application/json",
                    //'Authorization': "Bearer " + this.token
                },
                body: JSON.stringify({
                    id:this.citas.length+10,
                    fecha: this.fecha,
                    hora: this.hora,
                    medicoId: this.medicoSeleccionado.id,
                    documentoPaciente: this.documento
                })
            };
            console.log(opciones.body)
            const urlcita = "http://150.136.92.127:8080/dentalapp/api/agendas"
            //const urlToken ='http://localhost:9011/api/pacientes/token'
            fetch(urlcita, opciones).then(async (response) => {
                if (response.ok) {
                    this.agenda = await response.json();
                    console.log(this.agenda)
                } else {
                    const error = new Error(response.statusText);
                    error.json = response.json()
                    console.log(error.message)
                    throw error
                }
            })
        }
    },
    beforeMount() {
        this.solicitarToken()
    }
};
</script>

<style>
.conti {
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    margin-top: 5%;
    margin-bottom: 5%;
    margin-right: 2%;
    width: 220px;
    height: flex;
    background: #ffffff;
    padding: 2rem 1.5rem;
    transition: box-shadow .3s ease, transform .2s ease;
}

.card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform .2s ease, opacity .2s ease;
}

/*Image*/
.card-avatar {
    --size: 60px;
    background: linear-gradient(to top, #d2c1f1 0%, #97d7fc 100%);
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    transition: transform .2s ease;
    margin-bottom: 1rem;
}

/*Card footer*/
.card-social {
    transform: translateY(200%);
    display: flex;
    justify-content: space-around;
    width: 100%;
    opacity: 0;
    transition: transform .2s ease, opacity .2s ease;
}

.card-social__item {
    list-style: none;
}

.card-social__item svg {
    display: block;
    height: 18px;
    width: 18px;
    fill: #515F65;
    cursor: pointer;
    transition: fill 0.2s ease, transform 0.2s ease;
}

/*Text*/
.card-title {
    color: #333;
    font-size: 1em;
    font-weight: 600;
    line-height: 2rem;
}

.card-subtitle {
    color: #859ba8;
    font-size: 1.1em;
}

/*Hover*/
.card:hover {
    box-shadow: 0 8px 50px #23232333;
}

.card:hover .card-info {
    transform: translateY(-5%);
}

.card:hover .card-social {
    transform: translateY(100%);
    opacity: 1;
}

.card-social__item svg:hover {
    fill: #232323;
    transform: scale(1.1);
}

.card-avatar:hover {
    transform: scale(1.1);
}

.btn {
    text-decoration: none;
    padding: 20px 40px;
    font-size: 1em;
    position: relative;
    margin: 32px;
    border: none;
    background-color: #26caf8;
    font-weight: 600;
}

.btn-1 {
    overflow: hidden;
    color: #fff;
    border-radius: 30px;
    box-shadow: 0 0 0 0 rgba(143, 64, 248, 0.5), 0 0 0 0 rgba(39, 200, 255, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-1::after {
    content: "";
    width: 400px;
    height: 400px;
    position: absolute;
    top: -50px;
    left: -100px;
    background-color: #ff3cac;
    background-image: linear-gradient(225deg, #27d86c 0%, #26caf8 50%, #c625d0 100%);
    z-index: -1;
    transition: transform 0.5s ease;
}

.btn-1:hover {
    transform: translate(0, -6px);
    box-shadow: 10px -10px 25px 0 rgba(143, 64, 248, 0.5), -10px 10px 25px 0 rgba(39, 200, 255, 0.5);
}

.btn-1:hover::after {
    transform: rotate(150deg);
}
</style>