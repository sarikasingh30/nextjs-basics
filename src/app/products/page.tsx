import Link from "next/link"
export default function ProductList(){
  let productIDSpecial=100
    return(

        <>
        <h2><Link href="/">Home</Link></h2>
        <h1>ProductList</h1>
        <h2><Link href="/products/1">Product 1</Link></h2>
        <h2><Link href="/products/2">Product 2</Link></h2>
        <h2><Link href="/products/3">Product 3</Link></h2>
        <h2><Link href="/products/4" replace>Product 4</Link></h2>
        <h2><Link href={`/products/${productIDSpecial}`}>Product {productIDSpecial}</Link></h2>
      </>
    )
}