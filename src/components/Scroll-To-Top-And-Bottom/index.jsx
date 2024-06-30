import React, { useRef } from "react";
import useFetchHook from "../UseFetchHook/useFetchHook";

export default function ScrollToTopAndBottom() {
  const { loading, data, err } = useFetchHook(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
  if (err) {
    return <h1>Error</h1>;
  }
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <h1>scroll to top and bottom</h1>
      <h3>the top part of this page</h3>
      <button onClick={handleToBottom}>scroll to bottom</button>

      <ul>
        {data && data.products && data.products.length
          ? data.products.map((productItem) => (
              <li key={productItem.id}>{productItem.title}</li>
            ))
          : null}
      </ul>

      <button onClick={handleToTop}>scroll to top</button>
      <h3 ref={bottomRef}>the top part of this page</h3>
    </div>
  );
}
