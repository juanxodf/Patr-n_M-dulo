import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import * as TaskManager from './TaskManager.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h2 class="text-xl font-bold mb-4">Gestor de Tareas</h2>
    
    <!-- Formulario -->
    <div class="flex gap-2 mb-4">
      <input 
        id="taskInput" 
        type="text" 
        placeholder="Nueva tarea..." 
        class="flex-1 border px-2 py-1 rounded"
      />
      <button id="addBtn" class="bg-blue-500 text-white px-3 py-1 rounded">Agregar</button>
    </div>

    <!-- Lista -->
    <ul id="taskList" class="space-y-2"></ul>
  </div>
`

// referencias
const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

function renderTasks() {
  taskList.innerHTML = ""
  TaskManager.listaTareas.forEach((task, index) => {
    const li = document.createElement("li")
    li.className = "flex justify-between items-center bg-white p-2 rounded shadow"

    li.innerHTML = `
      <span class="${task.completado ? 'line-through text-gray-400' : ''}">
        ${task.text}
      </span>
      <div class="flex gap-2">
        <button class="completeBtn bg-green-500 text-white px-2 py-1 rounded">✔</button>
        <button class="deleteBtn bg-red-500 text-white px-2 py-1 rounded">🗑️</button>
      </div>
    `

    // completar
    li.querySelector(".completeBtn").addEventListener("click", () => {
      TaskManager.completaTasks(index)
      renderTasks()
    })

    // eliminar
    li.querySelector(".deleteBtn").addEventListener("click", () => {
      TaskManager.eliminarTask(index)
      renderTasks()
    })

    taskList.appendChild(li)
  })
}

// evento para agregar tarea
addBtn.addEventListener("click", () => {
  const tarea = taskInput.value.trim()
  if (tarea) {
    TaskManager.agregarTask(tarea)
    taskInput.value = ""
    renderTasks()
  }
})

// render inicial
renderTasks()


