import React from "react";

import { FiSearch } from "react-icons/fi";

import "./form.styles.scss";

const Form = () => {
  return (
    <form className="form">
      <input className="form__input" type="text" placeholder="Search..." />
      <button className="btn-search">
        <FiSearch className="btn-search__icon" />
      </button>
    </form>
  );
};

export default Form;
