import css from "./styleProfile.module.css"
import PropTypes from 'prop-types';


export const Profile = ({
  username, tag, avatar, location,
  stats: { followers, views, likes }
 }) => {
  return (

     <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
            className={css.avatar}
            width='200'
    />
    <p className={css.user_name}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.stats_item}>
      <span className="label">Followers </span>
      <span className="quantity">{followers}</span>
    </li>
    <li className={css.stats_item}>
      <span className="label">Views </span>
      <span className="quantity">{views}</span>
    </li>
    <li className={css.stats_item}>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>

  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}

