import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PizzasList from './components/PostsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <PizzasList />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
