import * as Yup from "yup";
const regexRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;

export const basicSchema = Yup.object().shape({
  email: Yup.string("Please enter the information correctly")
    .email("Invalid email")
    .required("Please fill in this area"),
  age: Yup.number("Please enter a value in number format")
    .positive("Please enter positive value")
    .required("Please fill in this area"),
  password: Yup.string("Please enter the information correctly")
    .min(6, "at least 6 characters")
    .max(8, "maximum 8 characters")
    .matches(
      regexRule,

      "Please enter at least one uppercase letter, one lowercase letter and one number"
    )
    .required("Please fill in this area"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Please fill in this area"),
});

export const advancedSchema = Yup.object().shape({
  username: Yup.string("Please enter the information correctly")
    .min(3, "at least 3 characters")
    .required("Please fill in this area"),
  city: Yup.string()
    .oneOf(["Istanbul", "Izmir", "Ankara", "Bursa"], "Please select city")
    .required("Please select city"),

  isAccepted: Yup.boolean().oneOf([true], "You must accept the terms of use"),
});
