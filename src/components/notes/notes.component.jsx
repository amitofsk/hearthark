import React from "react";

import "./notes.styles.scss";

const Notes = () => {
  return (
    <article className="notes container">
      <p className="heading-secondary">Notes</p>
      <ul className="notes__list">
        <li className="notes__item">
          - this patient needs to get full amount of test
        </li>
        <li className="notes__item">
          - this patient needs to get full amount of test
        </li>
        <li className="notes__item">- allergic reaction to penicillin</li>
        </ul>
        <p id="sfOut">Welcome</p>
          <br></br>
          <button type="button" id="sfButton" onClick={()=>sfFunction()}>Go </button>
          <br></br>
          <input type="text" id="sfName" defaultValue="Isaac" />
          <br></br>
          <input type="text" id="sfToken" defaultValue="Token"  />
          </article>
  );
};

function sfFunction() {
        var outStr="This feature is coming soon ...";
        outStr=outStr+document.getElementById('sfToken').value;
        document.getElementById('sfOut').innerHTML=outStr;
}



export default Notes;

