import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function Cart() {
  const { items, updateItemQuantity } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {items.length === 0 && (
        <p className="text-center text-gray-500 text-lg">
          No items in the cart
        </p>
      )}
      {items.length > 0 && (
        <ul className="divide-y divide-gray-200">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li
                key={item.id}
                className="py-4 flex justify-between items-center"
              >
                <div>
                  <span className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    {formattedPrice}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateItemQuantity(item.id, -1)}
                    className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium text-gray-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateItemQuantity(item.id, 1)}
                    className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="mt-6 text-xl font-semibold text-gray-900 text-right">
        Cart Total:{" "}
        <strong className="text-indigo-600">{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
