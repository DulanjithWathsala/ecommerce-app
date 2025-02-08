import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-2xl mt-20">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Limited-time offer: Get 20% off on your first order!{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="inset-0" />
              Shop Now <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center ">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Best Deals on Trendy Products
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 ">
            Shop the latest fashion, gadgets, and accessories at unbeatable
            prices. Fast delivery and easy returns!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/products"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Shopping
            </Link>
            <a
              href="#"
              className="rounded-md border border-gray-500 px-4 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:ring-gray-900/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-flex items-center"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
