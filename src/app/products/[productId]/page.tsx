import { Metadata } from "next";
type Props = { params: { productId: string } };

// Dynamic MetaData
/*
export const generateMetadata=({params}:Props):Metadata=>{
return {
    title:`Product ${params.productId}`,
}
}
*/

export default function ProDuctDetails({ params }: Props) {
  // console.log(p)
  return <h1>Product Details of Product {params.productId}</h1>;
}
