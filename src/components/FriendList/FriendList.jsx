import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
function FriendList({ friends }) {
  return (
    <ul className={css["friends-list"]}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              isOnline={friend.isOnline}
              name={friend.name}
              avatar={friend.avatar}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default FriendList;
