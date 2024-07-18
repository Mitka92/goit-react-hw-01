import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul>
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
