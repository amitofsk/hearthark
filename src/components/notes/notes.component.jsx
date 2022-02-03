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
    </article>
  );
};

export default Notes;
