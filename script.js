
var inadults = document.getElementById("adult")
var inchild = document.getElementById("child")
var induration = document.getElementById("duration")
var result = document.getElementById("result")




function calculo(){
  let adults = inadults.value
  let childs =  inchild.value
  var durations=  induration.value


 let carne = carnepp(durations) * adults + carnepp(durations) * childs / 2
  let cerveja = cervejapp(durations) * adults
  let bebidas = bebidaspp(durations) * adults + bebidaspp(durations) * childs / 2
  

  result.innerHTML = `<p>Serão necessários ${carne / 1000} Kg de carne</p>`
   result.innerHTML += `<p>Serão necessários ${cerveja / 1000} L de cerveja</p>`
  result.innerHTML += `<p>Serão necessários ${bebidas / 1000} L de bebidas</p>`

}
function carnepp(durations){
  if(durations <= 6){
    return 500
  } else{
    return 650
  }

}
function cervejapp (durations){
  if(durations <= 6){
    return 1200
  } else{
    return 2000
  }
}
function bebidaspp (durations){
  if( durations <= 6){
    return 1000
  } else{
    return 1500
  }
}
