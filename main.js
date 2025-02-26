const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.

//A função handleChangeTech recebe event como parâmetro,
//event é o objeto que representa o evento de clique e fornece informações sobre o clique, como elemento clicado(event.target)
//document.querySelector é o método que busca o primeiro elemento com a classe tech
//techElement variável que armazena o elemento com a classe tech
//classList.remove('tech) método que remove a classe tech de um elemento que atualmente a possui
//event.target é o elemento que foi clicado e que receberá a class tech
//classList.add('tech) método que adiciona a classe tech a um elemento, aquele elemento que receber o evento clique
//input.value = '' limpa o valor de um campo de input, ou seja, limpa o conteúdo do campo input após o clique
const handleChangeTech = (event) => {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

//addEventListener('click', handleChangeTech) adiciona uma "ouvinte" de evento ao elemento li
//e quando esse elemento for clicado a função handleChangeTech será executada assim atribuindo a classe tech ao elemento clicado
firstLi.addEventListener('click', handleChangeTech);
secondLi.addEventListener('click', handleChangeTech);
thirdLi.addEventListener('click', handleChangeTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.

input.addEventListener('input', (event) => {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

myWebpage.addEventListener('click', () => {
  window.open('https://www.w3schools.com/js/js_events.asp', '_blank');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.

// myWebpage.addEventListener('mouseover', (event) => {
//   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Cor hexadecimal aleatória
//   event.target.style.color = randomColor; // Aplica a cor ao texto
//   });

myWebpage.addEventListener('mouseover', (event) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  event.target.style.color = `rgb(${r}, ${g}, ${b})`;
});

// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.