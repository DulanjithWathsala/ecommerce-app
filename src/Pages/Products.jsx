import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { fetchAllProducts, fetchProductsByCategory } from "../services/api.js";
import ProductModal from "./ProductModal.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        setIsFetched(false);
        setError(null);
        const data = await fetchAllProducts();
        setProducts(data);

        const uniqueCategories = new Set();
        data.forEach((product) => {
          uniqueCategories.add(product.category);
        });
        setCategories(Array.from(uniqueCategories));
      } catch (error) {
        console.error(error);
        setError("Error fetching products. Please try again!");
      } finally {
        setIsFetched(true);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    async function getProductsByCategory() {
      try {
        setIsFetched(false);
        setError(null);
        const data = await fetchProductsByCategory(category);
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError("Error fetching products. Please try again!");
      } finally {
        setIsFetched(true);
      }
    }
    getProductsByCategory();
  }, [category]);

  function onCloseModal() {
    setOpen(false);
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Our Products</h2>

        <div className="flex items-center gap-2">
          <label htmlFor="categorySelect" className="text-gray-700 font-medium">
            Select Category:
          </label>
          <select
            id="categorySelect"
            onChange={(event) => setCategory(event.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Products</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!isFetched && <p className="text-gray-600">Products loading...</p>}

      {error && (
        <p className="text-red-600 bg-red-100 p-3 rounded-lg border border-red-400">
          {error}
        </p>
      )}

      {!error && isFetched && products.length === 0 && (
        <p className="text-gray-600">No products found!</p>
      )}

      {open && (
        <ProductModal
          open
          product={selectedProduct}
          onCloseModal={onCloseModal}
        />
      )}

      {!error && isFetched && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewProduct={() => {
                setSelectedProduct(product);
                setOpen(true);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
