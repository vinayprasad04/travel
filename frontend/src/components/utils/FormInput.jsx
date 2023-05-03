import React from "react";

const FormInput = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  label,
  name,
  id,
  type,
  disabled,
}) => {
  return (
    <div className="form__group">
      <label className="form__label">{label}</label>
      <input
        className={errors && touched ? "form__input error" : "form__input"}
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        id={id}
        name={name}
        type={type}
        placeholder=""
        disabled={disabled}
      />
      {errors && touched && <p className="error-text">{errors}</p>}
    </div>
  );
};

export default FormInput;
