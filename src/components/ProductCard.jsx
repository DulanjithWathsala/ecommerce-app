import { useContext } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { CartContext } from "../store/CartContext.js";

export default function ProductCard({ product, onViewProduct }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-4 flex flex-col h-full">
      <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-lg relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain rounded-lg"
        />

        <button
          onClick={onViewProduct}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
          title="View Details"
        >
          <HiOutlineEye className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <p className="text-sm text-gray-700 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-indigo-600">
            ${product.price}
          </span>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            onClick={() =>
              addItemToCart(product.id, product.title, product.price)
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
