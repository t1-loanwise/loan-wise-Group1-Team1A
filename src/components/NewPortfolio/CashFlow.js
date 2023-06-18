import React from "react";
import AnalysisHeader from "./AnalysisHeader";
import DollarIncome from "../../assets/DollarIncome.svg";
import DollarSpend from "../../assets/DollarSpend.svg";
import Activity from "../../assets/Activity.svg";
import Cash from "../../assets/moneys.svg";

function CashFlow() {
  const cashflowData = [
    {
      id: 1,
      Icon: { DollarIncome },
      Value: "N 520,000.00",
      Title: "Total Credit Turnover",
    },
    {
      id: 2,
      Icon: { DollarSpend },
      Value: "N 350,000.00",
      Title: "Total debit Turnover",
    },
    {
      id: 3,
      Icon: { Activity },
      Value: "81.98%",
      Title: "Account Activity",
    },
    {
      id: 4,
      Icon: { Cash },
      Value: "N 210,000.00",
      Title: "Average balance ",
    },
    {
      id: 5,
      Icon: { Cash },
      Value: "N 170,000.00",
      Title: "Current closing balance",
    },
    {
      id: 6,
      Icon: { DollarIncome },
      Value: "N 1,005,000.00",
      Title: "Average Credit",
    },
    {
      id: 7,
      Icon: { DollarIncome },
      Value: "N 980,000.00",
      Title: "Average Credit",
    },
  ];
  return (
    <>
      <AnalysisHeader text="Get the in-depth analysis of the cash flow, you can see how active the customer’s account is and the most frequent transactions." />
      <div>
        <p>Statement Period: Jun - Dec</p>
        <p>First day in Statement: 02, Jun, 2022 </p>
        <p>Last day in Statement: 30, Dec, 2022 </p>
        <p>Duration: 6 months</p>
      </div>
      {cashflowData.map((cashflow) => {
        return (
          <div key={cashflow.id}>
            <h3>{cashflow.Icon}</h3>
            <p>{cashflow.Value}</p>
            <p>{cashflow.Title}</p>
          </div>
        );
      })}
    </>
  );
}

export default CashFlow;
