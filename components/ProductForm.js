import { useState, useContext } from 'react'
import { formatter } from '../utils/helpers'
import ProductOptions from './ProductOptions'
import { CartContext } from '../context/shopContext'

export default function ProductForm({ product }) {
  const { addToCart } = useContext(CartContext)

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {}

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value
    })

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    }
  })
  // A lot of stores create a non dynamic option selector

  // Default values for when the page loads
  const defaultValues = {}
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0]
  })

  // State Creation

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value }
    })

    const selection = {
      ...selectedOptions,
      [name]: value,
    }

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item)
      }
    })
  }

  return (
    <div className="flex w-full flex-col rounded-2xl p-4 shadow-lg md:w-1/3">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <span className="pb-3">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}{' '}
      </span>

      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      <button
        onClick={() => {
          addToCart(selectedVariant)
        }}
        className="mt-3 rounded-lg bg-black px-2 py-3 text-white hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  )
}
