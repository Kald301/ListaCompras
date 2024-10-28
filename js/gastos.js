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

function calcular() {

    const restante = parseFloat(document.getElementById('valor_restante').innerHTML)
    const valor = parseFloat(document.getElementById('cantidad').value)
    console.log(restante)

    let nuevo_presupuesto = restante - valor

    if (nuevo_presupuesto < 0) {
        nuevo_presupuesto = restante + valor - valor
        alert("NO TE QUEDA DINERO")
    }

    document.getElementById('valor_restante').innerHTML = nuevo_presupuesto
}

const mi_inventario = {};

function inventario() {

    objeto = document.getElementById('gasto').value
    valor_obj = parseFloat(document.getElementById('cantidad').value)

    if (objeto && !isNaN(valor_obj)) {

        if (mi_inventario[objeto]) {
            mi_inventario[objeto] += valor_obj;
        }
        else{
            mi_inventario[objeto] = valor_obj;
        }
    }
    console.log(mi_inventario)

}

function ver_lista(){
    const lista_compras = document.getElementById("lista_de_compras")
    lista_compras.innerHTML = "";

    for (const [objeto, valor_obj] of Object.entries(mi_inventario)) {
        const li = document.createElement("li");
        li.textContent = `${objeto} = ${valor_obj}`;

        const eliminar_compra = document.createElement("button");
        eliminar_compra.textContent = "Remover";
        eliminar_compra.addEventListener("click", () => {eliminar_compra_func(objeto);
        });

        li.appendChild(eliminar_compra);
        lista_compras.appendChild(li);
    }
}

function eliminar_compra_func(objeto){
    extracto = mi_inventario[objeto]
    console.log(extracto)
    const restante = parseFloat(document.getElementById('valor_restante').innerHTML)
    const nuevo_presupuesto =  restante + extracto

    document.getElementById('valor_restante').innerHTML = nuevo_presupuesto

    delete mi_inventario[objeto]
    ver_lista()
}

document
    .getElementById('agregar-gasto')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        calcular()
        inventario();
        ver_lista()

    });
