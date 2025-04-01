import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/ProductSkeleton";
import { Suspense } from "react";

export default async function ProductListPage() {
  const data = await getProducts(12);
  console.log(data, 'this is product details')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      <Suspense fallback={
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      }>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.products.map((product) => (
            
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}