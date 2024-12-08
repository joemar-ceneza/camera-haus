// components
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";
// context
import { CartContext } from "../context/CartContext";
import useFetch from "../hook/useFetch";
import { useContext } from "react";

export default function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { data } = useFetch(`/products/products?slug=${id}`);

  if (!data) {
    return <div className="container mx-auto">loading...</div>;
  }
  // category title
  const categoryTitle = data[0].title;

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              className="w-full max-w-[65%]"
              src={`${data[0].image}`}
              alt=""
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            <div className="uppercase text-accent text-lg font-medium mb-2">
              {data[0].title} cameras
            </div>
            <h2 className="h2 mb-4">{data[0].title}</h2>
            <p className="mb-12">{data[0].description}</p>
            <div className="flex items-center gap-x-8">
              <div className="text-3xl text-accent font-semibold">
                ${data[0].regularPrice}
              </div>
              <button
                onClick={() => addToCart(data, id)}
                className="btn btn-accent">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
}
