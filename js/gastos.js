const form = document.getElementById('agregar-gasto')
const listado = document.getElementById('#gastos ul')

consulta()

function consulta() {
    const presupuesto = parseFloat(prompt("Dime tu presupuesto"));
    const label = document.getElementById('valor_presupuesto');

    // Verifica si el label está vacío antes de actualizar
    if (label.innerText.trim() === "") {
        label.innerText = presupuesto; // Cambia el contenido del label
    }
    console.log()
    
    document.getElementById('valor_restante').innerHTML = presupuesto
}

function calcular(){

    const restante = parseFloat(document.getElementById('valor_restante').innerHTML)
    const valor = parseFloat(document.getElementById('cantidad').value)
    console.log(restante)

    let nuevo_presupuesto = restante - valor

    if (nuevo_presupuesto < 0){
        nuevo_presupuesto = restante + valor - valor
        alert("NO TE QUEDA DINERO")
    }

    document.getElementById('valor_restante').innerHTML = nuevo_presupuesto
}

const mi_inventario = {};

function inventario(){

    objeto = document.getElementById('gasto').value
    valor_obj = document.getElementById('cantidad').value
    

    if (objeto){
        mi_inventario[objeto]=valor_obj
    }
    console.log(mi_inventario)

}


document
	.getElementById('agregar-gasto')
	.addEventListener('submit', function (event) {
		event.preventDefault();
        
        calcular()
        inventario();
        

		event.target.submit();
	});
