import ProductItem from "../ProductItem";
import "./index.css";

const productsList = [
  {
    productImg:
      "https://www.iconninja.com/files/697/925/291/graph-arrow-chart-analytics-direction-up-statistics-icon.png",
    productName: "Best Market",
    productDescripton: "",
  },
  {
    productImg:
      "https://www.kindpng.com/picc/m/296-2960697_marketing-conversion-rate-svg-png-conversion-icon-png.png",
    productName: "Conversion",
    productDescripton: "",
  },
  {
    productImg:
      "https://t4.ftcdn.net/jpg/05/63/83/65/360_F_563836536_kwcZ8Cq6DxzlHbLo5fLI82IcfDRpCBs0.jpg",
    productName: "Motivated",
    productDescripton: "",
  },
  {
    productImg:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/probate-1658102-1407303.png",
    productName: "Probate",
    productDescripton: "",
  },
  {
    productImg:
      "https://img.freepik.com/premium-vector/tax-lien-glyph-solid-black-illustration_120816-28520.jpg",
    productName: "Tax Delinquents",
    productDescripton: "",
  },
  {
    productImg:
      "https://media.istockphoto.com/id/1220378235/vector/seniors-at-house-black-vector-icon.jpg?s=612x612&w=0&k=20&c=JYleW8PvbLg3QkNhzT8HDCqVopG5U6nXzurIueJ6lnQ=",
    productName: "Aged Homes with Aged owners",
    productDescripton: "",
  },
  {
    productImg:
      "https://w7.pngwing.com/pngs/945/96/png-transparent-real-estate-estate-agent-house-real-property-house-building-apartment-logo.png",
    productName: "Agents Realtors",
    productDescripton: "",
  },
  {
    productImg: "https://static.thenounproject.com/png/223583-200.png",
    productName: "Cash Buyers",
    productDescripton: "",
  },
  {
    productImg:
      "https://p7.hiclipart.com/preview/284/110/452/foreclosure-house-property-eviction-bank-house.jpg",
    productName: "Foreclosure",
    productDescripton: "",
  },
  {
    productImg:
      "https://w7.pngwing.com/pngs/331/232/png-transparent-house-real-estate-home-dollar-sign-finance-house-service-logo-united-states-dollar.png",
    productName: "Pre-Foreclosure",
    productDescripton: "",
  },
  {
    productImg:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/real-estate-law-2443167-2035553.png",
    productName: "Pre-Probate",
    productDescripton: "",
  },
  {
    productImg:
      "https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/homeowner-icon.png",
    productName: "Distressed Homes & Owners",
    productDescripton: "",
  },
  {
    productImg: "https://static.thenounproject.com/png/2255610-200.png",
    productName: "Inheritance",
    productDescripton: "",
  },
  {
    productImg:
      "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/investor-icon.png",
    productName: "Investores",
    productDescripton: "",
  },
  {
    productImg:
      "https://i.pinimg.com/736x/65/e3/1f/65e31f6f4a9b196c011ba39bf226496e.jpg",
    productName: "Attorneys",
    productDescripton: "",
  },
];

const Products = () => (
  <div className="prodcuts-container">
    <h1 className="products-heading">Products</h1>
    <h2 className="products-sub-heading">LIst Types</h2>

    <ul className="products-items-container">
      {productsList.map((eachItem) => (
        <ProductItem productItem={eachItem} key={eachItem.productName} />
      ))}
    </ul>
  </div>
);

export default Products;
