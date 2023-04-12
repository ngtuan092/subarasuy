import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import work from "../assets/work.jpg";
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .max(20, "Username must be at most 20 characters")
    .matches(/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});

function Login() {
  return (
    <div
      id="login-form"
      className="container mx-auto 2xl:px-60 xl:px-54 lg:px-30 md:px-10 mt-24 bg-transparent h-screen"
    >
      <div className="flex flex-row border-4 rounded-lg drop-shadow-xl bg-white">
        <img src={work} alt="work" className="w-1/2 h-full" />
        <Formik
          initialValues={{ username: "", password: "", remember: false }}
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
            <Form className="w-7/12">
              <div className="mx-auto w-7/12 text-4xl mb-3 mt-10">Login</div>
              <div className="mx-auto w-7/12">
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full h-10 border-2 rounded-lg px-3 mb-3"
                />
                {errors.username && touched.username && (
                  <div className="text-red-500">{errors.username}</div>
                )}
              </div>
              <div className="mx-auto w-7/12">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full h-10 border-2 rounded-lg px-3 mb-3"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500">{errors.password}</div>
                )}
              </div>
              {/* remember me check */}
              <div className="mx-auto w-7/12 flex flex-row justify-between">
                <div className="flex flex-row">
                  <Field
                    type="checkbox"
                    name="remember"
                    className="mt-2"
                    id="remember"
                  />
                  <label htmlFor="remember">
                    <div className="ml-2 mt-2">Remember me</div>
                  </label>
                </div>
                <div className="mt-2">
                  <a href="/forgot-password" className="text-blue-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mx-auto w-7/12">
                <button
                  type="submit"
                  className="w-full h-10 bg-blue-500 text-white rounded-lg"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>

              <div className="mx-auto w-7/12 mt-3">
                <a href="/sign-up" className="text-blue-500">
                  Don't have an account? Sign up
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
