import { useEffect, useState } from "react";
import getProducts from "~/apis/productapi";
import BestProduct from "./BestProduct";

function BestProductSection() {
  const [bestProduct, setBestProduct] = useState([]);
  function sortByFavoriteCount(products) {
    return products.sort((a, b) => b["favoriteCount"] - a["favoriteCount"]);
  }

  async function loadBestProduct() {
    let result;
    result = await getProducts();
    const { list } = result;
    setBestProduct(sortByFavoriteCount(list));
  }

  useEffect(() => {
    loadBestProduct();
  }, []);

  return (
    <div>
      {bestProduct.map((product) => {
        return (
          <BestProduct
            key={product.id}
            id={product.id}
            src={product.images}
            text={product.name}
            price={product.price}
            favorite={product.favoriteCount}
          />
        );
      })}
    </div>
  );
}

export default BestProductSection;
