import React from "react";
import useFetchHook from "./useFetchHook";
import { RiH6 } from "react-icons/ri";

function UseFetchHookExample() {
  const { loading, data, err } = useFetchHook(
    "https://dummyjson.com/products",
    {}
  );
  console.log(loading, err, data);
  return (
    <div>
      <h1>UseFetchHook</h1>
      {loading ? <h4>Loading data</h4> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem, index) => (
            <h6 key={index}>{productItem.title}</h6>
          ))
        : null}
    </div>
  );
}

export default UseFetchHookExample;
