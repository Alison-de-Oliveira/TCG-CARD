import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( <div className="container mt-5">
      <h1 className="text-center">Teste do Bootstrap</h1>
      <div className="text-center">
        <button className="btn btn-primary">Clique aqui</button>
      </div>
    </div>
  );
}
  

export default App
