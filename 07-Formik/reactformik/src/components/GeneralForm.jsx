import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function GeneralForm() {
  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values, action) => {
      if (values.email === "qwerty@gmail.com") {
        toast.error("This email already registered !");
        return;
      }
      console.log("values", values);
      console.log("action", action);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      toast.success("Login successful!");
      action.resetForm();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(), handleSubmit(e);
      }}
    >
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          placeholder="Email"
          className={errors.email && touched.email ? "input-error" : ""}
          name="email"
        />
      </div>
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <div className="inputDiv">
        <label>Age</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          id="age"
          name="age"
          placeholder="Please enter your age"
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          name="password"
          placeholder="Please enter your password"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
      </div>
      <div className="inputDiv">
        <label>Password</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Please enter your password again"
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button
        className={isSubmitting ? "clickedButton" : "button"}
        disabled={isSubmitting}
        type="submit"
      >
        Submit
      </button>
      <Link to="/portal" className="toHomePage">
        {" "}
        Go to Portal &gt;&gt;
      </Link>
    </form>
  );
}

export default GeneralForm;
