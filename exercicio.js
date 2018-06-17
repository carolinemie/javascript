console.log('Calling js file')

let idade = prompt("Qual a sua idade?")
let emprestimo = prompt("De quanto você precisa?")
let salario = prompt("Quanto você ganha?")

idade = Number(idade);

if (isNaN(idade)) {
    alert("Número Inválido")
}

else {

    if (idade > 21 && idade < 55 && emprestimo <= salario * 15 && emprestimo >= 1000) {
        alert("APROVADO")
    }

    else {
        alert("REPROVADO")
    }

}


// /* EXERCÍCIO 05 */

// let nome = prompt("Qual o seu nome?")
// let nascimento = prompt("Quando você nasceu?")
// let login = prompt("Cadastrar login")
// let senha = prompt("Digite sua senha")
// let premium = 

// let usuario = { nome:"caroline", login:"carol", senha:"dormir", nascimento:"10/07/1994", premium:true}




