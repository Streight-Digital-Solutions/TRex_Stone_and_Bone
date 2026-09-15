import ProductCatalogue from './components/ProductCatalogue'
import './App.css'

function App() {
  return (
    <>
      <header className="hero">
        <div className="hero__backdrop" aria-hidden="true"></div>
        <p className="hero__eyebrow">Rex Stone &amp; Bone Tools</p>
        <h1>Hand-knapped blades, made the old way.</h1>
        <p>
          Terry Gagnon shapes stone, bone, and antler into working knives and
          tools, each one struck and ground by hand.
        </p>
        <span className="hero__note">Full backdrop photo coming soon</span>
      </header>

      <ProductCatalogue />
    </>
  )
}

export default App
