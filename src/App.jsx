import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
     <h1>Welcome to drewvpham.com</h1>
     <ul>
      <li><a href='https://blog.drewvpham.com'>Blog</a></li>
      <li><a href='https://shop.drewvpham.com'>Shop</a></li>
      <li><a href='https://merch.drewvpham.com'>Merch</a></li>
     </ul>
    </>
  )
}

export default App
