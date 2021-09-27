import React from "react";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";
import FrendListItem from "./frendListItem/FrendListItem";
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => {
        return <FrendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
export default FriendList;
