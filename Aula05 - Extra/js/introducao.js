// variáveis

// forma antiga - EVITAR USAR
var nomeUsuario = 'Felipe Amaral';
console.log(nomeUsuario);

// forma nova para criar variáveis
let idade = 31;
console.log(idade);

let frio = true;
console.log(frio);

// valor não pode ser alterado em const
const dataNascimento = '23/03/1990';
console.log(dataNascimento);

// concatenação
console.log('Olá ' + nomeUsuario + ' Seja bem-vindo!');
console.log('Sua idade é ' + idade);
console.log('Você nasceu em ' + dataNascimento);

// Template String
console.log(`Olá ${nomeUsuario}, hoje está frio? ${frio}`);

// tipo de variável
console.log(nomeUsuario, typeof nomeUsuario);
console.log(idade, typeof idade);
console.log(frio, typeof frio);
console.log(dataNascimento, typeof dataNascimento);

// arrays
const pessoas = ['eu', 'tu', 'ele', 'nós', 'vós', 'eles'];
console.log(pessoas);
console.table(pessoas);

const coisas = [12, 325.52, 'Teste', false];
console.table(coisas);

// DOM - Documnt Object Model - cópia do documento (elemento) para o JS - Manupular qualquer elemento HTML

// tag = document.getElementsByTagName(); 
//       document.querySelector('nome da tag'); 
//       document.querySelectorAll('nome da tag');

// class = document.getElementsByClassName(); 
//         document.querySelector('.nome da class'); 
//         document.querySelectorAll('nome da class');

// id = document.getElementById(); 
//      document.querySelector('#nome do Id');

console.log('usando DOM');

// pegar todas as TDs da página
const getTd = document.querySelectorAll('td');
console.log(getTd);
console.log(getTd[0].textContent);
getTd[16].textContent = 'Leia';
console.log(getTd[16].textContent);

// pegar pela Class
const getClass = document.querySelectorAll('.nome__personagem');
console.log(getClass);

//pegar pelo Id
const getId = document.querySelector('#dados');
console.log(getId);
