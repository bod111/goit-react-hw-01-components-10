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
      <Profile user={data.user} />
      <Statistics statistic={data.statistical} title={"Upload stats"} />
      <FriendList friends={data.friends} />
      <TransactionHistory transactions={data.transactions} />
    </>
  );
};

export default App;
//ccs
