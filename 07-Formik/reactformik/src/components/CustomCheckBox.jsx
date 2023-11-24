import { useField } from "formik";
import React from "react";

function CustomCheckBox({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  console.log("meta", meta);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.error && meta.touched ? "input-error" : ""}
        />
        <span>I accept the terms of use</span>
      </div>
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckBox;
