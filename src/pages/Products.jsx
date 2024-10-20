import { useParams } from "react-router-dom";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import useFetch from "../hook/useFetch";
import { useEffect, useState } from "react";

export default function Products() {
  const { id } = useParams();
  // get products based on category
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  const [title, setTitle] = useState(null);
  // set the title when the data is fetched
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  });
  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />
          <main>
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {title} cameras
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
