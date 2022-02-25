import Link from 'next/link'

export default function Hero() {
  return (
    <div className="my-48 mx-auto max-w-7xl px-4 text-center sm:mt-24 md:mt-72">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">NextGraph</p>
        <p className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-4xl text-transparent sm:text-6xl md:text-7xl">
          Modern Store
        </p>
      </h1>
      <h2 className="md:max-x-3xl mx-auto mt-3 max-w-md text-gray-500 sm:text-lg md:mt-5 md:text-xl">
        Enjoy the Headless Experience.
      </h2>
      <div className="mx-auto mt-5 flex max-w-md items-center justify-center md:mt-8">
        <a
          href="https://github.com/mayakano/shopify-nextjs"
          className="mr-6 inline-flex h-12 items-center justify-center rounded-md border-transparent bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800"
        >
          View Github
        </a>
        <a
          href="https://www.shopify.com/plus/solutions/headless-commerce"
          className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-800"
        >
          Learn more
        </a>
      </div>
    </div>
  )
}
