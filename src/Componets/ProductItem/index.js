import "./index.css";

const ProductItem = (props) => {
  const { productItem } = props;
  const { productImg, productName } = productItem;

  return (
    <li className="product-item-con">
      <div className="product-img-txt-con">
        <img className="product-img" src={productImg} alt={productName} />

        <div className="product-txt-con">
          <h1 className="product-name">{productName}</h1>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
