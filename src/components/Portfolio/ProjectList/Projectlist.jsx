import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem/ProjectItem';
import './ProjectList.css';

function Projectlist(props) {
  const { projects } = props;
  const projectsId = projects.map((project) => ({
    project,
    id: Math.random(),
  }));

  const chunks = 3;
  const splitArr = sliceIntoChunks(projectsId, chunks);

  return (
    <div className={'projectListContainer'}>
      <ul className={'projectList'}>
        {splitArr[0].map((item) => (
          <ProjectItem
            key={item.id}
            img={item.project.img}
            category={item.project.category}
          />
        ))}
      </ul>
      <ul className={'projectList'}>
        {splitArr[1].map((item) => (
          <ProjectItem
            key={item.id}
            img={item.project.img}
            category={item.project.category}
          />
        ))}
      </ul>
      <ul className={'projectList'}>
        {splitArr[2].map((item) => (
          <ProjectItem
            key={item.id}
            img={item.project.img}
            category={item.project.category}
          />
        ))}
      </ul>
    </div>
  );
}

function sliceIntoChunks(arr, c) {
  let res = new Array(c);
  for (let i = 0; i < c; ++i) {
    res[i] = [];
  }
  for (let i = 0; i < arr.length; ++i) {
    res[i % c].push(arr[i]);
  }
  return res;
}

Projectlist.propTypes = {};

export default Projectlist;
