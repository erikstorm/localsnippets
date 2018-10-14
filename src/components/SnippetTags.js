import React, { Component } from 'react';

export default class SnippetTags extends Component {
  render() {
    let countTags = this.props.snippets
      .map(snip => {
        return snip.language;
      })
      .reduce((acc, index) => {
        if (!acc[index]) {
          acc[index] = 1;
        } else {
          acc[index] = acc[index] + 1;
        }
        return acc;
      }, {});

    return Object.entries(countTags).map(([key, val], idx) => {
      return (
        <li
          key={idx}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {key}
          <span className="badge badge-info badge-pill">{val}</span>
        </li>
      );
    });
  }
}
