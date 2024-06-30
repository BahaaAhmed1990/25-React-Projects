import React, { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClickHook";

function UseOutsideClickHookExample() {
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            assumenda. Ut magni voluptas minus distinctio quas illo, quibusdam
            obcaecati alias.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}

export default UseOutsideClickHookExample;
