import React from "react";
import PropTypes from "prop-types";
import styles from "../Statistics.module.css";

const StatisticsItem = ({ stat }) => {
  return (
    <li className={styles.item}>
      <span className="label">{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}</span>
    </li>
  );
};
StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
export default StatisticsItem;
