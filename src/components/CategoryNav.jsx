// useFetch hook
import useFetch from "../hook/useFetch";
// link
import { Link } from "react-router-dom";

export default function CartegoryNav() {
  const { data } = useFetch("/categories");

  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category._id}`}
                className="cursor-pointer uppercase"
                key={category._id}>
                {category.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
