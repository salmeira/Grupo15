var cajaCasas = document.getElementById('Casas')
var cajaDepartamentos = document.getElementById('Departamentos')

function mostrarCasas(){
    cajaCasas.style.display = 'block'
    cajaDepartamentos.style.display = 'none'
}

function mostrarDepartamentos(){
    cajaDepartamentos.style.display = 'block'
    cajaCasas.style.display = 'none'
}