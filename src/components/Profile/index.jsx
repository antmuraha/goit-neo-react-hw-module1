import styles from './index.module.css';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.userInfo}>
        <img className={styles.avatar} src={avatar} alt="User avatar" />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.value}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.value}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
