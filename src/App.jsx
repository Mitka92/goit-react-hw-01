import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "../src/userData.json";
import friends from "../src/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Section>
        <Profile
          name={userData.username}
          tag={userData.tag}
          stats={userData.stats}
          image={userData.avatar}
          location={userData.location}
        />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}

export default App;
