import React from "react";

import Sidebar from "../../components/sidebar/sidebar.component";
import Form from "../../components/form/form.component";
import Patient from "../../components/patient/patient.component";
import Notes from "../../components/notes/notes.component";
import Documents from "../../components/documents/documents.component";

import "./single-patient-page.styles.scss";

const SinglePatientPage = () => {
  return (
    <>
      <section className="doctor-page">
        <Sidebar />
        <div className="content">
          <Form />
          <Patient />
          <Notes />
          <Documents />
        </div>
      </section>

      <div>
        <h1>Doctor Page !!!</h1>
        <audio id="audiox" controls>
          <source id="mysource" src="sonar.ogg" type="audio/mpeg"></source>
        </audio>
        <br></br>
        <p id="helloDoc">Enter the patient Name </p>
        <br></br>
        <p id="btest">Welcome</p>
        <br></br>
        <input type="text" id="nameWanted" name="Isaac"></input>
        <br></br>
        <button
          type="button"
          onClick={() =>
            readPatientFile(
              1,
              document.getElementById("nameWanted"),
              document.getElementById("btest")
            )
          }
        >
          Get Patient Info File
        </button>
        <br></br>
        <button type="button" onClick={() => switchMusic()}>
          Load patient music File
        </button>
        <br></br>
      </div>
    </>
  );
};

//This function is taken from: https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        document.getElementById("btest").innerHTML = allText;
        //    alert(allText);
      }
    }
  };
  rawFile.send(null);
}

function cFunction() {
  var mystring = "x";
  mystring = readTextFile("patientData.txt");
}

function switchMusic() {
  //document.getElementById('btest').innerHTML="New music file";
  var audio = document.getElementById("audiox");
  var source = document.getElementById("mysource");
  //source.src="bark.ogg";
  readPatientFile(
    8,
    document.getElementById("nameWanted"),
    document.getElementById("btest")
  );
  var mystring = "";
  mystring = mystring + document.getElementById("btest").innerHTML;
  document.getElementById("btest").innerHTML = mystring;
  source.src = mystring;
  audio.load();
}

function readPatientFile(recordPiece, elementName, elementOut) {
  //
  //OK, for now I'm hard coding this...
  //This needs to be fixed to work more generally...
  var nameString = elementName.value;
  //var allData=readTextFile("patientData.txt");
  var temp = readTextFile("patientData.txt");
  var allData = elementOut.innerHTML;
  var strStartPoint = 0;
  var strEndPoint = 10;
  var rowData1 = "";
  var rowData2 = "";
  var rowData3 = "";
  var correctData = "";
  //strEndPoint=allData.indexOf(';');
  rowData1 = allData.substr(0, 43);
  rowData2 = allData.substr(45, 43);
  rowData3 = allData.substr(90, 43);
  //Again...  I'm hard coding this for now...
  if (rowData1[0] == nameString[0]) {
    correctData = rowData1;
  } else if (rowData2[0] == nameString[0]) {
    correctData = rowData2;
  } else if (rowData3[0] == nameString[0]) {
    correctData = rowData3;
  } else {
    correctData = "Not Found";
  }
  if (recordPiece == 1) {
    //Show total record
  }
  if (recordPiece == 2) {
    //Pick off only the name
    correctData = correctData.substr(0, 5);
  }
  if (recordPiece == 3) {
    //Pick off only the city
    correctData = correctData.substr(7, 9);
  }
  if (recordPiece == 4) {
    //Pick off only Age
    correctData = correctData.substr(18, 2);
  }
  if (recordPiece == 5) {
    //Pick off only blood type
    correctData = correctData.substr(22, 1);
  }
  if (recordPiece == 6) {
    //Pick off only height in cm
    correctData = correctData.substr(24, 4);
  }
  if (recordPiece == 7) {
    //Pick off only weight in kg
    correctData = correctData.substr(30, 2);
  }
  if (recordPiece == 8) {
    //Pick off only file name
    correctData = correctData.substr(34, 8);
  }
  elementOut.innerHTML = correctData;
}

export default SinglePatientPage;
