import ProductCatalogue from './components/ProductCatalogue'
import knifeImage from './assets/knife_1.png'
import './App.css'

const menuItems = [
  { label: 'Home', href: '#top' },
  { label: 'Collection', href: '#catalogue' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <>
      <header className="hero" id="top">
        <div className="hero__veil" aria-hidden="true"></div>

        <div className="hero__knife-wrap">
          <img
            className="hero__knife"
            src={knifeImage}
            alt="Hand-knapped stone knife with leather-wrapped handle"
          />

          <nav className="site-nav" aria-label="Primary navigation">
            <div className="site-nav__links">
              {menuItems.map((item) => (
                <a
                  className="site-nav__link"
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="hero__copy">
          <p className="hero__eyebrow">Rex Stone &amp; Bone Tools</p>

          <h1>Hand-knapped blades, made the old way.</h1>

          <p className="hero__lede">
            Terry Gagnon shapes stone, bone, and antler into working knives and
            tools, each one struck and ground by hand.
          </p>

          <a className="hero__cta" href="#catalogue">
            Explore the collection
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <a className="hero__scroll" href="#catalogue">
          <span>Scroll</span>
          <span aria-hidden="true">↓</span>
        </a>
      </header>

      <ProductCatalogue />

      <section className="story" id="about">
        <h2>Made by hand. Built with history.</h2>

        <p>
          Every piece begins with raw material and ends with a tool shaped by
          hand. Stone, bone, and antler are worked slowly and deliberately,
          preserving the character of the material in every finished piece.
        </p>
      </section>

      <footer className="site-footer" id="contact">
        <p>Rex Stone &amp; Bone Tools</p>

        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App