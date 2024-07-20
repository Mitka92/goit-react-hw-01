import clsx from "clsx";
import css from "./FriendListItem.module.css";
import { FiWifi } from "react-icons/fi";
import { FiWifiOff } from "react-icons/fi";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img
        className={clsx(css["friend-image"])}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={clsx(css["friend-name"])}>{name}</p>
      <p
        className={clsx(css["friend-status"], {
          [css.online]: isOnline,
        })}
      >
        {isOnline ? (
          <>
            Online <FiWifi />
          </>
        ) : (
          <>
            Offline <FiWifiOff />
          </>
        )}
      </p>
    </div>
  );
}
export default FriendListItem;
