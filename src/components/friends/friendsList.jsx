import css from './style.module.css'

import { PropTypes } from "prop-types"

import { Friends } from "./friends"

export const FriendListItem = ({ items }) => {
  return (
    <ul className={css.friend_list}>
      {items.map(item => (
        < li className={css.friend_item} key = { item.id } >
        <Friends item={item} />
        </li>
      ))}
</ul>
)
}


FriendListItem.propTypes = {
items: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired,
    })
    )
};
