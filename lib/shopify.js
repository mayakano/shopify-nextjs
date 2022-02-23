const domain = process.env.SHOPIFY_STORE_DOMAIN
//declaring our environments for the frontend (we did it for the backend in next.config.js)

const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-01/graphql.json`

  console.log(URL)
  const options = {
    endpoint: URL,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      Accept: 'applications/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json()
    })
    return data
  } catch (error) {
    throw new Error('Products not fetched')
  }
}

export async function getProductsInCollection() {
  const query = `{
  collectionByHandle(handle: "frontpage") {
    title
    products(first:25) {
      edges {
        node {
          id
          title
          handle
          images(first: 5) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
        }
      }
    }
  }
}`

  const response = await ShopifyData(query)

  //if the edges exist we will set this object to edges, if not we'll get an empty array

  const allProducts = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : []
  return allProducts
}
//try catch will do the querying
//access token is in shopify documentation api