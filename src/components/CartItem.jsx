import { Link } from "react-router-dom";
// icons
import { IoClose } from "react-icons/io5";
// components
import Qty from "../components/Qty";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="flex gap-x-8">
      <Link to={`product/${item._id}`} className="w-[70px] h-[70px]">
        <img src={`${item.image}`} alt="" />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3">
          <Link to={`product/${item._id}`}>{item.title}</Link>
          <div
            onClick={() => removeFromCart(item._id)}
            className="cursor-pointer text-[24px] hover:text-accent transition-all">
            <IoClose />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          <div className="flex gap-x-4 mb-2">
            <Qty item={item} />
          </div>
          <div className="text-accent text-xl">
            $ {item.regularPrice * item.amount}
          </div>
        </div>
        <div>
          <span className="text-accent">$ {item.regularPrice} per piece</span>
        </div>
      </div>
    </div>
  );
}
