import React from "react";
import { GrDocumentText } from "react-icons/gr";

import "./documents.styles.scss";

const Documents = () => {
  return (
    <article className="documents container">
      <p className="heading-secondary">files / documents</p>
      <ul>
        <li className="documents__item">
          <div className="documents__pdf">
            <div>
              <GrDocumentText /> blood tests.pdf
            </div>
            <span>27kb</span>
          </div>
        </li>

        <li className="documents__item">
          <div className="documents__pdf">
            <div>
              <GrDocumentText /> medical prescriptions.pdf
            </div>
            <span>27kb</span>
          </div>
        </li>

        <li className="documents__item">
          <div className="documents__pdf">
            <div>
              <GrDocumentText /> X-Ray results.pdf
            </div>
            <span>27kb</span>
          </div>
        </li>
      </ul>
    </article>
  );
};

export default Documents;
