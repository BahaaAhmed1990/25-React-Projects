import React, { useEffect, useState } from "react";
import "./styles.css";

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScroll() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  console.log(data, loading);

  if (errorMsg) {
    return <div>Oops ! something went wrong</div>;
  }
  if (loading) {
    return <div>Loading Data... Please wait.</div>;
  }
  return (
    <div className="scroll-container">
      <div className="heading-container">
        <h1>Scroll Indicator</h1>
        <div className="scroll-progrss-tracking-container">
          <div
            className="scroll-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="content">
        {data && data.length > 0 ? (
          <div>
            {data.map((dataItem, index) => (
              <p key={index}>{dataItem.title}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
