import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function GeneralForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
  });
  console.log("asda", values);
  return (
    <form>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="Email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Email"
        />
      </div>

      <div className="inputDiv">
        <label>Age</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Please enter your age"
        />
      </div>
      <div className="inputDiv">
        <label>Password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Please enter your password"
        />
      </div>
      <div className="inputDiv">
        <label>Password</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder="Please enter your password again"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default GeneralForm;
