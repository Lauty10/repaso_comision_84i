const emailLogin=document.getElementById("emailLogin");
const PassLogin=document.getElementById("PassLogin");
const errSix=document.getElementById("errSix");
const errSeven=document.getElementById("errSeven");
const buttonLogin=document.getElementById("buttonLogin");
const errOcho=document.getElementById("errOcho")
const errNuv=document.getElementById("errNuv")

errSix.classList.add("d-none");
errSeven.classList.add("d-none");
errOcho.classList.add("d-none")
errNuv.classList.add("d-none")

const ValidDate={
   emailInput:"",
   passInput:""
}

const ValidEmail=(ev)=>{
const {name,value}=ev.target
ValidDate[name]=value
const{emailInput}=ValidDate
if (emailInput==="") {
    errSix.classList.remove("d-none")
}else{
    errSix.classList.add("d-none")
}

if (emailLogin.value==="") {
    emailLogin.classList.add("input-error")
}else{
    emailLogin.classList.remove("input-error")
}
}

const ValidPass=(ev)=>{ 
const {name,value}=ev.target
ValidDate[name]=value
const{passInput}=ValidDate
if (passInput==="") {
    errSeven.classList.remove("d-none")
}else{
    errSeven.classList.add("d-none")
}

if (PassLogin.value==="") {
    PassLogin.classList.add("input-error")
}else{
    PassLogin.classList.remove("input-error")
}
 }
    
const ValidButtonLogin=()=>{
const {emailInput,passInput}=ValidDate
const datosUser=JSON.parse(localStorage.getItem('user'));
const FilterEmail=datosUser.filter((emailLs)=>emailLs.correo===emailInput)||[];
const FilterPass=FilterEmail.find((emailLs)=>emailLs.contrasenia===passInput)||[];

if (FilterEmail.length>0) {
    errNuv.classList.add("d-none")
 if (FilterPass.contrasenia!==passInput) {
    errOcho.classList.remove("d-none")
    PassLogin.value=""  
}else{
    errOcho.classList.add("d-none")
    Swal.fire({
        icon: 'success',
        title: 'Genial...',
        text: 'Iniciado Sesion',
      })
      PassLogin.value=""
      emailLogin.value=""

      if (FilterPass.role==="admin") {
        setInterval(()=>{
            location.href="../html/Pag-admin.html"
        },2000)
      }else{
        setInterval(()=>{
            location.href="../html/Pag-Principal-Login.html"
        },2000)
      }
}


}else{
    errNuv.classList.remove("d-none")
    emailLogin.value=""
}
}

emailLogin.addEventListener('input',ValidEmail);
PassLogin.addEventListener('input',ValidPass);
buttonLogin.addEventListener('click',ValidButtonLogin)


