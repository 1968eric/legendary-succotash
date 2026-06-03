import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-purple-600">Artsphere</h1>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

function HomePage() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Artsphere</h2>
      <p className="text-gray-600">A platform for artists to showcase and sell their artwork</p>
    </div>
  )
}

export default App
