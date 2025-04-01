import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <div className="mb-2">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {product.brand}
            </span>
          </div>
          <h3 className="font-medium text-lg mb-1 line-clamp-2">{product.title}</h3>
          <div className="mt-auto">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">${product.price}</span>
                {product.discountPercentage && (
                  <span className="text-xs text-gray-500 ml-2 line-through">
                    ${Math.round(product.price / (1 - product.discountPercentage / 100))}
                  </span>
                )}
              </div>
              <span className="text-sm text-yellow-500">
                {product.rating} ★
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {product.stock} in stock
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}