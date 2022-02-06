import React from "react";
import {} from "fft-js";
import {} from "wavefile";

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
	  <input type="file" accept="audio/*" capture id="recorder">
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
	  <button type="button" onClick={()=>readPatientFile(1, document.getElementById('nameWanted'), document.getElementById('btest'))}>Read info for patient entered above</button>
	  <br></br>
	  <button type="button" onClick={() => eFunction()}>Upload a file to the server</button>
	  <br></br>
	  <button type="button" onClick={() => switchMusic()}>Switch music files </button>
	  <br></br>
          <br></br>
	  <br></br>
	  <p id="ptest">Testing</p>
	  <br></br>
	  <button type="button" onClick={()=>jFunction()}>SimpleGet</button>
	  <br></br>



       </div>





  );
};
}


function jFunction() {
        document.getElementById("ptest").innerHTML="Yes";
//        const A= require('arcsecond');
 //       const B=require('arcsecond-binary');
        //      var fs=require('fs');
        var fft=require('fft-js').fft;
        var WaveFile = require('wavefile').WaveFile;
        var signalX=[11,15,8,0];
        var bigX=fft(signalX);
        var xString=signalX[0];
        var maxValue=Math.max.apply(Math,signalX);
        var maxIndex=signalX.indexOf(maxValue);
        //wav.fromBuffer(myBuffer);
   //     const file =  new Blob([document.getElementById('recorder').value], {type: 'text/plain'});
        //var bufferPromise= file.arrayBuffer();
     //   var myBuffer;
      //  fetch(URL.createObjectURL(file)).then(res => myBuffer=res.arrayBuffer())

       // var wav=new WaveFile();
        //wav.fromBuffer(myBuffer);

        document.getElementById("ptest").innerHTML=maxIndex;





}




/*
 function httpGet(theUrl)
{
	var xmlHttp= new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false);
	xmlHttp.send(null);
	return xmlHttp.responseText;
}
*/
function hFunction(){

	
	
	
//	var myUrl="Access-Control-Allow-Origin: https://www.google.com";
//	var myUrl="https://www.google.com";
//	var outString=httpGet(myUrl);
//	document.getElementById("ptest").innerHTML=outString;

//	fetch("Access-Control-Allow-Origin: https://www.google.com")
//	.then(response=>response.json())
//	.then(data => document.getElementById("ptest").innerHTML=data.total);

	
}


//This function takes two elements. It Reads the file public/patientData.txt and saves the string in this element.
//
function readPatientFile(recordPiece, elementName, elementOut) {
       //
	//OK, for now I'm hard coding this...
	//This needs to be fixed to work more generally...
	var nameString=elementName.value;
        //var allData=readTextFile("patientData.txt");
	var temp=readTextFile("patientData.txt");
	var allData=elementOut.innerHTML;
	var strStartPoint=0;
	var strEndPoint=10;
	var rowData1="";
	var rowData2="";
	var rowData3="";
	var correctData="";
	//strEndPoint=allData.indexOf(';');
	rowData1=allData.substr(0, 43);
	rowData2=allData.substr(45,43);
	rowData3=allData.substr(90, 43);
        //Again...  I'm hard coding this for now...
	if(rowData1[0]==nameString[0]) {correctData=rowData1;}
	else if (rowData2[0]==nameString[0]){correctData=rowData2;}
	else if (rowData3[0]==nameString[0]){correctData=rowData3;}
	else {correctData="Not Found"};
	if(recordPiece==1)
	{
	//Show total record
	}
	if(recordPiece==2) 
	{
		//Pick off only the name
		correctData=correctData.substr(0, 5);
	}
	if(recordPiece==3)
	{
		//Pick off only the city
		correctData=correctData.substr(7,9);
	}
	if(recordPiece==4) {
		//Pick off only Age
		correctData=correctData.substr(18,2);
	}
	if(recordPiece==5) {
		//Pick off only blood type
		correctData=correctData.substr(22,1);
	}
	if(recordPiece==6) {
		//Pick off only height in cm
		correctData=correctData.substr(24,4);
	}
	if(recordPiece==7) {
		//Pick off only weight in kg
		correctData=correctData.substr(30,2);
	}
	if(recordPiece==8)
	{
		//Pick off only file name
		correctData=correctData.substr(34,9);
	}
	elementOut.innerHTML=correctData;
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

//Eventually this function will Let the user download a file. This function currently isn't working.
//See ref https://stackoverflow.com/questions/61237355/how-to-save-my-input-values-to-text-file-with-reactjs
function eFunction() {

     document.getElementById('btest').innerHTML="Make sure to put file in public directory.... Not currently workint";
  
    //const recorder = document.getElementById('recorder');
    //const player = document.getElementById('audiox');

    document.getElementById("btest").innerHTML="Button pressed";

    const element2 = document.createElement("c");	
    const file3 = new Blob([document.getElementById('recorder').value], {type: 'text/plain'});
    
    element2.href = URL.createObjectURL(file3);
    element2.download = "myFile.txt";
    document.body.appendChild(element2); // Required for this to work in FireFox
    element2.click();
    document.getElementById("btest").innerHTML="HERE";
	    
}

function switchMusic() {

	//document.getElementById('btest').innerHTML="New music file";
	var audio= document.getElementById('audiox');
	var source=document.getElementById('mysource');
	//source.src="bark.ogg";
	readPatientFile(8, document.getElementById('nameWanted'), document.getElementById('btest'));
	var mystring="";;
	mystring=mystring+document.getElementById('btest').innerHTML;
	document.getElementById('btest').innerHTML=mystring;
	source.src=mystring;
	audio.load();
}

export default PatientAMPage;
