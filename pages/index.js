// import Head from 'next/head'
import { getProductsInCollection } from '../lib/shopify'

//using destructuring for 'properties' so we don't need to use the word props
export default function Home({ products }) {
  console.log(products)

  return <div className="text-3xl">Hello from Shopify Next.js</div>
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: { products }, // will be passed to the page component as props
  }
}
//get static function comes with NextJs
