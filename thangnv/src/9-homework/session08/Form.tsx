import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});
function From() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
      const url = "https://63528f81a9f3f34c374166f0.mockapi.io/users";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });
  return (
    <form
      style={{ width: "100%", textAlign: "center" }}
      onSubmit={formik.handleSubmit}
    >
      <div
        style={{
          width: "30%",
          backgroundColor: "ButtonFace",
          margin: "20px 35%",
        }}
      >
        <h3>Post vao database</h3>
        <div style={{ marginTop: "20px" }}>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{formik.errors.name ?? null}</p>
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default From;
