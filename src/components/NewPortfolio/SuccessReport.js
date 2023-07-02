import React from "react";
import success from "../../assets/success.svg";

function SuccessReport() {
  return (
    <>
      <h3>Customer’s ID: #012346789</h3>
      <div>
        <img src={success} alt="pass" />
        <p>
          Congratulations, borrower is not likely to default on this loan amount
        </p>
      </div>
    </>
  );
}

export default SuccessReport;
