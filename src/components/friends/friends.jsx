import PropTypes from 'prop-types';
import css from "./style.module.css"
import style from 'styled-components'

export const Friends = ({ item:{name, avatar, isOnline} }) => {
  return (
    <div>
      <p className={
      isOnline ? css.isOnline : css.isOffline
      }></p>
      <img src={avatar} width='50' />
      <span>{name}</span>
    </div>
  )
}

Friends.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }
  )
}

