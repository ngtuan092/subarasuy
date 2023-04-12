import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});
const TodoForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray">
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-full h-1/2">
              <Field
                name="title"
                placeholder="Title..."
                className="w-10/12 h-1/2 p-2 text-black text-xl bg-transparent  rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-row items-center justify-center w-full my-2">
              <Field
                name="description"
                placeholder="Description..."
                className="w-10/12 h-1/2 p-2 bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-3/12 round-lg text-center bg-emerald-500 rounded-xl p-2">
              Add
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoForm;
