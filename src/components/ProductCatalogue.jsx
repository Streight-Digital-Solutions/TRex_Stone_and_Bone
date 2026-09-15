import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import './ProductCatalogue.css'

function ProductCatalogue() {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => {
    let cancelled = false

    fetch('/api/products')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setProducts(data.products || [])
        setStatus('ready')
      })
      .catch(() => {
        if (cancelled) return
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="catalogue" id="catalogue">
      <div className="catalogue__intro">
        <h2>The Collection</h2>
        <p>Each piece is knapped and shaped by hand, no two the same.</p>
      </div>

      {status === 'loading' && (
        <p className="catalogue__status">Bringing the pieces to the table&hellip;</p>
      )}

      {status === 'error' && (
        <p className="catalogue__status catalogue__status--error">
          The collection couldn&rsquo;t be reached. Try refreshing the page.
        </p>
      )}

      {status === 'ready' && products.length === 0 && (
        <p className="catalogue__status">
          New pieces are being added to the workbench &mdash; check back soon.
        </p>
      )}

      {status === 'ready' && products.length > 0 && (
        <div className="catalogue__grid">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductCatalogue
