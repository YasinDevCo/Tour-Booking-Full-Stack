import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loder() {
  return (
    <div className="loader">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#359efa" // تغییر رنگ به آبی موردنظر
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loder;
