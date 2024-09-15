import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [task1, setTask1] = useState(0);
  const [task2, setTask2] = useState(0);
  
  const timer1 = useRef(null);
  const timer2 = useRef(null);

  // Create a concurrent simulation
  const startSimulation = () => {

    if(!timer1.current){
      timer1.current = setInterval(() => {
        setTask1(prev => prev + 1);
      }, 1000);
    }

    if(!timer2.current){
      timer2.current = setInterval(() => {
        setTask2(prev => prev + 2);
      }, 1500);
    }
  }

  const stopSimulation = () => {
    if (timer1.current){
      clearInterval(timer1.current);
      timer1.current = null;
    }
    
    if (timer2.current){
      clearInterval(timer2.current);
      timer2.current = null;
    }
  }

  const restartSimulation = () => {
    stopSimulation();
    setTask1(0);
    setTask2(0);
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Simulación de Concurrencia</h1>
      
      <div class="p-4 bg-gray-100 rounded-lg shadow-md">
        <p class="text-lg font-semibold text-blue-600">Tarea 1:</p>
        <p class="text-gray-700">Va sumando de 1 en 1 cada segundo</p>
      </div>

      <div class="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
        <p class="text-lg font-semibold text-blue-600">Tarea 2:</p>
        <p class="text-gray-700">Va sumando de 2 en 2 cada segundo y medio</p>
      </div>

      <div class="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
        <p class="text-lg font-semibold text-blue-600">JUNTOS</p>
        <p class="text-gray-700">Se desarrollan concurrentemente porque el procesador <br></br>
        turna las dos tareas, para mantener el contador trabajando y haciendo la suma<br></br>
        sin necesidad de que termine la tarea alguno para continuar con la otra.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold">Tarea 1</h2>
          <p className="text-3xl">{task1}</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold">Tarea 2</h2>
          <p className="text-3xl">{task2}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={startSimulation}>Iniciar simulacion</button>
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={stopSimulation}>Parar simulacion</button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={restartSimulation}>Reiniciar simulacion</button>
      </div>
    </div>
  );
}

export default App;
