// link
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative group">
        {product.attributes.isNew ? (
          <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        ) : (
          ""
        )}
        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
            src={`${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
        {/* text */}
        <div className="px-6 pb-8 flex flex-col">
          {/* category title */}
          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0]?.attributes.title}
          </div>
          {/* title */}
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.attributes.title.substring(0, 35)}...
          </div>
          {/* price */}
          <div className="text-lg text-accent">
            $ {product.attributes.price}
          </div>
        </div>
      </div>
    </Link>
  );
}
