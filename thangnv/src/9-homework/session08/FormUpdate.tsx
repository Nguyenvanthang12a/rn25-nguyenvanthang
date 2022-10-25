import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});
function FormUpdate() {
  let params = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
      const url = "https://63528f81a9f3f34c374166f0.mockapi.io" + params.id;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("update success", json);
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
        <h3>Update name</h3>
        <p style={{ color: "red" }}>Hãy nhập name cần update</p>
        <div style={{ marginTop: "20px" }}>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{formik.errors.name ?? null}</p>
        </div>
        <button>Update</button>
      </div>
    </form>
  );
}

export default FormUpdate;
