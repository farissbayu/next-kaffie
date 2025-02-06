export const CoffeeCard = ({ coffee }) => {
  const { title, description, image, price, discount } = coffee;

  const discountedPrice = price - price * (discount / 100);

  return (
    <li className="flex flex-col justify-between space-y-2 relative">
      <img
        src={image}
        alt={title}
        className="rounded-xl shadow-md w-full object-cover h-48"
      />
      {discount !== 0 && (
        <p className="absolute top-0 left-4 bg-gray-700 text-white rounded-full px-4 py-1 text-xs font-bold">
          {discount} % Off
        </p>
      )}
      <div className="flex flex-row justify-between items-center my-auto w-full">
        <p className="text-yellow-900 font-bold text-lg max-w-32">{title}</p>
        <div className="flex flex-col items-end">
          {discount !== 0 && (
            <p className="text-gray-400 text-xs font-bold line-through">
              Rp {price}
            </p>
          )}
          <p className="text-gray-700 text-sm font-bold">
            Rp {discountedPrice}
          </p>
        </div>
      </div>
      <p className="text-gray-500 text-xs">{description}</p>
    </li>
  );
};
