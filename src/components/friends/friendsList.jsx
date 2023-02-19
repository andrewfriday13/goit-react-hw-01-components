import { Friends } from "./friends"

export const FriendListItem = ({ items }) => {
  return (
    <ul className="friend-list">
      {items.map(item => (
        < li key = { item.id } >
        <Friends item={item} />
        </li>
      ))}
</ul>
)
}