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

