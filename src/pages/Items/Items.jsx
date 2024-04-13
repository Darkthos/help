import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { axiosInstance } from "~/apis/axiosInstance";
import BestProductSection from "~/components/Items/BestProductSection";

function Items() {
  // const [productList, setProductList] = useState([]);
  // const [count, setTotalCount] = useState(0);
  // useEffect(() => {
  //   axiosInstance
  //     .get("/products")
  //     .then((response) => response.data)
  //     .then((data) => {
  //       setProductList(data?.list);
  //       setTotalCount(data?.totalCount);
  //       const loadProducts = data.list[0].images;
  //     });
  // }, []);
  return (
    <>
      <BestProductSection />
    </>
  );
}

export default Items;
export const ItemsTag = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: auto 16px;
`;
