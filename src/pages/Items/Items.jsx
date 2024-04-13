import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { axiosInstance } from "~/apis/axiosInstance";
import Header from "~/components/Items/Header/Header";
import BottomSection from "~/components/Items/Sections/BottomSection/BottomSection";
import Pagenation from "~/components/Items/Sections/Footer/Pagenation";
import TopSection from "~/components/Items/Sections/TopSection/TopSection";
import Swagger from "~/service/productApi.jsx";

function Items() {
  const [productList, setProductList] = useState([]);
  const [count, setTotalCount] = useState(0);
  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((response) => response.data)
      .then((data) => {
        setProductList(data?.list);
        setTotalCount(data?.totalCount);
      });
  }, []);
  return (
    <>
      <Header />
      <ItemsTag>
        <TopSection />
        <BottomSection />
        <Pagenation />
      </ItemsTag>
    </>
  );
}
Swagger();
export default Items;
export const ItemsTag = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: auto 16px;
`;
