function ProductCard({ product, index }) {
  const { name, description, price, imageUrl } = product

  return (
    <article className="product-card" style={{ '--tilt-index': index % 5 }}>
      <div className="product-card__image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} loading="lazy" />
        ) : (
          <div className="product-card__placeholder" aria-hidden="true">
            <span>Photo coming</span>
          </div>
        )}
      </div>

      <div className="product-card__body">
        <h3>{name}</h3>
        {description && <p>{description}</p>}
      </div>

      {price && (
        <div className="product-card__tag">
          <span>{price}</span>
        </div>
      )}
    </article>
  )
}

export default ProductCard