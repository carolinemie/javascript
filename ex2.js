let alvo = Math.floor((Math.random() * 50) + 1);
console.log(alvo);
let numero = prompt("Em que número estou pensando?");

numero = Number(numero);

while (numero !== alvo){
    if (numero < alvo ){
        alert("MAIOR");
    }
    else {
        alert("MENOR");   
    }

    numero = prompt("Em que número estou pensando?")
    numero = Number(numero); 
}

alert("ACERTOU");
