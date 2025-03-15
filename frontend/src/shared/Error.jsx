import React from "react";
import { Radio } from "react-loader-spinner";

function Error({ error }) {
  return (
    <div className="loader" style={{ flexDirection: "column" }}>
      <Radio
        visible={true}
        height="80"
        width="80"
        color="#FF0000" // تغییر رنگ به قرمز
        ariaLabel="radio-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <h4 className="h4">{error} خطا:</h4>
    </div>
  );
}

export default Error;
