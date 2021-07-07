import React from 'react';
import PropTypes from 'prop-types';
import './ProjectItem.css';

function ProjectItem(props) {
  const { img, category } = props;
  return (
    <li data-category={category} className={'projectItem'}>
      <img
        src={img}
        alt={'project title'}
        style={{
          width: `100%`,
        }}
      />
    </li>
  );
}

ProjectItem.propTypes = {};

export default ProjectItem;
