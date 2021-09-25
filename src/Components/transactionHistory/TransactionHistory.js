import React from "react";
import PropTypes from "prop-types";
import stylesT from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
      <table className={stylesT.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({id, type, amount, currency} ) => {
          return (
            <tr key={id} >
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,   
        currency:PropTypes.string,
   })) 
}
export default TransactionHistory;
