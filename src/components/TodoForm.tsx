import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { removeActive } from "../redux/slices/activeSlice";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slices/todosSlice";
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});
const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray">
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            addTodo({
              id: Math.floor(Math.random() * 1000),
              title: values.title,
              description: values.description,
              completed: false,
            })
          );
          resetForm();
          dispatch(removeActive());
        }}
      >
        {({ values, handleChange, errors, touched, resetForm }) => (
          <Form className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-full h-1/2">
              <Field
                name="title"
                placeholder="Title..."
                className="w-10/12 h-1/2 p-2 text-xl bg-transparent  rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-row items-center justify-center w-full my-2">
              <Field
                name="description"
                placeholder="Description..."
                className="w-10/12 h-1/2 p-2 bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              className="w-3/12 round-lg text-center bg-emerald-500 rounded-xl p-2 mb-1 hover:bg-emerald-600 cursor-pointer disabled:opacity-50"
              type="submit"
              disabled={errors.title || errors.description ? true : false}
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoForm;
