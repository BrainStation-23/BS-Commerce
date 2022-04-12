import type { GetServerSideProps, NextPage } from "next";

import { ProductContext } from "../context/Product/productContext";

import { useAuth } from "../context/Auth/auth.context";
import { useContext } from "react";
import { ProductContextType } from "../@types/product";

const TestPage: NextPage = (props) =>{

  const { authData, setAuthData } = useAuth()
  const { products, saveProduct, updateProduct } = useContext(ProductContext) as ProductContextType

  return (
    <div>
      <h1>Test Page</h1>
      <p>
        This is a test page.
      </p>
      <p>
        This page is rendered on the server.
      </p>
      <p>
        The authData is: {JSON.stringify(authData)}
      </p>
      <p>
        The products are: {JSON.stringify(products)}
      </p>
      <button onClick={() => {
        setAuthData({
          isLoggedIn: !authData.isLoggedIn,
          user: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10)
        })
      }}>
        Set authData
      </button>
      <button onClick={() => {
        saveProduct({
          id: "arandomstring",
          name: "Expensive Product",
          description: "This is a product that is expensive",
          price: 100,
          currency: "USD",
          images: [
            {
              url: "https://picsum.photos/200",
              alt: "Expensive Product",
              priority: 1,
            },
          ],
          options: [
            {
              
              name: "Color",
              values: ["red", "blue", "green"],
            },
            {
              name: "Size",
              values: ["small", "medium", "large"],
            },
          ],
          isAvailable: true,
          isLowInStock: false,
          isBackorder: false,
          isSoldOut: false,
          isOnSale: true,
          isNew: false,
          isGift: false,
          isFreeShipping: false,
          isInStock: true
        })
      }
      }>
        Save Product
      </button>
      <button onClick={() => {
        updateProduct(0)
      }
      }>
        Update Product
      </button>
    </div>
  )

}

export default TestPage