const reload=
document.getElementById("reiniciar");
reload.addEventListener("click",()=>{
    location.reload();
});





let arreglo=["","",""];

function allowDrop(evento){
    evento.preventDefault();
}

function drag(evento){
    evento.dataTransfer.setData("text", evento.target.id);
}

function drop(evento){
    if(arreglo[parseInt(evento.target.id)]==""){
        var data=evento.dataTransfer.getData("text");
        arreglo[parseInt(evento.target.id)]=data;
        evento.target.appendChild(document.getElementById(data));
    }
}