import React from "react";

const Input = ({
  id,
  name,
  type,
  placeholder,
  formik,
  value,
  touched,
  errors,
}) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={value}
      />
      {touched && errors ? (
        <span style={{ fontSize: "13px" }}>{errors}</span>
      ) : null}
    </>
  );
};

export default Input;
