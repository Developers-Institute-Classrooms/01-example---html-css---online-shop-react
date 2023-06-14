import "./Product.css";

const Product = ({ href, imgSrc, title, price, width, height }) => {
  return (
    <section className="products__product">
      <a className="link products__product--link" href={href}>
        <img src={imgSrc} alt={title} width={width} height={height} />
        <h2 className="products__product--heading">{title}</h2>
        <p>
          $
          {price.toLocaleString(undefined, {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </p>
      </a>
    </section>
  );
};

export default Product;
