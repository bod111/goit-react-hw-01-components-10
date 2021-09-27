import React from "react"; //imr
import FriendList from "./friendList/FriendList";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";

import data from "../data";
import TransactionHistory from "./transactionHistory/TransactionHistory";

const App = () => {
  //  slr
  return (
    <>
      <Profile
        name={data.user.name}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}
      />
      {/* <Statistics statistic={data.statistical} title={"Upload stats"} /> */}
      <Statistics title="Upload stats" statistic={data.statistical} />;
      <Statistics statistic={data.statistical} />;
      <FriendList friends={data.friends} />
      <TransactionHistory transactions={data.transactions} />
    </>
  );
};

export default App;
//ccs
