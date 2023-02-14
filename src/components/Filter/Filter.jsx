import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onFilter }) => (
  <div>
    <label className={css.filterLabel}>Find contacts by Name </label>
    <input
      className={css.filterName}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={onFilter}
    />
  </div>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onFilter: propTypes.func.isRequired,
};
