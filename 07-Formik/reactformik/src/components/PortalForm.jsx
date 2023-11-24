import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const onSubmit = async (values, action) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  toast.success("Login successful!");
  action.resetForm();
};
function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          city: "",
          isAccepted: false,
        }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />
            <CustomSelect label="City" name="city" placeholder="Select city">
              <option value="">Please select city</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Izmir">Izmir</option>
              <option value="Ankara">Ankara</option>
              <option value="Bursa">Bursa</option>
            </CustomSelect>
            <CustomCheckBox type="checkbox" name="isAccepted" />
            <button
              className={isSubmitting ? "clickedButton" : "button"}
              disabled={isSubmitting}
              type="submit"
            >
              Submit
            </button>
            <Link to="/" className="toHomePage">
              {" "}
              &lt;&lt; Return to Home Page
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
