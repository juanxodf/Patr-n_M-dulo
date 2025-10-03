// archivo TaskManager

let listaTareas = []

export const agregarTask = (tarea)=>{
    // añadimos el objeto tarea, con el podemos poner un campo completado para mas tarde marcarlo
    listaTareas.push({text: tarea, completado: false})
}

export const listarTasks = ()=>{
    for (let i = 0; i < listaTareas.length; i++) {
        const element = listaTareas[i];
        print(i + ". " +element)
    }
}

export const completaTasks = (index)=>{
    if (listaTareas[index]){
        listaTareas[index].completado = true
    }
}

export const eliminarTask = (index) =>{
    if (listaTareas[index]){
        listaTareas.splice(index,1)
    }
}
