import React from "react";
class PatientAMPage extends React.Component{
	render() {
//const PatientAMPage = () => {
  return (
    <div>
      <h1>Andy Practice Page</h1>
		<audio id="audiox" controls>
	  		<source id="mysource" src="sonar.ogg" type="audio/mpeg">
	  		</source>
	  	</audio>


	  <br></br>
	  <input type = "file" accept = "audio/*" capture id="recorder">
	  </input>
	  <br></br>
	  <p id = "btest"> Hello </p>
	  <br></br>
	  <button type="button" onClick={()=>bFunction()}>Test button</button>
	  <br></br>
	  <button type="button" onClick={()=>cFunction()}>Read patient data file</button>
	  <br></br>
	  <input type = "text" id="nameWanted" name="Isaac"></input>
	  <br></br> 
	  <button type="button" onClick={() => dFunction()}>Read info for patient entered above</button>
	  <br></br>
	  <button type="button" onClick={() => eFunction()}>Upload a file to the server</button>
	  <br></br>
	  <button type="button" onClick={() => fFunction()}>Switch music files </button>
	  <br></br>
       </div>





  );
};
}

function dFunction() {
       //
	//OK, for now I'm hard coding this...
	//This needs to be fixed to work more generally...
	var nameString=document.getElementById('nameWanted').value;
        //var allData=readTextFile("patientData.txt");
	var temp=readTextFile("patientData.txt");
	var allData=document.getElementById('btest').innerHTML;
	var strStartPoint=0;
	var strEndPoint=10;
	var rowData1="";
	var rowData2="";
	var rowData3="";
	var correctData="";
	//strEndPoint=allData.indexOf(';');
	rowData1=allData.substr(0, 41);
	rowData2=allData.substr(42,43);
	rowData3=allData.substr(86, 44);
        //Again...  I'm hard coding this for now...
	if(rowData1[0]==nameString[0]) {correctData=rowData1;}
	else if (rowData2[0]==nameString[0]){correctData=rowData2;}
	else if (rowData3[0]==nameString[0]){correctData=rowData3;}
	else {correctData="Not Found"};
	document.getElementById('btest').innerHTML=correctData;
}

function bFunction() {
	document.getElementById('btest').innerHTML="Yes";
}

function cFunction(){
	var mystring="x";
 	mystring=readTextFile("patientData.txt");

}

//This function is taken from: https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                    document.getElementById('btest').innerHTML=allText;
            //    alert(allText);
            }
        }
    }
    rawFile.send(null);
}


function eFunction() {

     document.getElementById('btest').innerHTML="Make sure to put file in public directory.... Not currently workint";
  /*
    const recorder = document.getElementById('recorder');
    const player = document.getElementById('audiox');

    document.getElementById("btest").innerHTML="Button pressed";

    const element2 = document.createElement("c");	
	const file3 = new Blob([document.getElementById('recorder').value], {type: 'text/plain'});
    
    element2.href = URL.createObjectURL(file3);
    element2.download = "myFile.ogg";
    document.body.appendChild(element2); // Required for this to work in FireFox
            element2.click();
*/	    
	    
}

function fFunction() {

	document.getElementById('btest').innerHTML="New music file";
	var audio= document.getElementById('audiox');
	var source=document.getElementById('mysource');
	source.src="bark.ogg";
	audio.load();
}

export default PatientAMPage;
