///////////////////////////////////////// Caché ///////////////////////////////////////////////////
//Almacenar informacion para que no se solicite muchas veces.
//Es almacenar los datos de la pagina en el navegador del usuario para que no carge todo el tiempo como si fuera la primera vez.
                                                           /*
"use strict";

caches.open("archivos-estaticos").then(cache => {
    cache.add("index.html");   //chache.add() agrega un recurso a la base de datos.
}) 

caches.open("archivos-estaticos-2").then(cache => {
    cache.addAll(["style.css","code.js"]);   //chache.addAll() agrega varios recursos a la base de datos, y usa un array como parametro.

    cache.match("style.css").then(res =>{ //Devuelve la resolucion de una promesa para poder trabajarla.
        console.log(res);
    })

    cache.matchAll("style.css").then(res =>{ //Devuelve un array de resoluciones que coincidan (que sean del mismo tipo) para poder trabajarlos.
        console.log(res);
    })
})

caches.open("archivos-estaticos-3").then(cache => {
    fetch("index.html").then(res => {   //Es como al cache.add() pero se usa para otras cosas, como por ej modificarlo
        cache.put("index.html",res);
    })
    cache.delete("index.html");  //Elimina el recurso.
    
    cache.keys().then(res => {  //Nos devuelve toda la informacion del caché.
        console.log(res);  
    })
})
                                                              */
                                                        
//////////////////////////////////////////// SERVICE WORKERS ////////////////////////////////////////////
//Son literalmente archivos js.
//Intercepta todas las peticiones del navegador y todas las respuestas del servidor web.
//El servidor le envia la peticion al servide worker y el sw al servidor web, y las respuesta se la da al sw y el se la pasa al navegador.

//El service worker tmb sirve para ejecutar muchas funciones.
//Cuenta con un monton de addEventListener que podemos usar.







