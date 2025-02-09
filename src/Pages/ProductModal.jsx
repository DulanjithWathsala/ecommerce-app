import { useContext } from "react";
import { CartContext } from "../store/CartContext.js";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import { notify } from "../utils/CartNotify.js";

export default function ProductModal({ open, onCloseModal, product }) {
  const { addItemToCart } = useContext(CartContext);

  function handleAddToCartOnClick() {
    addItemToCart(product.id, product.title, product.price);
    notify(product);
  }

  return (
    <Dialog open={open} onClose={onCloseModal} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="size-6 text-blue-600"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <div className="mt-2">
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="w-full h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="max-h-60 object-contain rounded-lg"
                        />
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mt-4">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {product.category}
                      </p>
                      <p className="text-sm text-gray-700 max-h-32 overflow-y-auto">
                        {product.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-indigo-600">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                className="mt-3 inline-flex w-full text-white justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-indigo-700 sm:mt-0 sm:w-auto ms-2"
                onClick={handleAddToCartOnClick}
              >
                Add to Cart
              </button>
              <button
                type="button"
                data-autofocus
                onClick={onCloseModal}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
