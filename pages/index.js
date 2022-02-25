// import Head from 'next/head'
import { getProductsInCollection } from '../lib/shopify'
import ProductList from '../components/ProductList'
import Hero from '../components/Hero'

//using destructuring for 'properties' so we don't need to use the word props
export default function Home({ products }) {
  return (
    <div>
      <Hero />
      <ProductList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: { products }, // will be passed to the page component as props
  }
}
//get static function comes with NextJs
