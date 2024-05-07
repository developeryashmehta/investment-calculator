import React from "react";
import { calculateInvestment, numberFormatter } from "../util/investment";

function ShowCalculation({ data }) {
  const result = calculateInvestment(data);
  const initialInvestment = result[0].valueEndofYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest </th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((yearData) => {
          const toatlInterest =
            yearData.valueEndofYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndofYear - toatlInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{numberFormatter.format(yearData.valueEndofYear)}</td>
              <td>{numberFormatter.format(yearData.interest)}</td>
              <td>{numberFormatter.format(toatlInterest)}</td>
              <td>{numberFormatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ShowCalculation;
