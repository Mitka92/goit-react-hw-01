import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css["profile-container"]}>
      <div className={css["profile-info"]}>
        <img className={css["profile-img"]} src={image} alt="User avatar" />
        <p className={css["profile-info-name"]}>{name}</p>
        <p className={css["profile-info-text"]}>@{tag}</p>
        <p className={css["profile-info-text"]}>{location}</p>
      </div>
      <ul className={css["profile-stats-list"]}>
        <li className={css["profile-stats-item"]}>
          <span>Followers</span>
          <span className={css["profile-stats-count"]}>{stats.followers}</span>
        </li>
        <li className={css["profile-stats-item"]}>
          <span>Views</span>
          <span className={css["profile-stats-count"]}>{stats.views}</span>
        </li>
        <li className={css["profile-stats-item"]}>
          <span>Likes</span>
          <span className={css["profile-stats-count"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
