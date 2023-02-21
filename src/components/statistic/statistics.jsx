import css from "../statistic/statistic.module.css"

export const Statistics = ({ items}) => {
  return (
    <div className={css.stats}>
   <h2 className={css.title}>Upload stats</h2>
      <ul className={css.stats_list}>
        {items.map(item => (
          <li className={css.stats_item} key={item.id}>
            <span>{item.label} </span>
            <span>{item.percentage }%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}