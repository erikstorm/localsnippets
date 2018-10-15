import React, { Component } from 'react';

export default class SnippetTagItem extends Component {
  state = {
    active: false
  };
  toggleActive = () => {
    this.setState({ active: !this.state.active });
    this.props.langFilter(this.props.name);
  };
  render() {
    const activeClass =
      (this.state.active ? 'active' : '') +
      ' list-group-item d-flex justify-content-between align-items-center';
    return (
      <li onClick={this.toggleActive} className={activeClass}>
        {this.props.name}
        <span className="badge badge-info badge-pill">{this.props.val}</span>
      </li>
    );
  }
}
