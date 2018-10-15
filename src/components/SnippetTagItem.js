import React, { Component } from 'react';

export default class SnippetTagItem extends Component {
  toggleActive = () => {
    this.props.langFilter(this.props.name);
  };
  render() {
    const shouldBeActive = this.props.filteredLanguages.includes(
      this.props.name
    )
      ? true
      : false;
    const activeClass =
      (shouldBeActive ? 'active' : '') +
      ' list-group-item d-flex justify-content-between align-items-center';

    return (
      <li onClick={this.toggleActive} className={activeClass}>
        {this.props.name}
        <span className="badge badge-info badge-pill">{this.props.val}</span>
      </li>
    );
  }
}
