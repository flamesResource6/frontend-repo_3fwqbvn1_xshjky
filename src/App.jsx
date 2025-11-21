import Hero from './components/Hero'
import ScrollShowcase from './components/ScrollShowcase'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <ScrollShowcase />
      <Features />
      <Footer />
    </div>
  )
}

export default App
