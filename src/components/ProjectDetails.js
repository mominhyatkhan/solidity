import React from "react";
import "./ProjectDetails.css";

export const ProjectDetails = (props) => {
  return (
    <div>
      <h1>Employer Details</h1>
      <table className="table-format">
        <thead>
          <tr>
            <th>Sr #</th>
            <th>TITLE</th>
            <th>AMOUNT</th>
            <th>UNLOCKED</th>
            <th>PAID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>text1.0</td>
            <td>text1.1</td>
            <td>text1.2</td>
            <td>text1.3</td>
            <td>text1.4</td>
          </tr>
          <tr>
            <td>text2.1</td>
            <td>text2.2</td>
            <td>text2.3</td>
          </tr>
          <tr>
            <td>text3.1</td>
            <td>text3.2</td>
            <td>text3.3</td>
          </tr>
          <tr>
            <td>text3.1</td>
            <td>text3.2</td>
            <td>text3.3</td>
          </tr>
          <tr>
            <td>text3.1</td>
            <td>text3.2</td>
            <td>text3.3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
