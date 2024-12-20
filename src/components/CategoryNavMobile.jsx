// icons
import { FiX } from "react-icons/fi";
// link
import { Link } from "react-router-dom";
// useFetch hook
import useFetch from "../hook/useFetch";

export default function CategoryNavMobile({ setCatnavMobile }) {
  // get categories
  const { data } = useFetch("/categories");
  return (
    <div className="w-full h-full bg-primary p-8">
      <div className="flex justify-end mb-8 cursor-pointer">
        <FiX onClick={() => setCatnavMobile(false)} className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((category) => {
          return (
            <Link
              to={`products/${category._id}`}
              className="uppercase font-medium"
              key={category._id}>
              {category.title} Cameras
            </Link>
          );
        })}
      </div>
    </div>
  );
}
