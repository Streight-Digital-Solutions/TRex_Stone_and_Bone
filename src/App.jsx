import { useState } from 'react'
import ProductCatalogue from './components/ProductCatalogue'
import knifeImage from './assets/knife_1.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="hero" id="top">
        <div className="hero__knife" aria-hidden="true">
          <img src={knifeImage} alt="" />
        </div>

        <nav className="site-nav" aria-label="Primary navigation">
          <a
            className="site-nav__brand"
            href="#top"
            aria-label="T Rex Stone and Bone Tools home"
          >
            TSB
          </a>

          <div className="site-nav__links">
            <a href="#top">Home</a>
            <a href="#catalogue">Collection</a>
          </div>

          <button
            className="site-nav__toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        <div
          className="mobile-menu"
          id="mobile-menu"
          data-open={menuOpen}
        >
          <a href="#top" onClick={closeMenu}>
            Home
          </a>

          <a href="#catalogue" onClick={closeMenu}>
            Collection
          </a>
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow">
            Rex Stone &amp; Bone Tools
          </p>

          <h1>
            Hand-knapped blades, made the old way.
          </h1>

          <p className="hero__description">
            Terry Gagnon shapes stone, bone, and antler into working knives
            and tools, each one struck and ground by hand.
          </p>

          <a
            className="hero__cta"
            href="#catalogue"
          >
            View the collection
          </a>
        </div>

        <a
          className="hero__scroll"
          href="#catalogue"
          aria-label="Scroll to the collection"
        >
          <span>Explore</span>
          <span aria-hidden="true">↓</span>
        </a>
      </header>

      <ProductCatalogue />
    </>
  )
}

export default App