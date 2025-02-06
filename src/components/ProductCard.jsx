export default function ProductCard({
  img,
  title,
  description,
  price,
  category,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-4 flex flex-col h-full">
      <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-lg">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-sm text-gray-700 line-clamp-2 flex-grow">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-indigo-600">${price}</span>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
