import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchAllProducts } from "../services/api.js";
import Modal from "./Modal.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsFetched(false);
        setError(null);
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError("Error fetching products. Please try again!");
      } finally {
        setIsFetched(true);
      }
    }
    getProducts();
  }, []);

  function onCloseModal() {
    setOpen(false);
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Products</h2>

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
        <Modal open product={selectedProduct} onCloseModal={onCloseModal} />
      )}

      {!error && isFetched && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              img={product.image}
              description={product.description}
              price={product.price}
              category={product.category}
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
