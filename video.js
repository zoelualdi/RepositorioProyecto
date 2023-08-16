let video=document.querySelector('video');
console.dir(video)

const play=(event)=>{
    video.play();
    console.dir(video)
    document.querySelector('.duracion').textContent=video.duration.toFixed(2);
}

setTimeout(()=>{    
    document.querySelector('.duracion').textContent=video.duration.toFixed(2)
},1000)


const verDuracion=()=>{
    let duracion=video.duration
 console.log(duracion)
 if(duracion >= 60){
   let minutos= parseInt(duracion/ 60 )
   console.log(minutos);
   let segundos =parseInt((duracion - minutos*60))
    console.log(segundos)

    document.querySelector('.duracion').textContent=minutos + ":" + segundos;

 }
}
const pause=(event)=>{
    video.pause();
}