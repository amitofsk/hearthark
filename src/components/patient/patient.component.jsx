import React from "react";
import "./patient.styles.scss";
import {isaac1, jenny1, sarah1} from "./patientData.jsx";

const Patient = () => {

  return (
    <article className="patient">
      <div className="patient__info-main">
        <div className="patient__img" />
        <h3 id='displayName'>ludmila sidorshina</h3>
        <span className="patient__email">something@gmail.com</span>
        <div className="patient__appointment-container">
          <span className="patient__appointment-text">appointments</span>
          <div className="appointment__container">
            <div className="appointment__past">
              <span className="appointment__num">5</span>
              <span>past</span>
            </div>
            <div className="appointment__upcoming">
              <span className="appointment__num">2</span>
              <span>upcoming</span>
            </div>
          </div>
        </div>
        <button className="btn--primary btn--patinet">send message</button>
      </div>

      <div className="patient__info">
        <div className="patient__info-group">
          <span className="patient__info-name">gender</span>
          <span className="patient__info-value">female</span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">birthday</span>
          <span className="patient__info-value">oct, 12, 1990</span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">phone number</span>
          <span className="patient__info-value">(062) 222-2222</span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">Height</span>
          <span className="patient__info-value"><p id="displayHeight">160</p></span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">city</span>
          <span className="patient__info-value"><p id="displayCity">berlin</p></span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">weight</span>
          <span className="patient__info-value"><p id="displayWeight">80</p></span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">registration date</span>
          <span className="patient__info-value">oct, 12, 1990</span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">member status</span>
          <span className="patient__info-value">active member</span>
        </div>
	  <div>
	  <button type="button" onClick={()=> updatePatientInfo('Sarah')}>Patient 1</button>
	  <br></br>
	  <button type="button" onClick={()=> updatePatientInfo('Jenny')}>Patient 2</button>
	  <br></br>
	  <button type="button" onClick={()=>updatePatientInfo('Isaac')}>Patient 3</button>
	  <br></br>
	  <audio id="audiox" controls>
	  <source id="mysource" src="sonar.ogg" type="audio/mpeg"></source>
	  </audio>
	  </div>
	  <div>
	  <p id="tempStorage" hidden>Yo</p>
	  </div>
	  </div>
    </article>
  );
};

/*
//This function is taken from: https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  var allText="";
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
         document.getElementById("tempStorage").innerHTML = allText;
        //    alert(allText);
      }
    }
  };
  rawFile.send(null);
}
*/
function updatePatientInfo(inName) {
  
   

   
  //OK, for now I'm hard coding this...
  //This needs to be fixed to work more generally...
//  var temp=readTextFile("patientData.txt");
  var nameString=inName;
  //var allData= document.getElementById('tempStorage').innerHTML;
  if(inName=='Jenny') {nameString=jenny1;}
  else if (inName=='Isaac') {nameString=isaac1;}
  else if (inName=='Sarah') {nameString=sarah1;};
  var allData=nameString;
  //document.getElementById('tempStorage').innerHTML=allData;
 
  var strStartPoint = 0;
  var strEndPoint = 10;
  var rowData1 = "";
  var rowData2 = "";
  var rowData3 = "";
  var correctData = "";
  var updatedName="";
  var updatedCity="";
  var updatedAge="";
  var updatedWeight="";
  var updatedHeight="";
  var updatedSound="";
  //strEndPoint=allData.indexOf(';');
  rowData1 = allData.substr(0, 43);
  rowData2 = allData.substr(45, 43);
  rowData3 = allData.substr(90, 43);
  //Again...  I'm hard coding this for now...
  if (rowData1[0] === nameString[0]) {
    correctData = rowData1;
  } else if (rowData2[0]=== nameString[0]) {
    correctData = rowData2;
  } else if (rowData3[0] === nameString[0]) {
    correctData = rowData3;
  } else {
    correctData = "Not Found";
  }
  updatedName=correctData.substr(0,5);
  updatedCity=correctData.substr(7,9);
  updatedAge=correctData.substr(18,2);
  updatedWeight=correctData.substr(30,2);
  updatedHeight=correctData.substr(24,4);
  updatedSound=correctData.substr(34,9);
  document.getElementById('displayName').innerHTML=updatedName;
  document.getElementById('displayCity').innerHTML=updatedCity;
  document.getElementById('displayWeight').innerHTML=updatedWeight;
  document.getElementById('displayHeight').innerHTML=updatedHeight;
  
  var audio=document.getElementById("audiox");
  var source=document.getElementById("mysource");
  source.src=updatedSound;
  audio.load();
  
}


export default Patient;
