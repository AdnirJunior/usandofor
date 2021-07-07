function contar(){

let inicio = document.getElementById("msg_inicio").value;
let fim = document.getElementById("msg_fim").value;
let passo = document.getElementById("msg_passo").value;
let resultado = document.getElementById("contagem");

let inicion = Number(inicio);
let fimn = Number(fim);
let passon = Number(passo);
if(fimn == 0){
    fimn = 1
}

if(inicion.length == 0 || fimn.length == 0 || passon.length == 0){
    alert("[ERRO] Faltam dados!")
} else{
    resultado.innerHTML = `Contando: `
    if (inicion < fimn){
        for (let i= inicion; i <= fimn; i+=passon){
            resultado.innerHTML += `${i} \u{1F449}`
        }
    
    } else {
        for(let c = inicion; c>=fimn; c-=passon){
            resultado.innerHTML += `${c} \u{1f449}`
        }
        resultado.innerHTML += `\u{1F31F}`
    }
}
}