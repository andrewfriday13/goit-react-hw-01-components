import css from "./styleProfile.module.css"

export const Profile = ({
  username, tag, avatar, location,
  stats: { followers, views, likes }
 }) => {
  return (
    <div>
     <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
            className="avatar"
            width='200'
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className="label">Followers </span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views </span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
    </div>
  )
}