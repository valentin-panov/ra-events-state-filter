import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import json from '../../data/projects.json';
import Toolbar from './Toolbar/Toolbar';
import Projectlist from './ProjectList/Projectlist';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.filters = props.filters;
    this.projects = json;
    this.state = {
      activeFilter: this.filters[0],
      filteredProjects: json,
    };
  }

  // static propTypes = {
  //   prop: PropTypes,
  // };

  selectFilter(event) {
    const activeFilter = event.target.dataset.key;
    if (activeFilter === this.filters[0]) {
      this.setState({
        filteredProjects: this.projects,
        activeFilter,
      });
    } else {
      const filteredProjects = this.projects.filter(
        (project) => project.category === activeFilter
      );
      this.setState({ filteredProjects, activeFilter });
    }
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={this.filters}
          selected={this.state.activeFilter}
          onSelectFilter={this.selectFilter.bind(this)}
        />
        <Projectlist projects={this.state.filteredProjects} />
      </div>
    );
  }
}
