var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

function showFormulario(){
    let formulario = document.querySelector("#formulario");
    //console.log(formulario);
    if (formulario.style.display != 'block') {
        formulario.style.display = 'block';
    }
    else {
        formulario.style.display = 'none';
    }

}

function showTareas(){
    let tabla=document.querySelector("#tabla-tareas");
    for(let i=0; i < tareas.length; i++){
        let row = tabla.insertRow(i+1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = tareas[i].tarea;
        cell2.innerHTML = `<button type="button" class="btn btn-danger" onclick="quitarTarea(this);">Finalizar</button>`;
    }
}

function agregarTarea(){
    let nueva_tarea=document.querySelector("#nuevaTarea").value;
    let tabla=document.querySelector("#tabla-tareas");
    let row = tabla.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = nueva_tarea;
    cell2.innerHTML = `<button type="button" class="btn btn-danger" onclick="quitarTarea(this);">Finalizar</button>`;
    tareas.push({tarea:nueva_tarea});
    document.querySelector("#nuevaTarea").value="";
    //console.log(tareas);
}


function quitarTarea(fila){
    let tabla=document.querySelector("#tabla-tareas");
    let pos = fila.parentNode.parentNode.rowIndex;
    tabla.deleteRow(pos);
    delete tareas[pos-1];
    //console.log(tareas);
}


