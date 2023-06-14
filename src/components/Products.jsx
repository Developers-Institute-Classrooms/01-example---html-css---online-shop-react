import Product from "./Product";

import "./Products.css";

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map(({ href, imgSrc, title, price, width, height }) => {
        return (
          <Product
            key={title}
            href={href}
            imgSrc={imgSrc}
            title={title}
            price={price}
            width={width}
            height={height}
          />
        );
      })}
    </div>
  );
};

export default Products;
