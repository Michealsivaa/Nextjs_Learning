import React from 'react';

interface PageProps {
  params: { productId: string };
}

const Page = async ({ params }: PageProps) => {
  const id = params.productId; 

  return <div>Product Details page {id}</div>;
};

export default Page;
