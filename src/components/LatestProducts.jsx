// useFetch hook
import useFetch from "../hook/useFetch.jsx";
// import components
import ProductSlider from "./ProductSlider.jsx";

export default function LatestProducts() {
  // get new products
  const { data } = useFetch("/products/products?isNewProduct=true");
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 text-3xl mb-6 text-center lg:text-left">
          Latest Products
        </h2>
      </div>
      <ProductSlider data={data} latestLabel={true} relatedLabel={false} />
    </div>
  );
}
