//constructores
function seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;

}

function UI() { }

//llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;
    
    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//instanciar UI

const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //llena selec con los años
})

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();
    //leer marca seleccionado
    const marca = document.querySelector('#marca').value;

    //leer año
    const year = document.querySelector('#year').value;


    //leer cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === '') {
        
    } else {
        
    }
}

