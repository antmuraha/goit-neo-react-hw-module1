import userData from './data/userData.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json'; 

import Profile from './components/Profile';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import './App.css';

function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
