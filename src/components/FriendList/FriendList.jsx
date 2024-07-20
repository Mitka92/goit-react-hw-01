import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
import clsx from "clsx";

function FriendList({ friends }) {
  return (
    <ul className={clsx(css["friends-list"])}>
      {friends.map((friend) => {
        return (
          <li className={clsx(css["friend-item"])} key={friend.id}>
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
