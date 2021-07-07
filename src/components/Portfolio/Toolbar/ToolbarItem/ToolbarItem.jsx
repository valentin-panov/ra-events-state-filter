import React from 'react';
import PropTypes from 'prop-types';
import './ToolbarItem.css';

function ToolbarItem(props) {
  const { title, selected, onClick } = props;
  const checked = selected === title ? true : false;
  return (
    <>
      <input
        type='radio'
        id={'radio' + title}
        name='filter'
        onClick={onClick}
        defaultChecked={checked}
        data-key={title}
        className={'toolbarItem'}
      />
      <label htmlFor={'radio' + title}>{title}</label>
    </>
  );
}

ToolbarItem.propTypes = {};

export default ToolbarItem;
