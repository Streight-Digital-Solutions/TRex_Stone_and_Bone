function ProductCard({ product, index, onPurchase, purchaseState }) {
  const { name, description, price, imageUrl, variationId } = product
  const isLoading = purchaseState === 'loading'
  const hasError = purchaseState === 'error'

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

      {variationId && (
        <div className="product-card__actions">
          <button
            type="button"
            className="product-card__buy"
            onClick={() => onPurchase(variationId)}
            disabled={isLoading}
          >
            {isLoading ? 'Preparing checkout…' : 'Buy Now'}
          </button>
          {hasError && (
            <p className="product-card__error">
              Couldn&rsquo;t start checkout. Try again.
            </p>
          )}
        </div>
      )}
    </article>
  )
}

export default ProductCard