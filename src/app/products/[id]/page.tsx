import { getProductById } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(Number(params?.id)).catch(() => notFound());

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to products
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg overflow-hidden border mb-4">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {product.images.slice(0, 4).map((image, index) => (
              <div key={index} className="border rounded overflow-hidden aspect-square">
                <Image
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="mb-2">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {product.brand}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">{product.rating} ★</span>
            <span className="text-gray-500 text-sm">({product.category})</span>
          </div>
          
          <div className="mb-6">
            {product.discountPercentage ? (
              <div>
                <span className="text-2xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray-500 line-through ml-2">
                  ${Math.round(product.price / (1 - product.discountPercentage / 100))}
                </span>
                <span className="text-green-600 ml-2">
                  {product.discountPercentage}% off
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold">
                ${product.price.toFixed(2)}
              </span>
            )}
            <p className="text-sm text-gray-500 mt-1">
              {product.stock} units available
            </p>
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}