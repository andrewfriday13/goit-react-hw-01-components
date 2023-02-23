import css from "../statistic/statistic.module.css"
import PropTypes from 'prop-types';


export const Statistics = ({items, title}) => {
  return (
    <div className={css.stats}>
   <h2 className={css.title}> {title}</h2>
      <ul className={css.stats_list}>
        {items.map(({label, percentage,id}) => (
          <li className={css.stats_item} key={id}>
            <span>{label} </span>
            <span>{percentage }%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}