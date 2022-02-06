import React from "react";

import { FiSearch } from "react-icons/fi";

import "./form.styles.scss";
export var formString="Jenny";
//document.getElemenById("fName").addEventListener("input", function(e) {formString=document.getElementById("fName").value;});
class Form extends React.Component{
	render() {
           return (
            <form className="form">
      <input className="form__input" type="text" placeholder="Search..." id="fName" name="II" />
      <button className="btn-search" type="button" onClick={()=>formFunction()}>
        <FiSearch className="btn-search__icon" />
      </button>
    </form>

	   
	   );
      };

} 

function formFunction(){
        formString=document.getElementById("fName").value;
	document.getElementById("fTest").innerHTML=formString;

}
export default Form;
