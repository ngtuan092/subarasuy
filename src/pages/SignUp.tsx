import React from "react";
import "./SignUp.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Alert, Button } from "antd";
import work from "../assets/work.jpg";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .max(20, "Username must be at most 20 characters")
    .matches(/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),

  useremail: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .max(50, "Email must be at most 50 characters")
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, "Email is invalid"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .min(6, "Confirm Password must be at least 6 characters")
    .max(20, "Confirm Password must be at most 20 characters")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
function SignUp() {
  const navigate: any = useNavigate();
  return (
    <div
      id="sign-up-form"
      className="container mx-auto 2xl:px-60 xl:px-54 lg:px-30 md:px-10 mt-24 bg-transparent h-screen"
    >
      <div className="grid grid-cols-2 gap-4 border-4 rounded-lg drop-shadow-xl bg-white">
        <Formik
          initialValues={{
            username: "",
            password: "",
            confirmPassword: "",
            useremail: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 5000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <div className="mx-auto w-7/12 text-4xl mb-3 mt-10">Sign Up</div>
              <div className="flex flex-col">
                <div className="field-container">
                  <label
                    htmlFor="username"
                    className="text-2XS text-lime-900 pb-1"
                  >
                    Username:
                  </label>
                  <Field
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter your username..."
                    className="focus:outline-none bg-transparent"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="field-container">
                  <label
                    htmlFor="useremail"
                    className="text-2xs text-lime-900 pb-1"
                  >
                    Email:
                  </label>
                  <Field
                    type="email"
                    name="useremail"
                    placeholder="Enter your email..."
                    className="focus:outline-none bg-transparent"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="field-container">
                  <label
                    htmlFor="password"
                    className="text-2xs text-lime-900 pb-1"
                  >
                    Password:
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password..."
                    className="focus:outline-none bg-transparent"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="field-container">
                  <label
                    htmlFor="confirmPassword"
                    className="text-2xs text-lime-900 pb-1"
                  >
                    Confirm Password:
                  </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Enter your password again..."
                    className="focus:outline-none bg-transparent"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.username ||
                errors.password ||
                errors.confirmPassword ? (
                  <Alert
                    className="p-2 w-5/12 mx-auto border-none bg-transparent text-red-500"
                    description={
                      errors.username ||
                      errors.password ||
                      errors.confirmPassword
                    }
                    type="warning"
                    showIcon
                  />
                ) : (
                  <div className="p-2 w-5/12 mx-auto border-none bg-transparent">
                    <br></br>
                  </div>
                )}
                <Button
                  loading={isSubmitting}
                  className="w-4/12 mx-auto text-white bg-lime-900 hover:bg-lime-700"
                  htmlType="submit"
                >
                  Submit
                </Button>
                <div className="text-2xs text-lime-900 text-center mt-3 mb-2">
                  Already have an account?{" "}
                  <span
                    className="text-lime-900 cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div
          style={{ backgroundImage: `url(${work})` }}
          className="bg-cover"
        ></div>
      </div>
    </div>
  );
}

export default SignUp;
