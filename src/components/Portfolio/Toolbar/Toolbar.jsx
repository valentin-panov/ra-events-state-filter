import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css';
import ToolbarItem from './ToolbarItem/ToolbarItem';

function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  const filtersId = filters.map((filter) => ({ filter, id: Math.random() }));
  return (
    <div className={'form_radio_btn'}>
      {filtersId.map((filterItem) => (
        <ToolbarItem
          key={filterItem.id}
          title={filterItem.filter}
          selected={selected}
          onClick={onSelectFilter}
        />
      ))}
    </div>
  );
}

Toolbar.propTypes = {};

export default Toolbar;
