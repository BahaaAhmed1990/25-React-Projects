import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [currntImage, setCurrentImages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      let res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      let data = await res.json();
      if (data) {
        setImages(data);
        setLoading(false);
        console.log(data);
      }
    } catch (error) {
      setLoading(false);
      setErr(error);
      console.log(error);
    }
  }
  function handlePrev() {
    setCurrentImages(currntImage === 0 ? images.length - 1 : currntImage - 1);
  }
  function handleNext() {
    setCurrentImages(currntImage === images.length - 1 ? 0 : currntImage + 1);
  }
  useEffect(() => {
    if (url) {
      fetchImages(url);
    }
  }, [url]);
  if (loading === true) {
    return <div>Loading</div>;
  }
  if (err !== null) {
    return <div>{err}</div>;
  }

  return (
    <div className="image-slider">
      <BsArrowLeftCircleFill
        className="arrow left-arrow"
        size={30}
        onClick={handlePrev}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              src={imageItem.download_url}
              alt={imageItem.download_url}
              key={imageItem.id}
              className={
                currntImage === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow right-arrow"
        size={30}
        onClick={handleNext}
      />
      <span className="indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImages(index)}
                className={
                  currntImage === index
                    ? "indicator-btn indicator-btn-active"
                    : "indicator-btn"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
