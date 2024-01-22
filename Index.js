let nomeHeroi = "Batman"
let experiencia = 1007;
let nivel = ""


if(experiencia <=1000){
    nivel = "Ferro"
    console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel} com a experiência em ${experiencia}  pontos`)
}
else if(experiencia >1000 && experiencia <=2000){
    nivel = "Bronze"
    console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel} com a experiência em ${experiencia}  pontos`)
}
else if(experiencia >2000 && experiencia <=5000){
    nivel = "Prata"
    console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel} com a experiência em ${experiencia}  pontos`)
}

else if(experiencia >5000 && experiencia <=7000){
    nivel = "Ouro"
    console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel} com a experiência em ${experiencia}  pontos`)
}
else if(experiencia >7000 && experiencia <=8000){
    nivel = "Platina"
    console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel} com a experiência em ${experiencia}  pontos`)
}
else if(experiencia >8000 && experiencia <=9000){
    nivel = "Ascendente"
    console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel} com a experiência em ${experiencia}  pontos`)
}
else if(experiencia >9000 && experiencia <=1000){
    nivel = "Imortal"
    console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel} com a experiência em ${experiencia}  pontos`)
}
else{
    nivel = "Radiante"
    console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel} com experiência em ${experiencia}  pontos`)
    
}
