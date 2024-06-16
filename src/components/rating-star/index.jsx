import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function RatingStar({ noOfStars = 5 }) {
  const [star, setStar] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setStar(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
    console.log(hover);
  }
  function handleMouseLeave() {
    setHover(star);
  }
  return (
    <div>
      {[...Array(noOfStars)].map((__, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || star) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
