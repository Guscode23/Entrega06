/* Realizo la conexión con el Json */

document.querySelector('#linkJson').addEventListener('click',traerdatos())


//Función para traer datos del archivo JSON//

function traerdatos(){

    //console.log("dentro de la funcion")

    const xhttp=new XMLHttpRequest();

    xhttp.open('GET','clientes.json',true);

    xhttp.send();

    xhttp.onreadystatechange=function(){

        if(this.readyState==4 && this.status==200){

            //console.log(this.responseText);
            let datos=JSON.parse(this.responseText);
            let res=document.querySelector('#res');
            res.innerHTML='';

           for(let item of datos){
            //console.log(item.nombre);
            res.innerHTML+=`
            <tr>
              <td>${item.nombre}</td>
              <td>${item.Apellido}</td>
              <td>${item.Tipo}</td>
              <td>${item.Estado}</td>
              </tr> 
              `
          }
        }
    }
}


//Funcion para mostrar u ocultar menu//

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("form")
    menuVisible = false;
}

function show(){
    alert("Datos enviados.¡Se ha dado de alta correctamente el usuario!");
}




