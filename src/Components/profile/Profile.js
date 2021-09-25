import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.Module.css";

const Profile = ({ user }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.discr}>
        <img
          src={user.avatar}
          alt={user.name}
          className={styles.avatar}
          width="200"
        />
        <p className={styles.name}>{user.name}</p>
        <p className={styles.dis}>@{user.tag}</p>
        <p className={styles.dis}>{user.location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(user.stats).map((stat) => {
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
