import{_ as a,o as i,b as r,d as e,c as d}from"./index.98f8c520.js";const m="/assets/dentist.7cb82040.png",f={data(){return{titulo:"Pacientes",paciente:"",correo:"",clave:"",name:"",dir:"",tel:"",centro:"",email:"",pass:"",mensaje:"hola loquita"}},methods:{creaPaciente(){this.name=document.getElementById("nombre").value,this.doc=document.getElementById("documento").value,this.tel=document.getElementById("telefono").value,this.dir=document.getElementById("direccion").value,this.centro=document.getElementById("centroMedico").value,this.email=document.getElementById("correo").value,this.pass=document.getElementById("clave").value;const s={method:"POST",headers:{"Content-Type":"Application/json","Cache-Control":"no-cache",Authorization:""},body:JSON.stringify({id:this.doc,nombre:this.name,documento:this.doc,telefono:this.tel,direccion:this.dir,centroMedico:this.centro,correo:this.email,clave:this.pass})};this.doc.length===0||this.name.length===0||this.tel.length===0||this.dir.length===0||this.centro.length===0||this.email.length===0||this.pass===0?alert("Llene todos los campos"):fetch("http://150.136.92.127:8080/dentalapp/api/pacientes",s).then(async o=>{if(o.ok)this.paciente=await o.json(),console.log(this.paciente),window.location.href="/",alert("Usuario Creado correctamente");else{const t=new Error(o.statusText);throw t.json=o.json(),console.log(t.message),t}})}}},h={class:"container contenedor2"},u={class:"h-100 bg-light"},p={class:"container cont"},b={class:"row d-flex justify-content-center align-items-center h-100"},v={class:"col"},g={class:"card card-registration my-2 bg-light"},_={class:"row g-0"},y=e("div",{class:"col-xl-6 d-none d-xl-block"},[e("img",{src:m,class:"rounded img-fluid",alt:"",style:{"border-top-left-radius":".25rem","border-bottom-left-radius":".25rem"}})],-1),x={class:"col-xl-6"},E={class:"card-body p-md-5 text-muted"},w=d('<h3 class="mb-2 text-uppercase">ingresa tus datos</h3><div class="row"><div class="mb-1"><div class="form-outline"><input type="text" id="nombre" class="form-control form-control-lg"><label class="form-label" for="form3Example1m">Nombre Completo</label></div></div></div><div class="form-outline mb-1"><input type="text" id="documento" class="form-control form-control-lg"><label class="form-label" for="form3Example8">N\xFAmero de Documento</label></div><div class="form-outline mb-1"><input type="text" id="telefono" class="form-control form-control-lg"><label class="form-label" for="form3Example9">Telefono</label></div><div class="form-outline mb-1"><input type="text" id="direccion" class="form-control form-control-lg"><label class="form-label" for="form3Example90">Direcci\xF3n</label></div><div class="form-outline mb-1"><input type="text" id="centroMedico" class="form-control form-control-lg"><label class="form-label" for="form3Example99">Centro Medico</label></div><div class="form-outline mb-1"><input type="email" id="correo" class="form-control form-control-lg"><label class="form-label" for="form3Example99">Correo Electronico</label></div><div class="form-outline mb-2"><input type="password" id="clave" class="form-control form-control-lg"><label class="form-label" for="form3Example97">Contrase\xF1a</label></div>',8),B={class:"d-flex justify-content-end pt-3"};function C(s,l,o,t,j,c){return i(),r("div",h,[e("section",u,[e("div",p,[e("div",b,[e("div",v,[e("div",g,[e("div",_,[y,e("div",x,[e("div",E,[w,e("div",B,[e("button",{type:"button",onClick:l[0]||(l[0]=(...n)=>c.creaPaciente&&c.creaPaciente(...n)),class:"btn btn-warning btn-lg ms-2"},"Crear Usuario")])])])])])])])])])])}const k=a(f,[["render",C]]);export{k as default};
