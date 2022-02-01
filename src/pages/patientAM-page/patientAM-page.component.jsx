import React from "react";
import audioSong from "./cat.mp3"
class PatientAMPage extends React.Component{
	render() {
//const PatientAMPage = () => {
  return (
    <div>
      <h1>Andy Practice Page</h1>
		<audio id="audiox" controls>
	  		<source src={audioSong} type="audio/mpeg">
	  		</source>
	  	</audio>


	  </div>





  );
};
}
export default PatientAMPage;
