import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.Module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.discr}>
        <img src={avatar} alt={name} className={styles.avatar} width="200" />
        <p className={styles.name}>{name}</p>
        <p className={styles.dis}>@{tag}</p>
        <p className={styles.dis}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(stats).map((stat) => {
          return (
            <li key={stat[0]} className={styles.marc}>
              <span className={styles.label}>{stat[0]}</span>
              <span className={styles.quantity}>{stat[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
export default Profile;
