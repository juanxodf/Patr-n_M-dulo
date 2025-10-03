import * as TaskManager from './TaskManager.js'

TaskManager.agregarTask('Terminar Patron modulo')
TaskManager.agregarTask('Comprar portatil')

TaskManager.completaTasks(0)

console.log(TaskManager.listarTasks())

TaskManager.eliminarTask