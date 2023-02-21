import PropTypes from 'prop-types';
import css from "./style.module.css"


export const Friends = ({ item:{name, avatar, isOnline} }) => {
  return (
    <div className={css.friend_item}>
      
      <img src={avatar} alt="user" width='50' />
      <span className={css.name_status}>{name}<p className={
      isOnline ? css.isOnline : css.isOffline
      }></p></span>
      
    </div>
  )
}


Friends.propTypes ={
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }

