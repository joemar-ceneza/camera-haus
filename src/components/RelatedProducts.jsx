// components
import useFetch from "../hook/useFetch";
import ProductSlider from "./ProductSlider";

export default function RelatedProducts({ categoryTitle }) {
  // get products by category title
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  );
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
}
