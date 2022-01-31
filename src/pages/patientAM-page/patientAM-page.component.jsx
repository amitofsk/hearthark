import React from "react";
/* You may have to do the following to get started on a new machine
 * npm install react scripts
 * npm install
 * npm run start
 *
 *
 */

//import AudioRecorder from "node-audiorecorder";
/*This first Button function successfully sends a http POST to my server 
 */
function bFunction() {
        let mycolor='b';	
	mycolor=document.getElementById("colorinput").value;
	mycolor='myvalue='+mycolor;
	
	if(document.getElementById("btest").innerHTML==="A")
	  {document.getElementById("btest").innerHTML="B";}
	else
	{
	  document.getElementById("btest").innerHTML="A";
	}
	document.getElementById("btest").innerHTML=mycolor;
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type':'application/x-www-form-urlencoded'},
		body: mycolor
	};
	fetch('https://infinite-scrubland-41520.herokuapp.com/color', requestOptions)
	.then(response =>response.json())
	.then(data =>this.setState({postId:data.id}));
}

/*When you press this button, it should record audio locally 
 * I'm following the example at https://www.npmjs.com/package/node-audiorecorder
 *Here's another ref: https://developers.google.com/web/fundamentals/media/recording-audio
 *
 * */
function cFunction() {
	
}

/*When you press this button, it should send an audio recording to our server */
function dFunction() {

}


function eFunction() {

}

const PatientAMPage = () => {
  return (
    <div>
      <h1>Andy Practice Page</h1>
      <p id="btest"> Hello </p>
	  <input type="text" id="colorinput" name="gray"></input>
	  <br></br>
	  <button  type="button" onClick={() => bFunction()}>Send simple POST to Andys other heroku server </button>

	  <br></br>
          <button type="button" onClick={() => cFunction()}>Record audio... not yet written </button>
          <br></br>
	  <button type="button" onClick={() => dFunction()}>Send audio to db on our server... not yet written </button>
	  <br></br>
	  <button type="button" onClick={() => eFunction()}>Send data to skyflow vault ... not yet written </button>

	  </div>





  );
};

export default PatientAMPage;
