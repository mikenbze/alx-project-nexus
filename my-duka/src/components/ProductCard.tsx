import React from "react";

interface Props {
  title: string;
  price: number;
  category: string;
  image: string;
}

const ProductCard: React.FC<Props> = ({ title, price, category, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-2 rounded"/>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600">{category}</p>
      <p className="text-lg font-bold">${price}</p>
    </div>
  );
};

export default ProductCard;
