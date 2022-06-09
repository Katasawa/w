let people = [];

const loadPeople = () => {
  const itemsJaArmazenados = localStorage.getItem('listaDePessoas');
  return itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : [];
}

const onClickEdit = (element) => {
  const identificadorASerEncontrado = 
    element.getAttribute('identificador');
  const people = loadPeople();
  console.log('carregar pessoas', people);
  let pessoaEncontrada = {
    name: '',
    age: '',
    height: ''
  };

  people.forEach((pessoa, identificador) => {
    if (identificador === +identificadorASerEncontrado) {
      pessoaEncontrada.age = pessoa.age;
      pessoaEncontrada.name = pessoa.name;
      pessoaEncontrada.height = pessoa.height;
    }
  });

  document.getElementById('name').value = pessoaEncontrada.name;
  document.getElementById('age').value = pessoaEncontrada.age;
  document.getElementById('height').value = pessoaEncontrada.height;

  console.log('pessoaEncontrada', pessoaEncontrada);
}

const onClickRemove = (element) => {
  const identificadorASerEncontrado = 
    element.getAttribute('identificador');
  const people = loadPeople();
  console.log('carregar pessoas', people);
  let pessoaEncontrada = {
    name: '',
    age: '',
    height: ''
}


const span = (identificador) => {
  const span = document.createElement('span');
  const iconEdit = document.createElement('i');
  iconEdit.setAttribute('class', 'fas fa-edit');
  iconEdit.setAttribute('title', 'Editar');

  iconEdit.setAttribute('identificador', `${identificador}`);
  iconEdit.setAttribute('onclick', `onClickEdit(this)`);
  iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');

  span.appendChild(iconEdit);

  const iconRemove = document.createElement('i');
  iconRemove.setAttribute('class', 'fas fa-trash');
  iconRemove.setAttribute('title', 'Remover');
  iconRemove.setAttribute('identificador', `${identificador}`);
  iconRemove.setAttribute('onclick', `onClickRemove(this)`);
  iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');

  span.appendChild(iconRemove);
  
  return span;
} 

const listPeople = () => {
  const people = loadPeople();
  
  let ul = document.querySelector('ul');
  if (ul) {
    ul.remove();
  }
  
  ul = document.createElement('ul');
 
  people.forEach((item, identificador) => {
    const li = document.createElement('li');
    li.innerHTML = 
    
    `Nome: ${item.name} 
     Idade: ${item.age}, 
     Altura: ${item.height}
     `;

    li.appendChild(span(identificador))
    ul.appendChild(li);
  });
  
  document.getElementById('list-section').appendChild(ul);
}

listPeople();

const addPeople = (event) => {
  event.preventDefault();
  const people = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    height: document.getElementById('height').value,
  }
  
  people = loadPeople();

  people.push(people);
  
  localStorage.setItem('listaDePessoas', JSON.stringify(people));

  document.querySelector('form').reset();

  listPeople();
}




const botaoDeAdicionar = document.getElementById('btn');
botaoDeAdicionar.addEventListener('click', addPeople)

