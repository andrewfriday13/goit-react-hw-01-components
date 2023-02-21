

import PropTypes from 'prop-types';

export const Transaction = ({ items }) => {
  return (
    <div>
      <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </thead>
        <tbody>
        {items.map(({id, type, amount, currency}) => {
          return(
          <tr
            key={id}
            className="">
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        )
        })}
       </tbody>
</table>
    </div>
  )
}


Transaction.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    )
}