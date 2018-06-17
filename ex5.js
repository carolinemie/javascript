let nome = prompt("Qual o seu nome?");
let nascimento = prompt("Quando você nasceu?");
let login = prompt("Cadastrar login");
let senha = prompt("Digite sua senha");
let premium = confirm("Você é premium?");

nascimento = Number(nascimento);

let usuario = { nome:nome, login:login, senha:senha, nascimento:nascimento, premium:premium}
console.log(usuario);