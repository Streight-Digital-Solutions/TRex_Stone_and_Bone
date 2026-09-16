import { useState } from 'react'
import ProductCatalogue from './components/ProductCatalogue'
import knifeImage from './assets/knife_1.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="hero" id="top">
        <div className="hero__knife" aria-hidden="true">
          <img src={knifeImage} alt="" />
        </div>

        {/* -------------------------------------------------
            NAVIGATION
        ------------------------------------------------- */}

        <nav className="site-nav" aria-label="Primary navigation">
          <a
            className="site-nav__brand"
            href="#top"
            aria-label="T Rex Stone and Bone Tools home"
          >
            LOGO
          </a>

          <div className="site-nav__links">
            <a href="#top">Home</a>
            <a href="#catalogue">Collection</a>
            <a href="#artist">Artist</a>
            <a href="#contact">Contact</a>
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

        {/* -------------------------------------------------
            MOBILE NAVIGATION
        ------------------------------------------------- */}

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

          <a href="#artist" onClick={closeMenu}>
            Artist
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        {/* =================================================
            HERO HEADLINE
        ================================================= */}

        <div className="hero__top-content">
          <p className="hero__eyebrow">
            T-Rex Stone &amp; Bone Tools
          </p>

          <h1>
            Hand-knapped blades, made the old way.
          </h1>
        </div>

        {/* =================================================
            HERO DESCRIPTION / CTA
        ================================================= */}

        <div className="hero__bottom-content">
          <p className="hero__description">
            Terry Gagnon shapes stone, bone, and antler into working knives
            and tools, each one struck and ground by hand.
          </p>

          <a className="hero__cta" href="#catalogue">
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


      {/* =====================================================
          COLLECTION
      ===================================================== */}
      <ProductCatalogue />

        {/* -------------------------------------------------
            SCROLL INDICATOR
        ------------------------------------------------- */}

        <a
          className="hero__scroll"
          href="#catalogue"
          aria-label="Scroll to the collection"
        >
          <span>Explore</span>
          <span aria-hidden="true">↓</span>
        </a>
    

      {/* =====================================================
          ARTIST
      ===================================================== */}

      <section className="artist" id="artist">
        <div className="artist__inner">
          <div className="artist__image">
            <div
              className="artist__image-placeholder"
              aria-label="Artist photograph placeholder"
            >
              <span>Artist Photograph</span>
              <small>Photo placeholder</small>
            </div>
          </div>

          <div className="artist__content">
            <p className="section-eyebrow">
              The Artist
            </p>

            <h2>
              Terry Gagnon
            </h2>

            <p>
              Every piece begins with the material itself.
              Stone, bone, and antler are selected, shaped,
              and worked by hand, following techniques rooted
              in the traditions of stone knapping and primitive
              toolmaking.
            </p>

            <p>
              This space will tell Terry's story — his approach
              to the craft, the materials he works with, and the
              process behind each individual piece.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section className="contact" id="contact">
        <div className="contact__inner">
          <div className="contact__heading">
            <p className="section-eyebrow">
              Get In Touch
            </p>

            <h2>
              Interested in a piece?
            </h2>

            <p>
              Whether you're interested in an available piece,
              a custom knife, or simply want to learn more about
              the craft, get in touch.
            </p>
          </div>

          <div className="contact__details">
            <a href="mailto:terryg8532@gmail.com">
              <span>Email</span>
              <strong>terryg8532@gmail.com</strong>
            </a>

            <a href="tel:+12364126631">
              <span>Phone</span>
              <strong>+1 (236) 412-6631</strong>
            </a>

            <div>
              <span>Location</span>
              <strong>Comox, BC</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App