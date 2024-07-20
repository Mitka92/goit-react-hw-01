import css from "./Profile.module.css";
import clsx from "clsx";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={clsx(css["profile-container"])}>
      <div className={clsx(css["profile-info"])}>
        <img
          className={clsx(css["profile-img"])}
          src={image}
          alt="User avatar"
        />
        <p className={clsx(css["profile-info-name"])}>{name}</p>
        <p className={clsx(css["profile-info-text"])}>@{tag}</p>
        <p className={clsx(css["profile-info-text"])}>{location}</p>
      </div>
      <ul className={clsx(css["profile-stats-list"])}>
        <li className={clsx(css["profile-stats-item"])}>
          <span>Followers</span>
          <span className={clsx(css["profile-stats-count"])}>
            {stats.followers}
          </span>
        </li>
        <li className={clsx(css["profile-stats-item"])}>
          <span>Views</span>
          <span className={clsx(css["profile-stats-count"])}>
            {stats.views}
          </span>
        </li>
        <li className={clsx(css["profile-stats-item"])}>
          <span>Likes</span>
          <span className={clsx(css["profile-stats-count"])}>
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
