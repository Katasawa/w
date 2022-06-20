const storage = localStorage;

let cars = [];

let moviments = [];


const onClickRemove = (element) => {
   
    
    const identificadorASerEncontrado = 
      +element.getAttribute('identificador');
    const carsDelete = loadCars();
     carsDelete.splice(identificadorASerEncontrado,1)
  
     localStorage.setItem('carRegistration', JSON.stringify(carsDelete));
      

    listCars();
  }

function loadCars () {
    const cars = storage.getItem('carRegistration');
    return cars ? JSON.parse(cars) : [];
}

function loadMoviment () {
    const moviments = storage.getItem('movimentRegistration');
    return moviments ? JSON.parse(moviments) : [];
}
//Listar

const span = (identificador) => {
    const span = document.createElement('span');
    const iconRemove = document.createElement('i');
    iconRemove.setAttribute('class', 'fas fa-trash');
    iconRemove.setAttribute('title', 'Remover');
    iconRemove.setAttribute('identificador', `${identificador}`);
    iconRemove.setAttribute('onclick', `onClickRemove(this)`);
    iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');
  
    span.appendChild(iconRemove);
    
    return span;
  } 

const listCars = () => {
    const cars = loadCars();
    
    
    function createUl (){
       let ul = document.getElementById('list-cars-ul');
       if (ul) {
         document.getElementById('list-cars-section').appendChild(ul)
        }   
        ul = document.createElement('ul')
        ul.setAttribute('id', `list-cars-ul`);
   }
       const ul = document.getElementById('list-cars-ul');
   
   cars.forEach((item, identificador) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.model} ${item.brand} ${item.quantity}`;
        
        li.appendChild(span(identificador))
        li.setAttribute('id', `${identificador}`)
        console.log('testndo-----', li.id)
        
        if(ul){
            ul.appendChild(li)
        }
    }); 
    createUl()
}


listCars();
// Cadastro

function registryCar(event) {
    event.preventDefault();
    console.log('registrando um veiculo')

    const [model, brand, quantity] = document.getElementById('register-field').querySelectorAll('input');

    const car = {
        model: model.value,
        brand: brand.value,
        quantity: +quantity.value
    }
    

    cars = loadCars();

    cars.push(car)

    storage.setItem('carRegistration', JSON.stringify(cars))


    console.log('----- ', car)
    listCars();
    document.querySelector('form').reset()
}


//-------------MOVIMENTO--------------------------------------------------------------------------------

const listMoviment = () => {
    const moviments = loadMoviment();
    
    
    function createUlMoviment (){
       let ul = document.getElementById('in-out-ul');
       if (ul) {
         document.getElementById('in-out-section').appendChild(ul)
        }   
        ul = document.createElement('ul')
        ul.setAttribute('id', `in-out-ul`);
   }
       const ul = document.getElementById('in-out-ul');
   
   moviments.forEach((item, identificador) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.enter} ${item.out}`;
        console.log(item)
        li.setAttribute('id', `${identificador}`)
        console.log('testndo-----', li.id)
        
        if(ul){
            ul.appendChild(li)
        }
    }); 
    createUlMoviment()
}


listMoviment();

function movimentRegistry(event) {
    event.preventDefault();
    console.log('movimentando')

    const [enter, out] = document.getElementById('in-out-field').querySelectorAll('input');

    const moviment = {
        in: +enter.value,
        out: +out.value        
    }
    

    moviments = loadMoviments();

    moviments.push(moviment)

    storage.setItem('MovimentRegistration', JSON.stringify(moviment))


    console.log('----- ', moviment)
    listMoviment();
    document.getElementById('in-out-form').querySelector('form').reset()
}

function pageList(){
    window.location = 'list-cars.html'
}
function pageRegister(){
    window.location = 'register.html'
}
function pageInOut(){
    window.location = 'moviment.html'
}
const btnRegistry = document.getElementById('submit-register');

if (btnRegistry) {
    btnRegistry.addEventListener('click', registryCar);
}

const btnMoviment = document.getElementById('submit-in-out');

if (btnMoviment) {
    btnMoviment.addEventListener('click', movimentRegistry)
}