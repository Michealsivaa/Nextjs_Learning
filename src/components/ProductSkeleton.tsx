export default function ProductSkeleton() {
    return (
      <div className="border rounded-lg overflow-hidden shadow-sm h-full">
        <div className="aspect-square bg-gray-200 animate-pulse"></div>
        <div className="p-4">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2 animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }