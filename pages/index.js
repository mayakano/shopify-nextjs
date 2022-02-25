// import Head from 'next/head'
import { getProductsInCollection } from '../lib/shopify'
import ProductList from '../components/ProductList'
import Hero from '../components/Hero'
import Head from 'next/head'

//using destructuring for 'properties' so we don't need to use the word props
export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>NextGraph</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        ></meta>
        <meta
          name="description"
          content="Modern Headless Shopify E-Commerce Website"
        />
        <meta property="og:title" content="NextGraph" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-graph.vercel.app/" />
        <meta
          property="og:image"
          content="https://next-graph.vercel.app/nextgraph.png"
        />
        <meta
          property="og:description"
          content="Modern Headless Shopify E-Commerce Website"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="NextGraph" />
      </Head>
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
