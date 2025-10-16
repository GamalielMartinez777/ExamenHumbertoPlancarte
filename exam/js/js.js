let btn = document.getElementById("btn");
let btnS = document.getElementById("btnS");

btn.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let correo = document.getElementById("correo").value;
    let age = document.getElementById("age").value;
    let country = document.getElementById("country").value;

    if(name.trim() === ''){
        document.getElementById("nWrong").innerHTML = "Falta el nombre";
    }else{
        document.getElementById("nWrong").innerHTML = "";
    }
    if(correo.trim() === ''){
        document.getElementById("eWrong").innerHTML = "Falta el correo";
    }else{
        document.getElementById("eWrong").innerHTML = "";
    }

    if(age.trim() === ''){
        document.getElementById("aWrong").innerHTML = "Falta la edad";
    }else{
        document.getElementById("aWrong").innerHTML = "";
    }

    if(country.trim() === ''){
        document.getElementById("pWrong").innerHTML = "Falta el pais";
    }else{
        document.getElementById("pWrong").innerHTML = "";
    }
    localStorage.setItem("Name", name);
});

btnS.addEventListener("click", () => {
    document.getElementById("saludo").innerHTML = "Nombre: " + localStorage.getItem("Name");
});